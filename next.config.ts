import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keep every URL from the old WordPress site working.
  async redirects() {
    const map: Record<string, string> = {
      "/who-we-are-3": "/about",
      "/who-we-are-2": "/about",
      "/vision": "/about#vision",
      "/program-spending": "/about#spending",
      "/u-s-board-of-directors": "/about#board",
      "/our-board": "/about#board",
      "/our-board-2": "/about#board",
      "/our-school-2": "/school",
      "/a-day-in-the-life": "/school#day",
      "/the-story-begins": "/history",
      "/timeline": "/history#timeline",
      "/news": "/stories",
      "/news-blog": "/stories",
      "/donate-now": "/donate",
      "/hungerford-scholars": "/scholarships#hungerford",
      "/become-a-sponsor": "/scholarships#hungerford",
      "/jpss-graduate-scholarship-program": "/scholarships#graduate",
    };
    return [
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/stories/:slug",
        permanent: false,
      },
      ...Object.entries(map).map(([source, destination]) => ({
        source,
        destination,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
