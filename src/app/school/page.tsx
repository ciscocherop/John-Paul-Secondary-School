import type { Metadata } from "next";
import Link from "next/link";
import { GiveBand, PageHero, Photo, Quote } from "@/components/ui";
import { photos } from "@/lib/site";

export const metadata: Metadata = {
  title: "The school",
  description:
    "John Paul Secondary School in Chelekura, Uganda: O-level and A-level classes, boarding, and a day in the life of its students.",
};

const day = [
  {
    time: "6:00 am",
    title: "Mass, then chores",
    text: "The day begins in St. John Baptist Church on the campus grounds. Before lessons, students put their dormitories in order and tidy the school compound.",
  },
  {
    time: "7:20 am",
    title: "Assembly and lessons",
    text: "Classes follow the British system. O-level (S-1 to S-4) covers English, Literature, Mathematics, Chemistry, Physics, Biology, Geography, History, Computers and Agriculture. A-level (S-5 and S-6) is college preparatory: the sciences, Economics, Entrepreneurship, Languages and Fine Arts.",
  },
  {
    time: "10:00 am",
    title: "A half-hour break",
    text: "Time to pause and share. Computer classes for both O-level and A-level students run throughout the day.",
  },
  {
    time: "1:00 pm",
    title: "Lunch",
    text: "Served mid-day, and the students are ready for it. Afternoon classes continue until 4:40.",
  },
  {
    time: "4:40 pm",
    title: "School’s out",
    text: "Sports, dance and business. Students come from many cultural settings, and the school encourages and rewards cultural performances. Through the EDUCATE! program, members start a real business on campus.",
  },
  {
    time: "6:30 pm",
    title: "Supper, then prep",
    text: "The evening meal is followed by supervised study before lights out.",
  },
];

const pillars = [
  {
    title: "Students: ambitious and competitive",
    text: "Every student worked hard to earn a place at this highly ranked school. They study hard, play hard and win awards in business entrepreneurship and sport.",
    href: "/educate",
    cta: "The EDUCATE! program",
  },
  {
    title: "Teachers: degreed, dedicated, disciplined",
    text: "Many live in teacher housing on campus; others cycle more than five miles to work each day. Beyond their degrees, they must be good mentors, committed to the school.",
    href: "/our-teachers",
    cta: "Meet the teachers",
  },
  {
    title: "Scholars: desire, determination, hope",
    text: "Each year the brightest children of Chelekura and Pallisa District can earn full tuition and boarding through the Hungerford program.",
    href: "/scholarships",
    cta: "The scholarships",
  },
];

export default function School() {
  return (
    <>
      <PageHero
        eyebrow="John Paul Secondary School"
        title={<>The premier door to advanced learning <em className="text-clay">in Pallisa District.</em></>}
        lead="A boarding secondary school in the village of Chelekura, accredited for both O-level and A-level, and ranked first in its district."
      />

      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-2 md:gap-20">
        <Photo
          src={photos.classOnSteps}
          alt="A JPSS class in uniform gathered on the school steps"
          className="aspect-[4/3]"
        />
        <div>
          <p className="eyebrow">Why it matters</p>
          <h2 className="mt-4 text-4xl md:text-5xl">More than classrooms.</h2>
          <p className="mt-5 text-lg text-muted">
            In rural Uganda a secondary school also means clean water, regular meals and medical attention.
            Boarding gives young students, especially girls, a safe place to live and study, and a private
            secondary education is the surest route to university.
          </p>
          <Link href="/why-john-paul" className="link mt-6 inline-block">Why John Paul? →</Link>
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="wrap grid gap-10 py-20 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="border-t-[3px] border-bark pt-6">
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-3 text-muted">{p.text}</p>
              <Link href={p.href} className="link mt-4 inline-block">{p.cta} →</Link>
            </div>
          ))}
        </div>
      </section>

      <section id="day" className="on-dark bg-teal-deep text-paper">
        <div className="wrap grid gap-14 py-20 md:grid-cols-[1fr_1.3fr] md:gap-20 md:py-28">
          <div className="md:sticky md:top-40 md:self-start">
            <p className="eyebrow !text-sun">A day in the life</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Follow the path of a JPSS student.</h2>
            <Photo
              src={photos.chapel}
              alt="The chapel and main building on the JPSS campus, shaded by trees"
              shape="arch"
              className="mt-10 aspect-[4/3] !rounded-t-[8rem]"
            />
          </div>
          <ol className="path space-y-10">
            {day.map((d) => (
              <li key={d.time} className="waypoint">
                <p className="font-display text-3xl text-sun">{d.time}</p>
                <h3 className="mt-1 text-2xl">{d.title}</h3>
                <p className="mt-2 text-paper/80">{d.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[1.4fr_1fr] md:gap-20 md:py-28">
        <Quote by="Fr. Henry Bahati">
          Attending John Paul Secondary School is a life-changing opportunity for a Ugandan student. All
          around them is poverty. A quality education is the door to university studies and the realization
          of a career, whatever it may be.
        </Quote>
        <Photo
          src={photos.computerLab}
          alt="Students working at computers in the Anne Bidigare Computer Lab"
          className="aspect-[16/10]"
        />
      </section>

      <GiveBand />
    </>
  );
}
