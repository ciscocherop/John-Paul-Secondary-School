import type { Metadata } from "next";
import Link from "next/link";
import { GiveBand, PageHero, Photo } from "@/components/ui";
import { links, photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Volunteer, sponsor an event, shop for JPSS or run your own fundraiser for John Paul Secondary School.",
};

const ways = [
  {
    title: "Volunteer",
    text: "Opportunities abound, especially before a fundraising event. Fill in the short form and we’ll be in touch.",
    href: links.volunteerForm,
    cta: "Volunteer form",
    external: true,
  },
  {
    title: "Run a fundraiser",
    text: "Running races, Eagle Scout projects, barbecues, Christmas fairs, formal dinners. We are happy to share ideas or talk through yours.",
    href: "/previous-fundraisers-and-events",
    cta: "Past fundraisers",
  },
  {
    title: "Sponsor an event",
    text: "We are grateful to the companies whose sponsorship makes our events possible.",
    href: "/corporate-sponsors",
    cta: "Corporate sponsors",
  },
  {
    title: "Shop for JPSS",
    text: "There are two ways to support the students while you shop.",
    href: "/shop-2",
    cta: "How it works",
  },
  {
    title: "Come to an event",
    text: "A spring virtual 5K, a fall wine tasting dinner and GivingTuesday anchor our year.",
    href: "/upcoming-events",
    cta: "Annual events",
  },
  {
    title: "Invite us to speak",
    text: "We can bring the JPSS story to your group.",
    href: "/group-presentation",
    cta: "Group presentations",
  },
];

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title={<>Most of our board started <em className="text-clay">as volunteers.</em></>}
        lead="They helped at a fundraiser, came to an event or hosted one of their own. Friends of John Paul School has become a close-knit group, and we would love to get to know you."
      />

      <section className="wrap py-20 md:py-28">
        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {ways.map((w, i) => (
            <li key={w.title} className="border-t-[3px] border-bark pt-6">
              <p className="font-display text-xl text-clay">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-3xl">{w.title}</h2>
              <p className="mt-3 text-muted">{w.text}</p>
              {w.external ? (
                <a href={w.href} className="link mt-4 inline-block">{w.cta} →</a>
              ) : (
                <Link href={w.href} className="link mt-4 inline-block">{w.cta} →</Link>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper-deep">
        <div className="wrap grid items-center gap-12 py-20 md:grid-cols-2 md:gap-20">
          <Photo
            src={photos.studyGroup}
            alt="JPSS students working together at their desks"
            shape="arch"
            className="aspect-[4/3] !rounded-t-[10rem]"
          />
          <div>
            <p className="eyebrow">Visit Uganda</p>
            <h2 className="mt-4 text-4xl md:text-5xl">See the school for yourself.</h2>
            <p className="mt-4 text-lg text-muted">
              Board members and friends have travelled to Chelekura to meet the students and teachers. Read
              about their visits, and write to us with any questions.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/uganda-visits" className="link">Uganda visits →</Link>
              <Link href="/contact" className="link">Contact the board →</Link>
            </div>
          </div>
        </div>
      </section>

      <GiveBand />
    </>
  );
}
