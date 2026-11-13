import type { Metadata } from "next";
import { Suspense } from "react";
import { StoriesExplorer } from "@/components/StoriesExplorer";
import { PageHero } from "@/components/ui";
import { getAllStories } from "@/lib/wp";

export const metadata: Metadata = {
  title: "Stories",
  description: "News from John Paul Secondary School: students, campus development, events and visits.",
};

async function Stories() {
  let stories;
  try {
    stories = await getAllStories();
  } catch {
    return <p className="text-lg text-muted">Stories are unavailable right now. Please try again shortly.</p>;
  }
  return <StoriesExplorer stories={stories} />;
}

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title={<>News from <em className="text-clay">the campus.</em></>}
        lead="Exam results, new buildings, scholars, visits and the events that fund them."
      />
      <section className="wrap py-16 md:py-20">
        <Suspense fallback={<div className="frame h-96 animate-pulse" />}>
          <Stories />
        </Suspense>
      </section>
    </>
  );
}
