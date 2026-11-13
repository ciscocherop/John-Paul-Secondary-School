import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { GiveBand } from "@/components/ui";
import { getPage } from "@/lib/wp";

/**
 * Fallback for every WordPress page that has not been given its own design yet
 * (impact reports, events, planned giving and so on). The content comes straight
 * from WordPress and is set in this site's typography.
 */

type Props = PageProps<"/[slug]">;

export async function generateStaticParams() {
  return [{ slug: "impact-report-2025" }, { slug: "why-john-paul" }, { slug: "upcoming-events" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug).catch(() => null);
  return { title: page?.title || "Page" };
}

async function Content({ params }: Pick<Props, "params">) {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) notFound();

  return (
    <article>
      {page.title && (
        <header className="border-b-[3px] border-bark">
          <div className="wrap py-14 md:py-20">
            <h1 className="max-w-4xl text-5xl md:text-7xl">{page.title}</h1>
          </div>
        </header>
      )}
      <div className="prose-wp wrap max-w-3xl py-14 md:py-20" dangerouslySetInnerHTML={{ __html: page.html }} />
    </article>
  );
}

export default function WordPressPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<div className="wrap py-20"><div className="frame h-[60vh] animate-pulse" /></div>}>
        <Content params={params} />
      </Suspense>
      <GiveBand />
    </>
  );
}
