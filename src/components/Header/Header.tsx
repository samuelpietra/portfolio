import { Menu } from "lucide-react";
import { DropdownMenu, Flex, IconButton, Link, Separator } from "pietra-ui";

import "./Header.css";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher, ThemeSwitcherMenuItem } from "@/components/ThemeSwitcher";
import { SECTION_IDS, SECTIONS } from "@/consts";
import { useScrollSpy } from "@/hooks";
import { FormattedMessage, isSupportedLocale, SUPPORTED_LOCALES, useIntl, useLocale } from "@/i18n";

export function Header() {
  const { activeAnchorId, setActiveAnchorId } = useScrollSpy(SECTION_IDS);
  const { locale, setLocale } = useLocale();
  const intl = useIntl();

  const isActive = (id: string) => activeAnchorId === id;
  const handleNavClick = (id: string) => setActiveAnchorId(id);

  return (
    <header className="header">
      <Flex align="center" className="header-inner" justify="between" px="5">
        <Link
          aria-label="Samuel Pietra"
          className="header-brand"
          color="gray"
          highContrast
          href="/"
          size="1"
          underline="none"
          weight="bold"
        />

        <Flex align="center" display={{ initial: "none", sm: "flex" }} gap="5">
          {SECTIONS.map((section) => (
            <Link
              className="nav-link"
              color="gray"
              data-active={isActive(section.id) || undefined}
              highContrast={isActive(section.id) || undefined}
              href={`#${section.id}`}
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              size="2"
              underline="none"
            >
              <FormattedMessage id={`nav.${section.id}`} defaultMessage={section.label} />
            </Link>
          ))}
          <Separator orientation="vertical" size="1" />
          <LanguageSwitcher />
          <ThemeSwitcher />
        </Flex>

        <Flex display={{ initial: "flex", sm: "none" }}>
          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger>
              <IconButton
                aria-label={intl.formatMessage({ id: "header.openMenu" })}
                color="gray"
                size="3"
                variant="ghost"
              >
                <Menu size={24} />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              align="end"
              // prevent scroll-back-to-top when the menu closes
              onCloseAutoFocus={(e) => e.preventDefault()}
              sideOffset={8}
            >
              {SECTIONS.map((section) => (
                <DropdownMenu.Item key={section.id} asChild>
                  <Link
                    className="dropdown-nav-link"
                    color="gray"
                    data-active={isActive(section.id) || undefined}
                    href={`#${section.id}`}
                    onClick={() => handleNavClick(section.id)}
                    underline="none"
                  >
                    <FormattedMessage id={`nav.${section.id}`} defaultMessage={section.label} />
                  </Link>
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Separator />
              <DropdownMenu.RadioGroup
                onValueChange={(value) => {
                  if (isSupportedLocale(value)) {
                    setLocale(value);
                  }
                }}
                value={locale}
              >
                {SUPPORTED_LOCALES.map((option) => (
                  <DropdownMenu.RadioItem key={option} value={option}>
                    {intl.formatMessage({ id: `language.${option}` })}
                  </DropdownMenu.RadioItem>
                ))}
              </DropdownMenu.RadioGroup>
              <DropdownMenu.Separator />
              <ThemeSwitcherMenuItem />
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Flex>
    </header>
  );
}
