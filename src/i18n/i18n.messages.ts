import type { Locale } from "./i18n.types";

const en = {
  "header.openMenu": "Open menu",
  "language.en": "English",
  "language.pt": "Portuguese",
  "languageSwitcher.label": "Language",
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.resume": "Resume",
} as const;

export type MessageId = keyof typeof en;

type Catalog = Record<MessageId, string>;

const pt: Catalog = {
  "header.openMenu": "Abrir menu",
  "language.en": "Inglês",
  "language.pt": "Português",
  "languageSwitcher.label": "Idioma",
  "nav.about": "Sobre",
  "nav.projects": "Projetos",
  "nav.resume": "Currículo",
};

export const messages: Record<Locale, Catalog> = { en, pt };
