import { SITE } from "@/lib/constants";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export default function SeoBreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const base = SITE.url.replace(/\\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
