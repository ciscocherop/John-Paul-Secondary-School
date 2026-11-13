import type { Metadata } from "next";
import Link from "next/link";
import { GiveBand, PageHero, Photo } from "@/components/ui";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "History",
  description:
    "How a promise to a missionary priest in 2005 became John Paul Secondary School, and the campus timeline from 2007 to today.",
};

const timeline: [string, string, string][] = [
  ["2007", "Dedication of John Paul Secondary School", "For the village of Chelekura the opening was a major event; for the students, a gift of hope; for Nancy and Paul, reality."],
  ["2008", "A textbook for every student", "Their very own textbooks for every subject. The effort grew into the Paul Berrigan Family Library."],
  ["2009", "First girls’ dormitory", "A growing number of female students meant turning a small social hall into a dormitory."],
  ["2010", "New kitchen and first solar panels", "The panels, a gift from Tim Blackwell, powered one classroom and the Head Teacher’s office."],
  ["2011", "Groundbreaking for the Science and Learning Center", "The key facility needed to offer full college preparatory courses in S-5 and S-6."],
  ["2013", "The Daryl D. Wittich Science and Learning Center opens", "A step forward for the school and a celebration for the students and the village."],
  ["2014", "Friends of John Paul School becomes a 501(c)(3)", "Our U.S. charity is formed to support the school."],
  ["2015", "First well drilled on campus", "Dedicated in memory of William Lindquist, it brought students and villagers together to celebrate."],
  ["2016", "Solar energy and a computer lab", "The Anne Bidigare Computer Lab opens, and ground is broken for teacher housing."],
  ["2017", "Glen Dorie Teacher Housing dedicated", "Alongside a new incinerator and modern latrines for the growing campus."],
  ["2018", "A new 160-bed girls’ dormitory", "Rising enrolment made a purpose-built dormitory essential."],
  ["2019", "Accredited for A-level", "The first S-5 classes begin, opening every class level up to university."],
  ["2020", "First S-6 class and a 160-bed boys’ dormitory", "The first students ready for university, and room for more boarders."],
  ["2021", "Teachers paid through the pandemic", "During a shutdown of nearly two years, JPSS was one of the only schools nationwide to pay its teachers every month. A new cellular tower brought internet access."],
  ["2022", "Students return; major construction", "Land was acquired for expansion, and a multi-purpose hall for up to 1,000 and a modern kitchen were substantially completed."],
  ["2023", "Ranked #1 in Pallisa District", "In the top 18% of all Ugandan secondary schools. A piped water system now serves the campus, with a tap for the community."],
  ["2024", "200 more beds and a university program", "#1 in the district for a second year. Two new 100-bed dormitories, a Board of Governors installed, and the Graduate Scholarship launched."],
];

export default function History() {
  return (
    <>
      <PageHero
        eyebrow="History"
        title={<>It began with a promise <em className="text-clay">to a missionary priest.</em></>}
        lead="A story of hope, generosity and success, sustained by its founders, its board, its donors and its ambitious students."
      />

      <section className="wrap grid gap-12 py-20 md:grid-cols-[1fr_1.3fr] md:gap-20 md:py-28">
        <div className="md:sticky md:top-40 md:self-start">
          <Photo
            src={photos.foundersAtGate}
            alt="Founders Nancy and Paul Berrigan with students at the JPSS entrance sign"
            shape="arch"
            className="aspect-[4/5]"
          />
        </div>
        <div className="space-y-6 text-lg">
          <p className="eyebrow">Nancy and Paul’s story</p>
          <h2 className="text-4xl md:text-5xl">A warm Sunday morning in July 2005.</h2>
          <p className="font-display text-2xl leading-snug">
            Nancy and Paul Berrigan went to Mass at St. Fabian Catholic Church in Farmington Hills, Michigan,
            with no idea it was Mission Appeal Sunday.
          </p>
          <p className="text-muted">
            Msgr. John Kauta, a diocesan priest from Uganda, spoke about the great need of the poor in his
            home country and how far an American dollar could stretch there. After Mass the Berrigans
            introduced themselves and said they wanted to help in a more significant way than a donation.
            Looking at his handout of what things cost in Uganda, they thought they might be able to build a
            school. Msgr. Kauta was so excited he gave Paul a big bear hug.
          </p>
          <p className="text-muted">
            After many phone calls, e-mails, faxes and FedEx packages, construction started in March 2006.
            The school was planned as a primary school, but the government had just mandated primary
            education for all children. The Archbishop of Tororo asked officials to build a primary school in
            Chelekura and, in exchange, converted this one to a secondary school. A village with no school
            suddenly had two.
          </p>
          <p className="text-muted">
            John Paul Secondary School, named in honor of Nancy’s and Paul’s fathers, opened in February 2007
            with 14 students. At its dedication that March about 800 people came to give thanks. After Mass
            they processed to the altar and gave according to their ability: eggs, grain, honey, bananas,
            pineapple, live chickens, small coins and even a sheep.
          </p>
          <Link href="/vision-background" className="link inline-block">
            A history of our vision, by Paul and Nancy →
          </Link>
        </div>
      </section>

      <section id="timeline" className="on-dark bg-teal-deep text-paper">
        <div className="wrap py-20 md:py-28">
          <p className="eyebrow !text-sun">Development timeline</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">From a barren field to a thriving campus.</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <Photo
              src={photos.dedication2007}
              alt="Archbishop Odongo at the dedication of the school in 2007"
              className="aspect-[4/3]"
            />
            <Photo
              src={photos.firstClassroom}
              alt="Students at their desks in an early JPSS classroom"
              className="aspect-[4/3]"
            />
          </div>

          <ol className="path mt-16 grid gap-x-16 gap-y-10 lg:grid-cols-2">
            {timeline.map(([year, title, text]) => (
              <li key={year} className="waypoint">
                <p className="font-display text-4xl text-sun">{year}</p>
                <h3 className="mt-1 text-2xl">{title}</h3>
                <p className="mt-2 text-paper/80">{text}</p>
              </li>
            ))}
          </ol>

          <p className="mt-14">
            <Link href="/photo-gallery" className="link">See the history in pictures →</Link>
          </p>
        </div>
      </section>

      <GiveBand title="The next chapter needs you." />
    </>
  );
}
