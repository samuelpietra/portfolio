import type { Locale } from "./i18n.types";

const en = {
  "about.body":
    "A software engineer. Raised in full path environments — from architecture to interface. Been writing the JavaScript-stack code with ❤︎ for 8+ years. Quite a trip!",
  "about.reachMe": "Reach me on",
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
  "projects.comingSoon.subtitle": "Your project here?",
  "projects.comingSoon.title": "Coming soon",
  "projects.pietra-ui.description": "My UI library.",
  "projects.pietra-ui.label": "pietra-ui on GitHub",
  "projects.pokedex.description": "A take-home.",
  "projects.pokedex.label": "pokedex on GitHub",
  "projects.portfolio.description": "This website!",
  "projects.portfolio.label": "portfolio on GitHub",
  "resume.body":
    "Besides social media, you can learn more about me through my <a>resume</a>. It will be a pleasure to do business with you!",
  "resume.linkLabel": "Open resume in new tab",
  "themeSwitcher.dark": "Dark",
  "themeSwitcher.light": "Light",
  "themeSwitcher.toDark": "Switch to dark mode",
  "themeSwitcher.toLight": "Switch to light mode",
} as const;

export type MessageId = keyof typeof en;

type Catalog = Record<MessageId, string>;

const pt: Catalog = {
  "about.body":
    "Um engenheiro de software. Criado em ambientes de segmento completo — da arquitetura à interface. Escrevendo código em JavaScript com ❤︎ há 8+ anos. Que jornada!",
  "about.reachMe": "Me segue no",
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
  "projects.comingSoon.subtitle": "Seu projeto aqui?",
  "projects.comingSoon.title": "Em breve",
  "projects.pietra-ui.description": "Minha lib de UI.",
  "projects.pietra-ui.label": "pietra-ui no GitHub",
  "projects.pokedex.description": "Um teste prático.",
  "projects.pokedex.label": "pokedex no GitHub",
  "projects.portfolio.description": "Este mesmo site!",
  "projects.portfolio.label": "portfolio no GitHub",
  "resume.body":
    "Além das redes sociais, você pode saber mais sobre mim através do meu <a>currículo</a>. Será um prazer fazer negócios!",
  "resume.linkLabel": "Abrir currículo em nova aba",
  "themeSwitcher.dark": "Escuro",
  "themeSwitcher.light": "Claro",
  "themeSwitcher.toDark": "Mudar para modo escuro",
  "themeSwitcher.toLight": "Mudar para modo claro",
};

export const messages: Record<Locale, Catalog> = { en, pt };
