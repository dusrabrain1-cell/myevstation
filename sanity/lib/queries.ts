import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    title, tagline, description, logo, contactEmail, contactPhone, address, socials
  }
`);

export const articlesQuery = defineQuery(`
  *[_type == "article"] | order(publishedAt desc){
    _id, title, "slug": slug.current, excerpt, author, categories, publishedAt, coverImage
  }
`);

export const articleBySlugQuery = defineQuery(`
  *[_type == "article" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, excerpt, author, categories, publishedAt,
    coverImage, body, seo
  }
`);

export const articleSlugsQuery = defineQuery(`
  *[_type == "article" && defined(slug.current)]{ "slug": slug.current }
`);
