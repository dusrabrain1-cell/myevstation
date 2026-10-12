/**
 * Static site configuration for MyEVStation.
 */
export const SITE = {
  name: "MyEVStation",
  shortDescription:
    "EV charging station opportunities and partnerships across India.",
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
  { label: "Home", href: "/" },
  { label: "Why MyEVStation", href: "/why-myevstation" },
  { label: "Business Model", href: "/business-model" },
  { label: "Technology", href: "/technology" },
  { label: "Investment", href: "/ev-charging-investment-guide" },
  { label: "Calculator", href: "/ev-charging-calculator" },
  { label: "Impact", href: "/impact" },
  { label: "FAQs", href: "/faq" },
  { label: "About Us", href: "/about-us" },
];
