import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Electrolysis Blog & Resources | Shenandoah Electrolysis",
  description:
    "Expert articles on permanent hair removal, electrolysis education, and skincare. Learn about electrolysis from Gillian Vickers at Shenandoah Electrolysis.",
  openGraph: {
    title: "Electrolysis Blog & Resources | Shenandoah Electrolysis",
    description:
      "Expert articles on permanent hair removal, electrolysis education, and skincare.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="bg-charcoal text-ivory pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Knowledge & Education
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg text-ivory mb-6">
            Electrolysis Blog & Resources
          </h1>
          <p className="text-taupe-light text-lg max-w-2xl mx-auto leading-relaxed">
            Expert articles on permanent hair removal, electrolysis education,
            and skincare — written by Gillian Vickers.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-20">
            <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-6">
              Latest Article
            </p>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-[4/3] bg-beige rounded-2xl overflow-hidden relative">
                  {featuredPost.featuredImage ? (
                    <Image
                      src={featuredPost.featuredImage}
                      alt={featuredPost.featuredImageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-taupe">
                      <p className="text-sm opacity-60">Featured Image</p>
                    </div>
                  )}
                </div>
                <div>
                  <span className="inline-block bg-sage-light/30 text-sage-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-serif text-display-sm md:text-display-md text-charcoal mb-4 group-hover:text-champagne transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-warm-gray leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-taupe">
                    <span>{featuredPost.author}</span>
                    <span className="w-1 h-1 bg-taupe rounded-full" />
                    <time>
                      {new Date(featuredPost.publishedDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </time>
                    <span className="w-1 h-1 bg-taupe rounded-full" />
                    <span>{featuredPost.readingTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* All Articles Grid */}
        <section>
          <h2 className="font-serif text-display-sm text-charcoal mb-10">
            All Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[16/10] bg-beige relative">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-taupe">
                        <svg className="w-10 h-10 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block self-start bg-sage-light/30 text-sage-dark text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-xl text-charcoal mb-3 group-hover:text-champagne transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-taupe pt-4 border-t border-beige">
                      <time>
                        {new Date(post.publishedDate).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </time>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 text-center">
          <div className="bg-charcoal rounded-2xl p-12 md:p-16">
            <h2 className="font-serif text-display-sm md:text-display-md text-ivory mb-4">
              Have Questions About Electrolysis?
            </h2>
            <p className="text-taupe-light text-lg mb-8 max-w-xl mx-auto">
              Book a consultation to discuss your permanent hair removal goals
              with Gillian Vickers.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-champagne hover:bg-champagne-light text-charcoal font-medium px-8 py-3 rounded-full transition-colors"
            >
              Book Your Appointment
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
