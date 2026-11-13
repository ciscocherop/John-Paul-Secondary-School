import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { PageHero } from "@/components/ui";
import { links, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give online, by check, stock, donor advised fund or IRA distribution. 97% of every dollar goes directly to John Paul Secondary School.",
};

const otherWays = [
  {
    title: "By check",
    body: (
      <>
        Make checks payable to <strong>Friends of John Paul School</strong> and mail to P.O. Box 80815,
        Rochester, MI 48308-0815. Please include our{" "}
        <a className="link" href={links.donationFormPdf}>donation form (PDF)</a>.
      </>
    ),
  },
  {
    title: "Donor advised fund",
    body: (
      <>
        Request a grant through your DAF sponsor using EIN <strong>{site.ein}</strong> and the mailing
        address above. Tell us whether the gift is unrestricted (preferred) or for a specific cause.
      </>
    ),
  },
  {
    title: "Stocks or bonds",
    body: (
      <>
        Contact Rand Beech at Picklo Wealth Partners, Rockefeller Global Family Office:{" "}
        <a className="link" href="tel:+12488336676">+1 248 833-6676</a> or{" "}
        <a className="link" href="mailto:rbeech@rockco.com">rbeech@rockco.com</a>. Let us know the stock and
        number of shares in advance.
      </>
    ),
  },
  {
    title: "IRA distribution",
    body: (
      <>
        Facing a required minimum distribution? Consider a qualified charitable distribution instead.{" "}
        <Link className="link" href="/ira-distributions">Learn more</Link>.
      </>
    ),
  },
  {
    title: "Wire transfer",
    body: (
      <>
        Email our fundraising team at <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
      </>
    ),
  },
  {
    title: "Corporate matching",
    body: (
      <>
        Many employers double or triple employee gifts. Ask your HR department whether donations to Friends
        of John Paul School qualify. <Link className="link" href="/corporate-matching">Learn more</Link>.
      </>
    ),
  },
  {
    title: "Sustaining Angels",
    body: (
      <>
        Make a monthly commitment and make their dreams possible.{" "}
        <Link className="link" href="/fojps-sustaining-angels">Become an Angel</Link>.
      </>
    ),
  },
  {
    title: "Planned giving",
    body: (
      <>
        Include Friends of John Paul School in your estate plans and secure the school’s future.{" "}
        <Link className="link" href="/planned-giving">Planned giving</Link> ·{" "}
        <Link className="link" href="/gift-in-will">A gift in your will</Link>.
      </>
    ),
  },
  {
    title: "Thrivent members",
    body: (
      <>
        Direct your Thrivent Choice Dollars to the school. <Link className="link" href="/thrivent">Read more</Link>.
      </>
    ),
  },
];

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={<>Your gift becomes <em className="text-clay">a classroom, a teacher, a meal.</em></>}
        lead="97% of every dollar goes directly to the school. Friends of John Paul School is a 501(c)(3) nonprofit run entirely by volunteers."
      />

      <section className="bg-paper-deep">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-20">
          <div>
            <p className="eyebrow">Give online</p>
            <h2 className="mt-4 text-4xl md:text-5xl">One-time or monthly, to the area of greatest need.</h2>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Give securely through Donorbox. Unrestricted gifts let the board put your money where the
              school needs it most.
            </p>
            <ul className="mt-8 max-w-xl divide-y divide-line border-y border-line">
              {[
                ["97%", "of donated funds go directly to the school"],
                ["100%", "volunteer board: no headquarters, no paid staff"],
                ["EIN", `${site.ein}, a registered 501(c)(3) nonprofit`],
              ].map(([amount, what]) => (
                <li key={amount} className="flex flex-wrap items-baseline gap-x-4 py-4">
                  <span className="font-display text-3xl text-clay">{amount}</span>
                  <span className="text-muted">{what}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/scholarships" className="link">Prefer to sponsor a named student? →</Link>
            </p>
          </div>

          <div className="rounded-xl border border-line bg-white p-3 shadow-[0_20px_60px_-30px_rgba(31,26,21,0.5)]">
            <Script src="https://donorbox.org/widget.js" strategy="lazyOnload" />
            <iframe
              src={links.donorboxEmbed}
              name="donorbox"
              title="Donate to Friends of John Paul School"
              allow="payment"
              className="h-[640px] w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="wrap py-20 md:py-28">
        <p className="eyebrow">Other ways to give</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">Every route leads to the same school.</h2>
        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {otherWays.map((w) => (
            <li key={w.title} className="border-t-[3px] border-bark pt-5">
              <h3 className="text-2xl">{w.title}</h3>
              <p className="mt-3 text-muted">{w.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
