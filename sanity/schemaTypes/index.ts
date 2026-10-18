import { type SchemaTypeDefinition } from "sanity";

import { blockContent } from "./objects/blockContent";
import { seo } from "./objects/seo";
import { siteSettings } from "./siteSettings";
import { article } from "./article";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, seo, siteSettings, article],
};
