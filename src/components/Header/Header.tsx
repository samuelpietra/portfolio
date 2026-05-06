import { Menu } from "lucide-react";
import { DropdownMenu, Flex, IconButton, Link, Separator } from "pietra-ui";

import "./Header.css";

import { useScrollSpy } from "@/hooks";

import { NAV_ITEMS, SECTION_IDS, SOCIAL_LINKS } from "./Header.consts";

export function Header() {
  const { activeAnchorId, setActiveAnchorId } = useScrollSpy(SECTION_IDS);

  const isActive = (id: string) => activeAnchorId === id;
  const handleNavClick = (id: string) => setActiveAnchorId(id);

  return (
    <header className="header">
      <Flex align="center" className="header-inner" justify="between" px="5">
        <Link
          className="header-brand"
          color="gray"
          highContrast
          href="/"
          size="1"
          underline="none"
          weight="bold"
        >
          Samuel Pietra
        </Link>

        <Flex align="center" display={{ initial: "none", sm: "flex" }} gap="5">
          {NAV_ITEMS.map((item) => (
            <Link
              className="nav-link"
              color="gray"
              data-active={isActive(item.id) || undefined}
              highContrast={isActive(item.id) || undefined}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              size="2"
              underline="none"
            >
              {item.label}
            </Link>
          ))}
          <Separator orientation="vertical" size="1" />
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;

            return (
              <IconButton
                aria-label={social.label}
                asChild
                color="gray"
                key={social.label}
                variant="ghost"
              >
                <a
                  href={social.href}
                  rel={social.external ? "noreferrer" : undefined}
                  target={social.external ? "_blank" : undefined}
                >
                  <Icon size={20} />
                </a>
              </IconButton>
            );
          })}
        </Flex>

        <Flex display={{ initial: "flex", sm: "none" }}>
          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger>
              <IconButton aria-label="Open menu" color="gray" size="3" variant="ghost">
                <Menu size={24} />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              align="end"
              // prevent scroll-back-to-top when the menu closes
              onCloseAutoFocus={(e) => e.preventDefault()}
              sideOffset={8}
            >
              {NAV_ITEMS.map((item) => (
                <DropdownMenu.Item key={item.id} asChild>
                  <Link
                    className="dropdown-nav-link"
                    color="gray"
                    data-active={isActive(item.id) || undefined}
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    underline="none"
                  >
                    {item.label}
                  </Link>
                </DropdownMenu.Item>
              ))}
              <DropdownMenu.Separator />
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <DropdownMenu.Item asChild key={social.label}>
                    <Link
                      className="dropdown-nav-link"
                      color="gray"
                      href={social.href}
                      rel={social.external ? "noreferrer" : undefined}
                      target={social.external ? "_blank" : undefined}
                      underline="none"
                    >
                      <Flex align="center" gap="2">
                        <Icon size={14} />
                        {social.label}
                      </Flex>
                    </Link>
                  </DropdownMenu.Item>
                );
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Flex>
    </header>
  );
}
