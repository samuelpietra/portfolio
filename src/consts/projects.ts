import pietraUiLogoDark from "@/assets/pietra-ui-logo-dark.png";
import pietraUiLogoLight from "@/assets/pietra-ui-logo-light.png";
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
    image: { light: pietraUiLogoLight, dark: pietraUiLogoDark },
    fallback: "UI",
  },
  {
    name: "pokedex",
    href: `https://github.com/${SOCIAL_HANDLE}/pokedex`,
    image: { light: pokedexLogo, dark: pokedexLogo },
    fallback: "PK",
  },
] as const;
