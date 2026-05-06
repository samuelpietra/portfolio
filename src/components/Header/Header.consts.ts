import { GitHub, LinkedIn } from "@/components/Icon";

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
];

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/samuelpietra",
    label: "GitHub",
    icon: GitHub,
    external: true,
  },
  {
    href: "https://linkedin.com/in/samuelpietra",
    label: "LinkedIn",
    icon: LinkedIn,
    external: true,
  },
];
