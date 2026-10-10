/**
 * Static site configuration for MyEVStation.
 */
export const SITE = {
  name: "MyEVStation",
  shortDescription:
    "Veteran-led EV charging infrastructure, franchise and location partnerships across India.",
  url: "https://myevstation-9rj8.vercel.app",
  email: "hello@myevstation.in",
  phone: "+919625670132",
} as const;

export interface NavLink {
  label: string;
  href: string;
  comingSoon?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "EV Station Models", href: "/#model" },
  { label: "Investment Calculator", href: "/#investment" },
  { label: "Technology & Safety", href: "/#technology" },
  { label: "Our Mission", href: "/#mission" },
];
