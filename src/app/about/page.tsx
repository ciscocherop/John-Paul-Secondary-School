import type { Metadata } from "next";
import Link from "next/link";
import { GiveBand, PageHero, Photo, Quote } from "@/components/ui";
import { links, media, photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Who we are",
  description:
    "Friends of John Paul School is a volunteer-run U.S. charity. 97% of donated funds go directly to John Paul Secondary School in Uganda.",
};

const board = [
  {
    name: "Liz Comerford",
    role: "President",
    place: "Wolverine Lake, MI",
    photo: media("2026/02/Liz-1.png"),
    words:
      "After 15 years working alongside our dedicated board and the incredible administrators on the ground at JPSS, I can honestly say this has been one of the most enriching experiences of my life.",
  },
  {
    name: "Kristin Lobron",
    role: "Vice-President",
    place: "Plymouth, MI",
    photo: media("2026/02/Kristin.png"),
    words:
      "The school and board have accomplished herculean things on a tight budget. So much good comes from JPSS and I’m happy to be a small part of it.",
  },
  {
    name: "Jim Picklo",
    role: "Treasurer",
    place: "Rochester Hills, MI",
    photo: media("2026/02/Jim.png"),
    words:
      "My wife and I have always made education a fundamental part of raising our family. I feel truly blessed to be able to help the JPSS students advance their education possibilities.",
  },
  {
    name: "Heather Gold",
    role: "Secretary",
    place: "Farmington Hills, MI",
    photo: media("2026/02/Heather.png"),
    words:
      "I am passionate about the mission of John Paul Secondary School and am honored to have the opportunity to contribute to the school’s future success.",
  },
  {
    name: "Blair Berrigan",
    role: "Director",
    place: "Larchmont, NY",
    photo: media("2026/02/Blair.png"),
    words:
      "I have been involved in the development of JPSS since its inception and have watched it develop into a highly-regarded institution of quality education.",
  },
  {
    name: "Bob Clark",
    role: "Director",
    place: "Bloomfield Hills, MI",
    photo: media("2026/02/Bob.png"),
    words:
      "Educating the youth and upholding strong religious values in Uganda is an outstanding cause. We wanted to get more involved and now we are honored to be on the school’s board.",
  },
  {
    name: "Debbie Clark",
    role: "Director",
    place: "Bloomfield Hills, MI",
    photo: media("2026/02/Debbie.png"),
    words:
      "Sharing our time, along with some talent and treasures for the benefit of JPSS, has been rewarding above and beyond ever imagined.",
  },
];

const pastBoard = [
  "Sandy Wittich (founding)",
  "Patrice Swofford (founding)",
  "Rich Sambol (founding)",
  "Steve Berrigan",
  "Sam Comerford",
  "Dan Dwyer",
  "Kate Kerlin",
  "Colleen Steyer",
];

