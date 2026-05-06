import type { Locale } from "./i18n.types";

export const SUPPORTED_LOCALES = ["en", "pt"] as const;
export const DEFAULT_LOCALE: Locale = "en";
export const STORAGE_KEY = "@samuelpietra/locale";
