import type { Metadata } from "next";
import { GiveBand, PageHero, Photo, Quote } from "@/components/ui";
import { links, photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scholarships",
  description:
    "Sponsor a student through six years at John Paul Secondary School, or fund a JPSS graduate's university degree.",
};

const scholars = [
  {
    name: "Gidudu David",
    text: "His mother could not afford the fees that would give him a strong start. A Hungerford sponsorship brought him to JPSS, where his biology teacher kept telling him, “You can make it.” David earned 19 of 20 points on his A-level exams, in the 99th percentile nationwide, and a government merit scholarship to study medicine and surgery.",
  },
  {
    name: "Mukasa Savior Paul",
    text: "When his mother could no longer sustain his fees, a Hungerford sponsorship meant he could remain at JPSS with regular meals, time to study and teachers to guide him. Savior rose to rank among the school’s top three students on Uganda’s national UCE examinations.",
  },
  {
    name: "Musibikha Winnie",
    text: "Winnie entered JPSS near the bottom of the qualifying range. Her headteacher saw more in her and recommended a sponsorship. Boarding, tutoring and steady support helped her earn Division 1, the highest UCE result category. She is now studying to become an agriculture educator.",
  },
];

const hungerfordSteps = [
  {
    title: "Complete the commitment form",
    text: "Tell us about you and any preferences for the student you sponsor.",
  },
  {
    title: "Choose your funding",
    text: "$60 a month, $720 a year, or $4,000 once, up front, through our secure Givebutter form.",
  },
  {
    title: "Meet your scholar",
    text: "We pair you with a student from the incoming February class and send updates, photos and videos along the way.",
  },
];

const graduateSteps = [
  {
    title: "Student applications · May and June",
    text: "JPSS graduates apply to university and to the scholarship program together, submitting exam results and tuition documentation.",
  },
  {
    title: "Sponsor matching · May and June",
    text: "Sponsors may state a preferred field of study. Commitments and payment are due by July 31 so funds are ready before universities open in August.",
  },
  {
    title: "Selection · July",
    text: "A JPSS committee ranks applicants on financial need, teacher assessments and benefit to the community. Student, guardian and school sign a three-way agreement.",
  },
  {
    title: "Connection and mentoring",
    text: "A program mentor, herself a JPSS graduate and university alumna, visits every student each semester. Sponsors receive a year-end assessment.",
  },
  {
    title: "Paying it forward",
    text: "Scholars return to JPSS during university breaks to serve the school, and plan with program leaders how they will give back to Pallisa District.",
  },
];

const tiers = [
  { years: "3 years", fields: "Business Management, Computer Science, Teaching, Tourism, Urban Planning", cost: "$5,000" },
  { years: "4 years", fields: "Agriculture, Engineering, Food Science, Journalism & Communication, Law", cost: "$8,000" },
  { years: "5 years", fields: "Medicine, Surgery, Veterinary Science, Advanced Engineering", cost: "$10,000" },
];