const form990s = [
  ["2024", "2025/06/2024_Form_990.pdf"],
  ["2023", "2024/07/2023_US_PublicInspectionTaxDocuments_Friends-of-John-Paul-School-1.pdf"],
  ["2022", "2023/11/2022_US_PublicInspectionTaxDocuments_Friends-of-John-Paul-School.pdf"],
  ["2021", "2023/04/2021-Form-990.pdf"],
  ["2020", "2023/04/2020-Form-990.pdf"],
  ["2019", "2023/04/2019-Form-990-EZ.pdf"],
  ["2018", "2023/04/2018-Form-990-EZ.pdf"],
  ["2017", "2023/04/2017-Form-990-EZ.pdf"],
  ["2016", "2023/04/2016-Form-990-EZ.pdf"],
  ["2015", "2023/04/2015-Form-990-N.pdf"],
  ["2014", "2023/04/2014-Form-990-N.pdf"],
  ["2013", "2023/04/2013-Form-990-N.pdf"],
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title={<>Friends who made a promise, <em className="text-clay">and keep it.</em></>}
        lead="Friends of John Paul School is the U.S. charity behind John Paul Secondary School. We raise the money; the school in Chelekura does the teaching."
      />

      <section className="wrap grid gap-12 py-20 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow">Our mission</p>
          <p className="mt-5 font-display text-3xl leading-snug">
            To provide a path to quality education and faith formation for the children of rural Africa
            through the establishment and construction of schools, while providing development, competence
            and prosperity for the local community.
          </p>
        </div>
        <div id="vision">
          <p className="eyebrow">Our vision</p>
          <h2 className="mt-5 text-4xl">Premier and sustainable.</h2>
          <p className="mt-4 text-lg text-muted">
            The academic standard is high. Teachers are among the finest in the region, and special emphasis
            is placed on Christian values, ethics, team building and integrity.
          </p>
          <p className="mt-4 text-lg text-muted">
            A three-phase development plan keeps us focused on the fast growth of the student body, toward a
            campus for 1,000 students.
          </p>
          <Link href="/three-year-development-plan" className="link mt-5 inline-block">
            Read the development plan →
          </Link>
        </div>
      </section>

      <section id="spending" className="on-dark bg-teal-deep text-paper">
        <div className="wrap grid items-center gap-10 py-20 md:grid-cols-[auto_1fr] md:gap-20">
          <p className="font-display text-[9rem] leading-none text-sun md:text-[14rem]">97%</p>
          <div>
            <h2 className="text-4xl md:text-5xl">of donated funds go directly to the school.</h2>
            <p className="mt-5 max-w-xl text-lg text-paper/80">
              Campus development and maintenance, teacher salaries, curriculum, books and care for students.
              The typical charity spends 75% of its budget on programs, according to Charity Navigator.
            </p>
            <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {[
                "A 100% volunteer Board of Directors",
                "No headquarters and no paid staff",
                "Every capital project costed and board-approved",
                "No paid advertising or off-site meetings",
              ].map((t) => (
                <li key={t} className="border-t border-paper/25 pt-3">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="board" className="wrap py-20 md:py-28">
        <p className="eyebrow">U.S. Board of Directors</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">The people behind the promise.</h2>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Photo
            src={photos.foundersAtGate}
            alt="Founders Paul and Nancy Berrigan with students at the JPSS entrance sign"
            shape="arch"
            className="aspect-[4/5] max-w-sm"
          />
          <div>
            <p className="eyebrow">Founders</p>
            <h3 className="mt-2 text-3xl">Paul and Nancy Berrigan</h3>
            <p className="text-muted">Auburn Hills, MI</p>
            <Quote by="Paul and Nancy" className="mt-6">
              We never thought we could actually build a school, but when God speaks, you must listen. We’ve
              learned that it is always good to give back, and even the smallest gift can make a big
              difference.
            </Quote>
            <Link href="/history" className="link mt-6 inline-block">How it all began →</Link>
          </div>
        </div>

        <ul className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((m) => (
            <li key={m.name}>
              <Photo src={m.photo} alt={m.name} shape="arch" className="aspect-square w-40" />
              <h3 className="mt-5 text-2xl">{m.name}</h3>
              <p className="text-sm text-muted">
                <span className="font-semibold text-clay">{m.role}</span> · {m.place}
              </p>
              <p className="mt-3 text-muted">“{m.words}”</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-line pt-8">
          <h3 className="text-2xl">With gratitude to our past board members</h3>
          <p className="mt-3 text-muted">{pastBoard.join(" · ")}</p>
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="wrap grid gap-12 py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow">Friends in action</p>
            <h2 className="mt-4 text-4xl">Three events carry the year.</h2>
            <p className="mt-4 text-lg text-muted">
              A spring virtual 5K, a fall wine tasting dinner, and GivingTuesday on the Tuesday after
              Thanksgiving. Smaller fundraisers happen all year.
            </p>
            <Link href="/upcoming-events" className="link mt-5 inline-block">Annual events →</Link>
          </div>
          <div>
            <p className="eyebrow">Our financials</p>
            <h2 className="mt-4 text-4xl">Open books.</h2>
            <p className="mt-4 text-lg text-muted">
              Every tax return since our founding is public. Questions are welcome.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {form990s.map(([year, path]) => (
                <li key={year}>
                  <a
                    href={media(path)}
                    className="inline-block rounded-full border border-bark/40 px-3.5 py-1 text-sm font-medium hover:bg-ink hover:text-paper"
                  >
                    Form 990 · {year}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted">
              Also listed on <a className="link" href={links.charityNavigator}>Charity Navigator</a> and{" "}
              <a className="link" href={links.guidestar}>GuideStar</a>.
            </p>
          </div>
        </div>
      </section>

      <GiveBand />
    </>
  );
}
