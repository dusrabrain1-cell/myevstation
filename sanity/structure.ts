import type { StructureResolver } from "sanity/structure";
import { Cog, Newspaper } from "lucide-react";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(Cog)
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.documentTypeListItem("article").title("Articles").icon(Newspaper),
    ]);
