import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { TableOfContents, ShareButtons } from "./BlogArticleClient";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.metaTitle} | Shenandoah Electrolysis`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(params.slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    publisher: {
      "@type": "Organization",
      name: "Shenandoah Electrolysis by Gillian Vickers",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://shenandoahelectrolysis.com/blog/${post.slug}`,
    },
  };

  const faqItems = extractFaqItems(post.content);
  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="min-h-screen bg-ivory">
        {/* Article Header */}
        <section className="bg-charcoal text-ivory pt-32 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-taupe-light hover:text-champagne transition-colors text-sm mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <span className="inline-block bg-sage/20 text-sage-light text-xs font-medium px-3 py-1 rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="font-serif text-display-sm md:text-display-md lg:text-display-lg text-ivory mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-taupe-light">
              <span className="font-medium text-ivory">{post.author}</span>
              <span className="w-1 h-1 bg-taupe rounded-full" />
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="w-1 h-1 bg-taupe rounded-full" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </section>

        {/* Featured Image Placeholder */}
        <div className="max-w-4xl mx-auto px-4 -mt-8">
          <div className="aspect-[21/9] bg-beige rounded-2xl overflow-hidden relative shadow-elegant">
            <div className="absolute inset-0 flex items-center justify-center text-taupe">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-2 opacity-30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm opacity-50">{post.featuredImageAlt}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content with TOC */}
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr_250px] gap-12">
            {/* Main Content */}
            <article className="max-w-3xl">
              {/* Share */}
              <div className="mb-10 pb-6 border-b border-beige">
                <ShareButtons title={post.title} slug={post.slug} />
              </div>

              {/* Article Body */}
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-beige">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-ivory-dark text-taupe px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-10 bg-white rounded-2xl p-8 shadow-soft">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-full bg-beige flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xl text-taupe">GV</span>
                  </div>
                  <div>
                    <p className="font-serif text-lg text-charcoal mb-1">
                      {post.author}
                    </p>
                    <p className="text-sm text-taupe mb-3">
                      Professional Electrologist, Shenandoah Electrolysis
                    </p>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      Gillian Vickers is a professional electrologist dedicated
                      to helping clients achieve permanently smooth skin through
                      personalized treatment plans and expert care.
                    </p>
                    <Link
                      href="/about"
                      className="inline-block mt-3 text-sm text-sage-dark hover:text-champagne transition-colors"
                    >
                      Learn more about Gillian →
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar TOC — Desktop Only */}
            <aside className="hidden lg:block">
              <TableOfContents content={post.content} />
            </aside>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-display-sm text-charcoal mb-10">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block"
                  >
                    <article className="bg-ivory rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-[16/10] bg-beige relative">
                        <div className="absolute inset-0 flex items-center justify-center text-taupe">
                          <svg
                            className="w-8 h-8 opacity-30"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="inline-block self-start bg-sage-light/30 text-sage-dark text-xs font-medium px-3 py-1 rounded-full mb-3">
                          {related.category}
                        </span>
                        <h3 className="font-serif text-lg text-charcoal mb-2 group-hover:text-champagne transition-colors leading-snug">
                          {related.title}
                        </h3>
                        <p className="text-warm-gray text-sm leading-relaxed flex-1">
                          {related.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-taupe mt-4 pt-4 border-t border-beige">
                          <time>
                            {new Date(related.publishedDate).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric", year: "numeric" }
                            )}
                          </time>
                          <span>{related.readingTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="bg-ivory py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-charcoal rounded-2xl p-12">
              <h2 className="font-serif text-display-sm text-ivory mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-taupe-light mb-8 max-w-lg mx-auto">
                Schedule your appointment with Gillian Vickers and begin your
                journey to permanently smooth skin.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-champagne hover:bg-champagne-light text-charcoal font-medium px-8 py-3 rounded-full transition-colors"
              >
                Book Your Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function extractFaqItems(
  html: string
): { question: string; answer: string }[] {
  const items: { question: string; answer: string }[] = [];
  const faqSectionMatch = html.match(
    /id="faq"[\s\S]*?<\/h2>([\s\S]*?)(?:<div class="bg-ivory|$)/
  );
  if (!faqSectionMatch) return items;

  const faqHtml = faqSectionMatch[1];
  const questionRegex =
    /<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let match;
  while ((match = questionRegex.exec(faqHtml)) !== null) {
    const question = match[1].replace(/<[^>]*>/g, "").trim();
    const answer = match[2].replace(/<[^>]*>/g, "").trim();
    if (question && answer) {
      items.push({ question, answer });
    }
  }
  return items;
}
