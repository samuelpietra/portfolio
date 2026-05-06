import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./i18n.consts";
import type { Locale } from "./i18n.types";

export function isSupported(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function detectLocale(): Locale {
  const browserLanguages = navigator.languages ?? [navigator.language];

  for (const language of browserLanguages) {
    if (isSupported(language)) {
      return language;
    }

    const baseLanguage = language.split("-")[0];
    const match = SUPPORTED_LOCALES.find((supported) => supported.split("-")[0] === baseLanguage);

    if (match) {
      return match;
    }
  }

  return DEFAULT_LOCALE;
}
