import { Button, DropdownMenu } from "pietra-ui";

import { isSupported, type Locale, SUPPORTED_LOCALES, useIntl, useLocale } from "@/i18n";

const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const intl = useIntl();

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger>
        <Button
          aria-label={intl.formatMessage({ id: "languageSwitcher.label" })}
          color="gray"
          size="2"
          variant="ghost"
        >
          {LOCALE_SHORT[locale]}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" onCloseAutoFocus={(e) => e.preventDefault()} sideOffset={8}>
        <DropdownMenu.RadioGroup
          onValueChange={(value) => {
            if (isSupported(value)) {
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
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
