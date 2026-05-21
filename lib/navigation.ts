export type NavItem = {
  label: string;
  href: string;
  sectionId?: string;
  external?: boolean;
  download?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
  {
    label: "Resume",
    href: "/resume.pdf",
    download: true,
  },
];

export const SECTION_IDS = NAV_ITEMS.filter((item) => item.sectionId).map(
  (item) => item.sectionId as string,
);
