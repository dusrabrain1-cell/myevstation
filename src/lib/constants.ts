/**
 * Static site configuration for MyEVStation.
 */
export const SITE = {
  name: "MyEVStation",
  shortDescription:
    "EV charging station opportunities and partnerships across India.",
  url: "https://myevstation.co",
  email: "hello@myevstation.in",
  phone: "+919876260822",
  whatsappPhone: "+919876260822",
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
  { label: "Calculator", href: "/ev-charging-calculator" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQs", href: "/faq" },
  { label: "About Us", href: "/about-us" },
];
