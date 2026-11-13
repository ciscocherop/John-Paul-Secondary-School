/** Safe to import from client components (unlike wp.ts, which is server-only). */
export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
