export type SocialLink = {
  label: string;
  name: string;
  href: string;
};

export const site = {
  name: "Natalia Bernal",
  url: "https://nataliabernal.es",
  email: "nataliabernalher@gmail.com",
  socials: [
    {
      label: "LNKDN",
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/natalia-bernal-herrero",
    },
    {
      label: "INSTA",
      name: "Instagram",
      href: "https://www.instagram.com/nataliabernalher",
    },
    {
      label: "Bē",
      name: "Behance",
      href: "https://www.behance.net/nataliabernalher",
    },
  ] satisfies SocialLink[],
} as const;
