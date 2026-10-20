import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableBody } from "@/components/custom/PortableBody";
import { articleBySlugQuery, articleSlugsQuery, sanityFetch, urlFor } from "@/lib/sanity";
import type { PortableTextBlock } from "@portabletext/types";
import { blogOne, blogTwo, blogThree, blogFour, blogFive, blogSix, blogSeven, blogEight, blogNine, blogTen, blogEleven, blogTwelve, blogThirteen, blogFourteen, blogFifteen, blogSixteen, blogSeventeen, blogEighteen, blogNineteen, blogTwenty } from "@/lib/blog-fallbacks";

type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  author?: string;
  categories?: string[];
  publishedAt?: string;
  coverImage?: { asset?: { _ref?: string } };
  body?: PortableTextBlock[];
  seo?: { metaTitle?: string; metaDescription?: string; ogImage?: { asset?: { _ref?: string } } };
};

type PageProps = { params: Promise<{ slug: string }> };

async function getArticle(slug: string) {
  try {
    const article = await sanityFetch<Article | null>(articleBySlugQuery, { slug });
    if (article) return article;
  } catch (error) {
    console.error("[blog detail] Sanity article fetch failed:", error);
  }
  if (slug === blogOne.slug) return blogOne as Article;
  if (slug === blogTwo.slug) return blogTwo as Article;
  if (slug === blogThree.slug) return blogThree as Article;
  if (slug === blogFour.slug) return blogFour as Article;
  if (slug === blogFive.slug) return blogFive as Article;
  if (slug === blogSix.slug) return blogSix as Article;
  if (slug === blogSeven.slug) return blogSeven as Article;
  if (slug === blogEight.slug) return blogEight as Article;
  if (slug === blogNine.slug) return blogNine as Article;
  if (slug === blogTen.slug) return blogTen as Article;
  if (slug === blogEleven.slug) return blogEleven as Article;
  if (slug === blogTwelve.slug) return blogTwelve as Article;
  if (slug === blogThirteen.slug) return blogThirteen as Article;
  if (slug === blogFourteen.slug) return blogFourteen as Article;
  if (slug === blogFifteen.slug) return blogFifteen as Article;
  if (slug === blogSixteen.slug) return blogSixteen as Article;
  if (slug === blogSeventeen.slug) return blogSeventeen as Article;
  if (slug === blogEighteen.slug) return blogEighteen as Article;
  if (slug === blogNineteen.slug) return blogNineteen as Article;
  if (slug === blogTwenty.slug) return blogTwenty as Article;
  return null;
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>(articleSlugsQuery);
    return [...new Set([blogOne.slug, blogTwo.slug, blogThree.slug, blogFour.slug, blogFive.slug, blogSix.slug, blogSeven.slug, blogEight.slug, blogNine.slug, blogTen.slug, blogEleven.slug, blogTwelve.slug, blogThirteen.slug, blogFourteen.slug, blogFifteen.slug, blogSixteen.slug, blogSeventeen.slug, blogEighteen.slug, blogNineteen.slug, blogTwenty.slug, ...slugs.map(({ slug }) => slug)])].map((slug) => ({ slug }));
  } catch (error) {
    console.error("[blog detail] Could not load article slugs:", error);
    return [{ slug: blogOne.slug }, { slug: blogTwo.slug }, { slug: blogThree.slug }, { slug: blogFour.slug }, { slug: blogFive.slug }, { slug: blogSix.slug }, { slug: blogSeven.slug }, { slug: blogEight.slug }, { slug: blogNine.slug }, { slug: blogTen.slug }, { slug: blogEleven.slug }, { slug: blogTwelve.slug }, { slug: blogThirteen.slug }, { slug: blogFourteen.slug }, { slug: blogFifteen.slug }, { slug: blogSixteen.slug }, { slug: blogSeventeen.slug }, { slug: blogEighteen.slug }, { slug: blogNineteen.slug }, { slug: blogTwenty.slug }];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found", robots: { index: false, follow: true } };

  const title = article.seo?.metaTitle || article.title;
  const description = article.seo?.metaDescription || article.excerpt || `Read ${article.title} — practical EV charging station guidance from MyEVStation.`;
  const imageSource = article.seo?.ogImage ?? article.coverImage;
  const imageUrl = imageSource?.asset?._ref
    ? urlFor(imageSource).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;
  const canonical = `/blogs/blog/${article.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}),
      ...(article.author ? { authors: [article.author] } : {}),
      ...(imageUrl ? { images: [{ url: imageUrl, width: 1200, height: 630, alt: article.title }] } : {}),
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const imageUrl = article.coverImage?.asset?._ref
    ? urlFor(article.coverImage).width(1400).height(800).fit("max").auto("format").url()
    : undefined;
  const articleUrl = `https://myevstation.co/blogs/blog/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seo?.metaDescription || article.excerpt || article.title,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}),
    ...(article.author ? { author: { "@type": "Person", name: article.author } } : {}),
    publisher: { "@type": "Organization", name: "MyEVStation", url: "https://myevstation.co" },
    ...(imageUrl ? { image: [imageUrl] } : {}),
  };

  return (
    <main className="min-h-screen bg-paper">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:pt-12">
        <nav aria-label="Breadcrumb" className="mb-7 text-sm text-ink/60">
          <Link href="/" className="hover:text-mission">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blogs" className="hover:text-mission">Blogs</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-ink">{article.title}</span>
        </nav>

        <article>
          <header>
            {article.categories?.length ? (
              <div className="mb-4 flex flex-wrap gap-2">
                {article.categories.map((category) => (
                  <span key={category} className="rounded-full bg-mission-soft px-3 py-1 text-xs font-bold text-mission">{category}</span>
                ))}
              </div>
            ) : null}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">{article.title}</h1>
            {article.excerpt && <p className="mt-5 text-lg leading-8 text-ink/70">{article.excerpt}</p>}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink/55">
              {article.author && <span>By {article.author}</span>}
              {article.publishedAt && (
                <time dateTime={article.publishedAt}>
                  Published {new Date(article.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </time>
              )}
            </div>
          </header>

          {imageUrl && (
            <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt={article.title} className="max-h-[520px] w-full object-cover" fetchPriority="high" />
            </figure>
          )}

          <div className="prose prose-lg mt-9 max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-ink prose-p:leading-8 prose-p:text-ink/80 prose-a:font-semibold prose-a:text-mission prose-strong:text-ink prose-li:text-ink/80 prose-blockquote:border-mission prose-blockquote:text-ink/70">
            {article.body?.length ? (
              <PortableBody value={article.body} />
            ) : (
              <p>This article is being prepared. Please check back soon for the complete guide.</p>
            )}
          </div>
        </article>

        <aside className="mt-14 rounded-2xl bg-[#0b5a42] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-extrabold">Planning an EV charging station?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
            Explore MyEVStation’s business models, review indicative investment assumptions and check your site’s suitability before making a decision.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/ev-charging-calculator" className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0b5a42] hover:bg-cream">Open calculator</Link>
            <Link href="/contact" className="rounded-lg border border-white/50 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Discuss your site</Link>
            <Link href="/blogs" className="rounded-lg border border-white/50 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">All blogs</Link>
          </div>
        </aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </main>
  );
}
