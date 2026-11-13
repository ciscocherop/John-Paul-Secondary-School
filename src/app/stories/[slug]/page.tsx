import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { GiveBand, StoryCard } from "@/components/ui";
import { formatDate } from "@/lib/format";
import { getLatestStories, getStory } from "@/lib/wp";

type Props = PageProps<"/stories/[slug]">;

export async function generateStaticParams() {
  try {
    return (await getLatestStories(12)).map((s) => ({ slug: s.slug }));
  } catch {
    return [{ slug: "exam-season-at-jpss-an-important-step-toward-the-future" }];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStory(slug).catch(() => null);
  if (!story) return { title: "Story not found" };
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: story.image ? { images: [story.image.url] } : undefined,
  };
}

async function Article({ params }: Pick<Props, "params">) {
  const { slug } = await params;
  const story = await getStory(slug);
  if (!story) notFound();

  const more = (await getLatestStories(4).catch(() => [])).filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="wrap max-w-4xl pt-14 md:pt-20">
          <p className="eyebrow">
            <Link href="/stories" className="hover:underline">Stories</Link>
            {story.categories[0] && <span> · {story.categories[0].name}</span>}
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl">{story.title}</h1>
          <p className="mt-5 text-muted">
            <time dateTime={story.date}>{formatDate(story.date)}</time>
          </p>
        </header>

        {story.image && (
          <div className="wrap mt-10 max-w-6xl">
            <div className="arch !rounded-t-[3rem] md:!rounded-t-[8rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={story.image.url}
                alt={story.image.alt}
                width={story.image.width}
                height={story.image.height}
                fetchPriority="high"
                className="!h-auto"
              />
            </div>
          </div>
        )}

        <div
          className="prose-wp wrap max-w-3xl py-14 md:py-20"
          dangerouslySetInnerHTML={{ __html: story.html }}
        />
      </article>

      {more.length > 0 && (
        <section className="border-t-[3px] border-bark">
          <div className="wrap py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl">More from the campus</h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {more.map((s) => (
                <li key={s.id}>
                  <StoryCard story={s} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default function StoryPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<div className="wrap py-20"><div className="frame h-[60vh] animate-pulse" /></div>}>
        <Article params={params} />
      </Suspense>
      <GiveBand />
    </>
  );
}
