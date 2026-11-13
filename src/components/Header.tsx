"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { announcement, nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40">
      {announcement && (
        <div className="on-dark bg-teal-deep text-paper">
          <div className="wrap flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-sm">
            <span>{announcement.text}</span>
            <a href={announcement.href} className="link whitespace-nowrap">
              {announcement.cta} →
            </a>
          </div>
        </div>
      )}

      <div className="border-b border-line bg-paper/95 backdrop-blur">
        <div className="wrap flex items-center justify-between gap-6 py-3">
          <Link href="/" aria-label={`${site.name} — home`} onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpg"
              alt={site.name}
              width={739}
              height={315}
              className="h-14 w-auto mix-blend-multiply"
            />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-[0.95rem] font-medium underline-offset-8 decoration-2 decoration-clay hover:underline ${
                  isActive(item.href) ? "underline" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/donate" className="btn btn-clay" onClick={() => setOpen(false)}>
              Donate
            </Link>
            <button
              type="button"
              className="btn btn-line px-4 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Main" className="border-t border-line lg:hidden">
            <ul className="wrap py-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="block border-b border-line py-3 font-display text-2xl last:border-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" onClick={() => setOpen(false)} className="block py-3 font-display text-2xl">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
