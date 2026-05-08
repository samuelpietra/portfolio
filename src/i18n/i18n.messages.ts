import type { Locale } from "./i18n.types";

const en = {
  "header.openMenu": "Open menu",
  "hero.challenge": "Challenge",
  "hero.headline": "Hi, I'm Sam.",
  "hero.imageAlt": "Portrait of Samuel Pietra",
  "hero.impact": "Impact",
  "hero.solution": "Solution",
  "hero.tagline":
    "I turn complex technical decisions into reliable, well-organized software across backend, frontend, and AI, aiming for products people can use with clarity.",
  "language.en": "English",
  "language.pt": "Portuguese",
  "languageSwitcher.label": "Language",
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.resume": "Resume",
  "themeSwitcher.dark": "Dark",
  "themeSwitcher.light": "Light",
  "themeSwitcher.toDark": "Switch to dark mode",
  "themeSwitcher.toLight": "Switch to light mode",
} as const;

export type MessageId = keyof typeof en;

type Catalog = Record<MessageId, string>;

const pt: Catalog = {
  "header.openMenu": "Abrir menu",
  "hero.challenge": "Desafio",
  "hero.headline": "Prazer, Samuel.",
  "hero.imageAlt": "Retrato de Samuel Pietra",
  "hero.impact": "Impacto",
  "hero.solution": "Solução",
  "hero.tagline":
    "Transformo decisões técnicas complexas em software confiável e bem organizado, abrangendo backend, frontend e IA, com o objetivo de criar produtos que as pessoas possam usar com clareza.",
  "language.en": "Inglês",
  "language.pt": "Português",
  "languageSwitcher.label": "Idioma",
  "nav.about": "Sobre",
  "nav.projects": "Projetos",
  "nav.resume": "Currículo",
  "themeSwitcher.dark": "Escuro",
  "themeSwitcher.light": "Claro",
  "themeSwitcher.toDark": "Mudar para modo escuro",
  "themeSwitcher.toLight": "Mudar para modo claro",
};

export const messages: Record<Locale, Catalog> = { en, pt };
