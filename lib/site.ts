export const SITE = {
  name: "Kunj Vaghani",
  email: "kunjvaghani66@gmail.com",
  location: "Surat, Gujarat, India",
  year: new Date().getFullYear(),
};

export const SOCIAL_LINKS = {
  github: "https://github.com/kunjvaghani/",
  linkedin: "https://www.linkedin.com/in/kunj-vaghani-6194b0292/",
  twitter: "https://twitter.com",
};

export const CODING_PROFILES = [
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/kunjvaghani/",
    icon: "leetcode",
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/V_K_66",
    icon: "codeforces",
  },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/kunjvagh5z1t",
    icon: "geeksforgeeks",
  },
  {
    label: "CodeChef",
    href: "https://www.codechef.com/users/kunj_vaghani",
    icon: "codechef",
  },
  {
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: "github",
  },
] as const;
