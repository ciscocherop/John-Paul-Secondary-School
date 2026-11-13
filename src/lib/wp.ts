import { cacheLife } from "next/cache";
import { WP_URL } from "./site";

/**
 * Read-only client for the WordPress REST API.
 * Editors keep publishing in WordPress; this site re-reads it about once an hour.
 */

// The host's firewall (ModSecurity) rejects requests without browser-like headers.
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  Accept: "application/json,text/html;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
};

async function wp<T>(path: string): Promise<{ data: T; totalPages: number }> {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/${path}`, { headers: HEADERS });
  if (!res.ok) throw new Error(`WordPress responded ${res.status} for ${path}`);
  return {
    data: (await res.json()) as T,
    totalPages: Number(res.headers.get("x-wp-totalpages") ?? 1),
  };
}

export type Category = { slug: string; name: string };
export type StoryImage = { url: string; width: number; height: number; alt: string };
export type StorySummary = {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: StoryImage | null;
  categories: Category[];
};
export type Story = StorySummary & { html: string };
export type WpPage = { slug: string; title: string; html: string };

type RawPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url?: string;
      alt_text?: string;
      media_details?: {
        width?: number;
        height?: number;
        sizes?: Record<string, { source_url: string; width: number; height: number }>;
      };
    }[];
    "wp:term"?: { slug: string; name: string; taxonomy: string }[][];
  };
};

const NAMED: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  hellip: "…", ndash: "–", mdash: "—", lsquo: "‘", rsquo: "’", ldquo: "“", rdquo: "”",
};

export function decodeEntities(s: string): string {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => NAMED[name.toLowerCase()] ?? m);
}

const toText = (html: string) =>
  decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function shorten(text: string, max: number) {
  const clean = text.replace(/\s*\[?…\]?$|\s*\[&hellip;\]$/, "");
  if (clean.length <= max) return clean;
  return clean.slice(0, clean.lastIndexOf(" ", max)).replace(/[,;:.\s]+$/, "") + "…";
}

/** Tidy WordPress block/page-builder HTML for rendering inside our own typography. */
function cleanHtml(html: string): string {
  return html
    .replace(/<(script|style|noscript|form)[\s\S]*?<\/\1>/gi, "")
    .replace(/<div[^>]*class="[^"]*wp-block-spacer[^"]*"[^>]*><\/div>/gi, "")
    .replace(/\sstyle="[^"]*"/gi, "")
    .replace(/\s(?:width|height)="\d+"/gi, "")
    .replace(/\ssizes="[^"]*"/gi, "")
    .replace(/https?:\/\/dev\.johnpaulschool\.com/gi, WP_URL)
    .replace(/<p[^>]*>(?:\s|&nbsp;)*<\/p>/gi, "")
    // PDFs shown through Google's viewer: give them room and a direct link.
    .replace(
      /<iframe[^>]*src="[^"]*docs\.google\.com\/gview[^"]*?url=([^"&]+)[^"]*"[^>]*><\/iframe>/gi,
      (_, pdf) =>
        `<p><a class="pdf-link" href="${pdf}">Open the PDF</a></p>` +
        `<iframe class="pdf" title="Document viewer" loading="lazy" src="https://docs.google.com/gview?embedded=true&amp;url=${encodeURI(pdf)}"></iframe>`,
    );
}

function summarize(p: RawPost): StorySummary {
  const m = p._embedded?.["wp:featuredmedia"]?.[0];
  const size = m?.media_details?.sizes?.large ?? m?.media_details?.sizes?.medium_large;
  const url = size?.source_url ?? m?.source_url;
  return {
    id: p.id,
    slug: p.slug,
    date: p.date,
    title: toText(p.title.rendered),
    excerpt: shorten(toText(p.excerpt?.rendered ?? ""), 170),
    image: url
      ? {
          url,
          width: size?.width ?? m?.media_details?.width ?? 1200,
          height: size?.height ?? m?.media_details?.height ?? 500,
          alt: m?.alt_text ?? "",
        }
      : null,
    categories: (p._embedded?.["wp:term"] ?? [])
      .flat()
      .filter((t) => t.taxonomy === "category" && t.slug !== "uncategorized")
      .map((t) => ({ slug: t.slug, name: decodeEntities(t.name) })),
  };
}

const LIST_FIELDS = "id,slug,date,title,excerpt,_links,_embedded";
const EMBED = "_embed=wp:featuredmedia,wp:term";

/** Every published story, newest first (summaries only). */
export async function getAllStories(): Promise<StorySummary[]> {
  "use cache";
  cacheLife("hours");
  const first = await wp<RawPost[]>(`posts?per_page=100&page=1&${EMBED}&_fields=${LIST_FIELDS}`);
  const rest = await Promise.all(
    Array.from({ length: first.totalPages - 1 }, (_, i) =>
      wp<RawPost[]>(`posts?per_page=100&page=${i + 2}&${EMBED}&_fields=${LIST_FIELDS}`),
    ),
  );
  return [first, ...rest].flatMap((r) => r.data).map(summarize);
}

/** The newest few stories — a light request for the home page. */
export async function getLatestStories(count = 4): Promise<StorySummary[]> {
  "use cache";
  cacheLife("hours");
  const { data } = await wp<RawPost[]>(`posts?per_page=${count}&${EMBED}&_fields=${LIST_FIELDS}`);
  return data.map(summarize);
}

export async function getStory(slug: string): Promise<Story | null> {
  "use cache";
  cacheLife("hours");
  const { data } = await wp<RawPost[]>(
    `posts?slug=${encodeURIComponent(slug)}&${EMBED}&_fields=${LIST_FIELDS},content`,
  );
  const post = data[0];
  if (!post) return null;
  return { ...summarize(post), html: cleanHtml(post.content?.rendered ?? "") };
}

/** Any WordPress page by slug — used for pages that have not been redesigned yet. */
export async function getPage(slug: string): Promise<WpPage | null> {
  "use cache";
  cacheLife("hours");
  const { data } = await wp<{ slug: string; title: { rendered: string }; content: { rendered: string } }[]>(
    `pages?slug=${encodeURIComponent(slug)}&_fields=slug,title,content`,
  );
  const page = data[0];
  if (!page) return null;
  return {
    slug: page.slug,
    title: toText(page.title.rendered),
    html: cleanHtml(page.content.rendered),
  };
}
