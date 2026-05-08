import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import { DEFAULT_LOCALE, STORAGE_KEY } from "./i18n.consts";
import { messages } from "./i18n.messages";
import type { Locale } from "./i18n.types";
import { detectLocale, isSupportedLocale } from "./i18n.utils";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored && isSupportedLocale(stored)) {
      return stored;
    }

    return detectLocale();
  });

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider defaultLocale={DEFAULT_LOCALE} locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
