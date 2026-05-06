export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
] as const;

export const SECTION_IDS = SECTIONS.map((section) => section.id);