export default function Scholarships() {
  return (
    <>
      <PageHero
        eyebrow="Scholarship programs"
        title={<>One path, from Senior One <em className="text-clay">to a university degree.</em></>}
        lead="Bright students in Pallisa District face a stark reality: school costs more than most families can pay. Two programs remove that barrier, one after the other."
      >
        <a href="#hungerford" className="btn btn-clay">Sponsor a student</a>
        <a href="#graduate" className="btn btn-line">Sponsor a graduate</a>
      </PageHero>

      {/* Hungerford */}
      <section id="hungerford" className="wrap py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow">Secondary school · six years</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Hungerford JPSS Sponsorship</h2>
            <p className="mt-5 text-lg text-muted">
              Sponsor one student from their first day to graduation. The sponsorship covers full tuition,
              boarding, uniform and testing fees for all six years, so a student can focus on learning, not
              survival.
            </p>
            <p className="mt-4 text-lg text-muted">
              You are paired with a specific scholar, can write to them by email, and receive progress
              updates from our scholarship mentor.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={links.sponsorStudent} className="btn btn-clay">Start your commitment</a>
              <span className="text-sm text-muted">Arrange by December 31 for the February class.</span>
            </div>
          </div>
          <Photo
            src={photos.hungerfordScholars}
            alt="A large group of Hungerford Scholars in uniform on the school lawn"
            shape="arch"
            className="aspect-[4/3] !rounded-t-[10rem]"
          />
        </div>

        <ol className="mt-20 grid gap-8 md:grid-cols-3">
          {hungerfordSteps.map((s, i) => (
            <li key={s.title} className="border-t-[3px] border-bark pt-5">
              <p className="font-display text-5xl text-clay">{i + 1}</p>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-muted">
          Not ready for a six-year commitment? You can give any amount to the general scholarship fund on
          the same <a className="link" href={links.sponsorStudent}>Givebutter page</a>, or pay by check by
          writing to <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>

      {/* Scholars */}
      <section className="bg-paper-deep">
        <div className="wrap py-20 md:py-24">
          <p className="eyebrow">Meet our scholars</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">Lives changed through a JPSS sponsorship.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {scholars.map((s) => (
              <article key={s.name}>
                <h3 className="text-2xl">{s.name}</h3>
                <p className="mt-3 text-muted">{s.text}</p>
              </article>
            ))}
          </div>
          <Quote
            by="David Gidudu"
            role="now a first-year medical student"
            className="mt-16 max-w-3xl border-t border-line pt-10"
          >
            My biggest dream was to become a doctor. A Hungerford Scholarship made it possible.
          </Quote>
        </div>
      </section>

      {/* Thank you, Larry and Sue */}
      <section className="wrap grid items-center gap-12 py-20 md:grid-cols-[1fr_1.5fr] md:gap-20">
        <Photo
          src={photos.hungerfords}
          alt="Dr. Larry Hungerford and his wife, Sue"
          shape="arch"
          className="mx-auto aspect-[4/5] w-full max-w-xs"
        />
        <div>
          <p className="eyebrow">With gratitude</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Thank you, Larry and Sue.</h2>
          <p className="mt-5 text-lg text-muted">
            The program was designed by founder Paul Berrigan and Dr. Larry Hungerford, with the enthusiastic
            support of Larry’s wife, Sue. What began as the Hungerford Scholarship now links one sponsor to
            one student through all six years of secondary school.
          </p>
          <p className="mt-4 text-lg text-muted">
            Dr. Hungerford died on November 13, 2025. The students he supported carry his legacy forward in
            their studies, their dreams and the opportunities now within their reach.
          </p>
          <Quote by="Dr. Larry Hungerford" className="mt-8">
            You can help to break the chains of poverty with the promise of a bright future, and forever
            change a young person’s life. What impact, and what a return on your investment.
          </Quote>
        </div>
      </section>

      {/* Graduate */}
      <section id="graduate" className="on-dark bg-teal-deep text-paper">
        <div className="wrap py-20 md:py-28">
          <p className="eyebrow !text-sun">University · three to five years</p>
          <h2 className="mt-4 max-w-4xl text-4xl md:text-6xl">
            The JPSS Graduate Scholarship Program
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-paper/80">
            Each year JPSS students earn the results they need for university, but for most the cost is out
            of reach. Sponsors fund the full degree: tuition, fees and a laptop.
          </p>

          <dl className="mt-12 grid gap-8 border-y border-paper/20 py-10 sm:grid-cols-3">
            {[
              ["2024", "Program founded"],
              ["12", "Students currently in the program"],
              ["100%", "Of scholars paying it back through service to JPSS"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block font-display text-6xl text-sun">{n}</span>
                  <span className="mt-1 block text-paper/80" aria-hidden>{label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl">How the program works</h3>
              <ol className="path mt-8 space-y-8">
                {graduateSteps.map((s) => (
                  <li key={s.title} className="waypoint">
                    <h4 className="font-display text-xl text-sun">{s.title}</h4>
                    <p className="mt-1 text-paper/80">{s.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-3xl">Sponsorship options</h3>
              <p className="mt-4 text-paper/80">
                Choose a level by degree length. Living expenses remain with the student and their family.
              </p>
              <ul className="mt-6 divide-y divide-paper/20 border-y border-paper/20">
                {tiers.map((t) => (
                  <li key={t.years} className="grid grid-cols-[1fr_auto] gap-x-6 py-5">
                    <div>
                      <p className="font-display text-2xl">{t.years}</p>
                      <p className="mt-1 text-sm text-paper/75">{t.fields}</p>
                    </div>
                    <p className="font-display text-4xl text-sun">{t.cost}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-paper/80">
                <strong className="text-paper">Every dollar goes to the student.</strong> Donations are
                applied directly to tuition, fees and mentoring, with no administrative deductions. Funds
                are held in a dedicated account and paid out as each semester falls due.
              </p>
              <a
                href={`mailto:${site.email}?subject=JPSS%20Graduate%20Scholarship%20sponsorship`}
                className="btn btn-sun mt-8"
              >
                Email us to sponsor a graduate
              </a>
              <p className="mt-3 text-sm text-paper/70">
                Sponsorships open each spring and close at the end of June.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GiveBand
        title="Not ready to sponsor one student?"
        text="A gift of any size to the general fund still builds classrooms, pays teachers and keeps the whole school moving."
      />
    </>
  );
}
