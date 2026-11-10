import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { fitMetaDescription, fitMetaTitle } from "@/lib/seo-metadata";

/**
 * Route-specific social metadata so each page shares its own title,
 * description and canonical destination instead of inheriting the homepage
 * preview from a parent layout.
 */
export function pageSocialMetadata(
  title: string,
  description: string,
  path: string,
): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE.url.replace(/\/$/, "")}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const socialTitle = fitMetaTitle(title);
  const image = "/myevstation-hero-banner.jpeg";

  return {
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE.name,
      title: socialTitle,
      description: fitMetaDescription(description),
      images: [{
        url: image,
        width: 1200,
        height: 630,
        alt: "MyEVStation EV charging station opportunities in India",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
