import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { urlFor } from "@/lib/sanity";

/** Keep legacy and non-preferred MyEVStation host links on the canonical host. */
function normalizeInternalHref(href: string): string {
  try {
    const url = new URL(href);
    if (["myevstation.co", "www.myevstation.co", "myevstation.co.in", "www.myevstation.co.in"].includes(url.hostname)) {
      return `${url.pathname}${url.search}${url.hash}` || "/";
    }
  } catch {
    // Relative and non-URL links are left unchanged.
  }
  return href;
}

/** Image block as stored by the blockContent schema (image + alt + caption). */
type BodyImage = {
  asset?: { _ref?: string };
  alt?: string;
  caption?: string;
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: BodyImage }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(1200).fit("max").auto("format").url();
      return (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={value.alt ?? ""} loading="lazy" />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href: string = normalizeInternalHref(value?.href ?? "#");
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
};

/** Renders a Sanity Portable Text body. Wrap in a `prose` container for styling. */
export function PortableBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
