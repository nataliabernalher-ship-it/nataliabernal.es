export type SocialLink = {
  label: string;
  name: string;
  href: string;
};

export const site = {
  name: "Natalia Bernal",
  url: "https://nataliabernal.es",
  email: "nataliabernalher@gmail.com",
  gaId: "G-FWMWZXBM1M",
  socials: [
    {
      label: "LNKDN",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/natalia-bernal-herrero",
    },
    {
      label: "GITHUB",
      name: "GitHub",
      href: "https://github.com/nataliabernalher-ship-it",
    },
    {
      label: "Bē",
      name: "Behance",
      href: "https://www.behance.net/nataliabernalher",
    },
  ] satisfies SocialLink[],
} as const;
