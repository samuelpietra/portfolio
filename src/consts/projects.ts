import pietraUiLogo from "@/assets/pietra-ui-logo.png";
import pokedexLogo from "@/assets/pokedex-logo.png";

import { SOCIAL_HANDLE } from "./social";

export const PROJECTS = [
  {
    name: "portfolio",
    href: `https://github.com/${SOCIAL_HANDLE}/portfolio`,
    image: null,
    fallback: "SP",
  },
  {
    name: "pietra-ui",
    href: `https://github.com/${SOCIAL_HANDLE}/pietra-ui`,
    image: pietraUiLogo,
    fallback: "UI",
  },
  {
    name: "pokedex",
    href: `https://github.com/${SOCIAL_HANDLE}/pokedex`,
    image: pokedexLogo,
    fallback: "PK",
  },
] as const;
