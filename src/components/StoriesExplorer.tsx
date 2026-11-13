"use client";

import { useMemo, useState } from "react";
import type { StorySummary } from "@/lib/wp";
import { StoryCard } from "./ui";

const PAGE = 12;

export function StoriesExplorer({ stories }: { stories: StorySummary[] }) {
  const [topic, setTopic] = useState("all");
  const [shown, setShown] = useState(PAGE);

  const topics = useMemo(() => {
    const counts = new Map<string, { name: string; count: number }>();
    for (const s of stories)
      for (const c of s.categories) {
        const entry = counts.get(c.slug) ?? { name: c.name, count: 0 };
        entry.count++;
        counts.set(c.slug, entry);
      }
    return [...counts.entries()].sort((a, b) => b[1].count - a[1].count);
  }, [stories]);

  const filtered = topic === "all" ? stories : stories.filter((s) => s.categories.some((c) => c.slug === topic));
  const visible = filtered.slice(0, shown);
  const [lead, ...rest] = visible;

  const chip = (slug: string, label: string, count: number) => (
    <button
      key={slug}
      type="button"
      aria-pressed={topic === slug}
      onClick={() => {
        setTopic(slug);
        setShown(PAGE);
      }}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        topic === slug ? "border-ink bg-ink text-paper" : "border-bark/40 hover:border-ink"
      }`}
    >
      {label} <span className="opacity-60">{count}</span>
    </button>
  );

  return (
    <div>
      <div role="group" aria-label="Filter stories by topic" className="flex flex-wrap gap-2">
        {chip("all", "All stories", stories.length)}
        {topics.map(([slug, t]) => chip(slug, t.name, t.count))}
      </div>

      {lead && (
        <div className="mt-12 border-b border-line pb-12 lg:w-3/4">
          <StoryCard story={lead} large />
        </div>
      )}

      <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((s) => (
          <li key={s.id}>
            <StoryCard story={s} />
          </li>
        ))}
      </ul>

      <p className="mt-14 flex flex-wrap items-center gap-5" aria-live="polite">
        {shown < filtered.length && (
          <button type="button" className="btn btn-line" onClick={() => setShown((n) => n + PAGE)}>
            Show more stories
          </button>
        )}
        <span className="text-sm text-muted">
          Showing {visible.length} of {filtered.length}
        </span>
      </p>
    </div>
  );
}
