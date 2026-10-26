import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/custom/PageHeader";
import { articlesQuery, sanityFetch, urlFor } from "@/lib/sanity";
import { blogOne, blogTwo, blogThree, blogFour, blogFive, blogSix, blogSeven, blogEight, blogNine, blogTen, blogEleven, blogTwelve, blogThirteen, blogFourteen, blogFifteen, blogSixteen, blogSeventeen, blogEighteen, blogNineteen, blogTwenty, blogTwentyOne, blogTwentyTwo, blogTwentyThree, blogTwentyFour, blogTwentyFive, blogTwentySix, blogTwentySeven, blogTwentyEight, blogTwentyNine, blogThirty } from "@/lib/blog-fallbacks";

export const metadata: Metadata = {
  title: "EV Charging Station Blogs & Guides in India",
  description:
    "Explore MyEVStation blogs on EV charging station business, investment costs, ROI, ex-servicemen opportunities, housing societies, installation requirements and regional EV charging markets in India.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "EV Charging Station Blogs & Guides in India | MyEVStation",
    description:
      "Practical guides to EV charging station setup, investment, site selection, installation and business partnerships in India.",
    url: "/blogs",
    type: "website",
  },
};

type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  author?: string;
  categories?: string[];
  publishedAt?: string;
  coverImage?: unknown;
};

const fallbackImageUrl = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=80";

export default async function BlogsPage() {
  let articles: Article[] = [];
  try {
    articles = await sanityFetch<Article[]>(articlesQuery);
  } catch (error) {
    console.error("[blogs] Could not load published articles:", error);
  }

  const fallbacks = [blogOne, blogTwo, blogThree, blogFour, blogFive, blogSix, blogSeven, blogEight, blogNine, blogTen, blogEleven, blogTwelve, blogThirteen, blogFourteen, blogFifteen, blogSixteen, blogSeventeen, blogEighteen, blogNineteen, blogTwenty, blogTwentyOne, blogTwentyTwo, blogTwentyThree, blogTwentyFour, blogTwentyFive, blogTwentySix, blogTwentySeven, blogTwentyEight, blogTwentyNine, blogThirty].filter((fallback) => !articles.some((article) => article.slug === fallback.slug));
  articles = [...fallbacks, ...articles];

  return (
    <main className="min-h-screen bg-paper">
      <PageHeader
        title="MyEVStation Blogs"
        description="Practical, keyword-focused guides to EV charging station business opportunities, investment planning, installation, site selection and the EV charging ecosystem in India."
      />

      <section className="mx-auto max-w-6xl px-4 pb-16" aria-label="Published blog articles">
        <div className="mb-8 flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-mission">Insights & guides</p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink">Explore all articles</h2>
          </div>
          <p className="text-sm text-ink/65">
            {articles.length} {articles.length === 1 ? "article" : "articles"} published
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const image = article.coverImage as { asset?: { _ref?: string } } | undefined;
              const imageUrl = image?.asset?._ref
                ? urlFor(image).width(900).height(540).fit("crop").auto("format").url()
                : undefined;
              return (
                <article key={article._id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md">
                  <Link href={`/blogs/blog/${article.slug}`} className="group block" aria-label={`Read ${article.title}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrl || fallbackImageUrl}
                      alt={article.title}
                      loading="lazy"
                      className="aspect-[5/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {(article.categories ?? []).slice(0, 2).map((category) => (
                        <span key={category} className="rounded-full bg-mission-soft px-2.5 py-1 text-[11px] font-bold text-mission">{category}</span>
                      ))}
                      {article.publishedAt && (
                        <time dateTime={article.publishedAt} className="text-xs text-ink/55">
                          {new Date(article.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </time>
                      )}
                    </div>
                    <h3 className="text-lg font-extrabold leading-snug text-ink">
                      <Link href={`/blogs/blog/${article.slug}`} className="hover:text-mission">{article.title}</Link>
                    </h3>
                    {article.excerpt && <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/70">{article.excerpt}</p>}
                    <div className="mt-auto pt-5">
                      <Link href={`/blogs/blog/${article.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-mission hover:underline">
                        Read article <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-line bg-white px-6 py-12 text-center">
            <h2 className="text-xl font-extrabold text-ink">New guides are on the way</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-ink/70">
              Published articles will appear here automatically when they are added to the MyEVStation Sanity CMS. The blog page is ready; publish articles with a title, slug, summary and complete content to make them available to readers and search engines.
            </p>
            <Link href="/contact" className="mt-6 inline-flex rounded-lg bg-mission px-5 py-3 text-sm font-bold text-white hover:bg-mission-dark">
              Contact MyEVStation
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
