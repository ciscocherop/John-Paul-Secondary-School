import Link from "next/link";
import type { ReactNode } from "react";
import { formatDate } from "@/lib/format";
import type { StorySummary } from "@/lib/wp";

/** A photo from the school's media library, in a doorway arch or a plain frame. */
export function Photo({
  src,
  alt,
  shape = "frame",
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  shape?: "arch" | "frame";
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`${shape} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
      />
    </div>
  );
}

/** Top of every inner page: cream wall, painted line, then the page. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b-[3px] border-bark">
      <div className="wrap py-14 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-5xl md:text-7xl">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-xl text-muted">{lead}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Quote({
  children,
  by,
  role,
  className = "",
}: {
  children: ReactNode;
  by: string;
  role?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <blockquote className="font-display text-2xl italic leading-snug md:text-[2rem]">
        <span aria-hidden className="mr-1 text-clay">“</span>
        {children}
        <span aria-hidden className="text-clay">”</span>
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold">{by}</span>
        {role && <span className="opacity-70"> · {role}</span>}
      </figcaption>
    </figure>
  );
}

export function StoryCard({ story, large = false }: { story: StorySummary; large?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className={`frame ${large ? "aspect-[16/9]" : "aspect-[12/5]"}`}>
        {story.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={story.image.url}
            alt=""
            loading="lazy"
            decoding="async"
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full place-items-center bg-teal-soft font-display text-3xl text-teal-deep">
            JPSS
          </div>
        )}
      </div>
      <p className="mt-4 text-sm text-muted">
        <time dateTime={story.date}>{formatDate(story.date)}</time>
        {story.categories[0] && <span> · {story.categories[0].name}</span>}
      </p>
      <h3 className={`mt-2 ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>
        <Link href={`/stories/${story.slug}`} className="after:absolute after:inset-0 group-hover:text-clay">
          {story.title}
        </Link>
      </h3>
      {large && <p className="mt-3 text-muted">{story.excerpt}</p>}
    </article>
  );
}

/** Closing band used at the foot of most pages. */
export function GiveBand({
  title = "Keep the door open for the next student.",
  text = "97% of every dollar goes straight to the campus, its teachers and its students. The board is all volunteers: no headquarters, no paid staff.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="on-dark bg-clay text-white">
      <div className="wrap grid items-center gap-8 py-16 md:grid-cols-[1.5fr_1fr] md:py-20">
        <div>
          <h2 className="text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link href="/donate" className="btn btn-sun">Donate now</Link>
          <Link href="/scholarships" className="btn btn-line">Sponsor a student</Link>
        </div>
      </div>
    </section>
  );
}
