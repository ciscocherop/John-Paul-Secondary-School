import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-24 md:py-32">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">
        This door doesn’t open. <em className="text-clay">These do.</em>
      </h1>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-clay">Home</Link>
        <Link href="/stories" className="btn btn-line">Stories</Link>
        <Link href="/donate" className="btn btn-line">Donate</Link>
      </div>
    </section>
  );
}
