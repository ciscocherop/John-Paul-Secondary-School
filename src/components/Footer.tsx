import Link from "next/link";
import { links, nav, site } from "@/lib/site";

const social = [
  { href: links.facebook, label: "Facebook" },
  { href: links.instagram, label: "Instagram" },
  { href: links.linkedin, label: "LinkedIn" },
  { href: links.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="on-dark bg-teal-deep text-paper">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">Friends of</p>
          <p className="font-display text-4xl leading-none">John Paul School</p>
          <p className="mt-5 max-w-sm text-paper/80">
            A volunteer-run U.S. charity supporting {site.school} in Chelekura, Uganda. 97% of every
            donation goes to the campus, its teachers and its students.
          </p>
          <p className="mt-5 text-sm text-paper/70">
            501(c)(3) nonprofit · EIN {site.ein}
            <br />
            <a className="link" href={links.charityNavigator}>Charity Navigator</a>
            {" · "}
            <a className="link" href={links.guidestar}>GuideStar</a>
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow !text-sun">Explore</h2>
          <ul className="mt-4 space-y-2">
            {[...nav, { href: "/donate", label: "Ways to give" }, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sun">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow !text-sun">Write to us</h2>
          <address className="mt-4 not-italic text-paper/85">
            {site.address.map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
            <a className="link mt-3 inline-block" href={`mailto:${site.email}`}>{site.email}</a>
          </address>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {social.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="hover:text-sun">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <p className="wrap py-5 text-sm text-paper/60">
          © {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
