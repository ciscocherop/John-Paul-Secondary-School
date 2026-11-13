import Link from "next/link";
import { Suspense } from "react";
import { GiveBand, Photo, Quote, StoryCard } from "@/components/ui";
import { photos } from "@/lib/site";
import { getLatestStories } from "@/lib/wp";

const stats = [
  { figure: "14", label: "students under a shade tree when the school opened in 2007" },
  { figure: "800+", label: "students learning on the campus today" },
  { figure: "#1", label: "ranked secondary school in Pallisa District, two years running" },
  { figure: "97%", label: "of every donation goes directly to the school" },
];

const chapters = [
  {
    n: "01",
    word: "A door",
    title: "A school where there was none.",
    text: "Chelekura is a farming village in eastern Uganda where most children once left school after Primary Seven. John Paul Secondary School gives them six more years: O-level, A-level, boarding, meals, clean water and teachers who know their names.",
    href: "/school",
    cta: "See the school",
    photo: photos.scholarInDoorway,
    alt: "A smiling JPSS scholar standing in a wooden doorway",
  },
  {
    n: "02",
    word: "A path",
    title: "From Senior One to a university degree.",
    text: "Two scholarship programs make one continuous route. A Hungerford sponsorship covers tuition and boarding through all six years at JPSS. The Graduate Scholarship then carries the strongest students through university.",
    href: "/scholarships",
    cta: "Explore the scholarships",
    photo: photos.teachersOnRoad,
    alt: "Two JPSS teachers cycling to work along a red dirt road",
  },
  {
    n: "03",
    word: "A promise",
    title: "Kept by friends, every year since 2007.",
    text: "Friends of John Paul School is run entirely by volunteers. There is no headquarters and no paid staff, so your gift becomes classrooms, dormitories, laboratories, teacher salaries and books.",
    href: "/about",
    cta: "Meet the Friends",
    photo: photos.girlsInClass,
    alt: "Two students smiling at their desk in a JPSS classroom",
  },
];

async function LatestStories() {
  let stories;
  try {
    stories = await getLatestStories(4);
  } catch {
    return (
      <p className="text-muted">
        Stories are unavailable right now. <Link className="link" href="/stories">Try the stories page</Link>.
      </p>
    );
  }
  const [lead, ...rest] = stories;
  if (!lead) return null;
  return (
    <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
      <StoryCard story={lead} large />
      <ul className="self-start divide-y divide-line border-y border-line">
        {rest.map((s) => (
          <li key={s.id} className="group relative py-6">
            <p className="text-sm text-muted">{s.categories[0]?.name ?? "News"}</p>
            <h3 className="mt-1 text-2xl">
              <Link href={`/stories/${s.slug}`} className="after:absolute after:inset-0 group-hover:text-clay">
                {s.title}
              </Link>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero: the classroom wall. Cream above, teal below. */}
      <section className="dado [--dado:68%] md:[--dado:62%]">
        <div className="wrap pt-14 md:pt-20">
          <p className="eyebrow">Chelekura, Uganda · since 2007</p>
          <h1 className="mt-5 text-[3.4rem] leading-[0.95] sm:text-7xl lg:text-[7.5rem]">
            A door. A path.
            <br />
            <em className="text-clay">A promise.</em>
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <p className="max-w-xl text-xl text-muted">
              John Paul Secondary School began with 14 students under a shade tree. Today more than 800
              young Ugandans study there, and friends like you keep it growing.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/donate" className="btn btn-clay">Donate now</Link>
              <Link href="/scholarships" className="btn btn-line">Sponsor a student</Link>
            </div>
          </div>

          <Photo
            src={photos.classroom}
            alt="A full classroom of JPSS students at wooden desks, smiling toward the camera"
            shape="arch"
            eager
            className="mt-12 aspect-[4/3] !rounded-t-[3rem] sm:aspect-[16/9] md:!rounded-t-[14rem]"
          />
        </div>

        <div className="on-dark text-paper">
          <dl className="wrap grid grid-cols-2 gap-x-8 gap-y-10 py-14 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.figure}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-6xl text-sun md:text-7xl">{s.figure}</span>
                  <span className="mt-2 block max-w-[16rem] text-paper/80" aria-hidden>
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The three chapters */}
      <section className="wrap py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow">Why John Paul</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Three words explain everything we do.</h2>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {chapters.map((c, i) => (
            <article key={c.n} className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
              <Photo
                src={c.photo}
                alt={c.alt}
                shape="arch"
                className={`mx-auto aspect-[3/4] w-full max-w-sm ${i % 2 ? "md:order-2" : ""}`}
              />
              <div>
                <p className="flex items-baseline gap-4">
                  <span className="font-display text-xl text-clay">{c.n}</span>
                  <span className="font-display text-5xl italic md:text-6xl">{c.word}</span>
                </p>
                <h3 className="mt-6 text-3xl">{c.title}</h3>
                <p className="mt-4 max-w-lg text-lg text-muted">{c.text}</p>
                <Link href={c.href} className="link mt-6 inline-block">
                  {c.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Voice of a student */}
      <section className="bg-paper-deep">
        <div className="wrap grid items-center gap-10 py-20 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <Photo
            src={photos.friendsLaughing}
            alt="A group of JPSS students laughing together"
            className="aspect-[4/3]"
          />
          <Quote by="Timothy Gyabi" role="JPSS student">
            This school is a blessing for our isolated community. Many of our older siblings dropped out
            after Primary Seven. Today, we have a chance they never had and we are truly grateful.
          </Quote>
        </div>
      </section>

      {/* Scholarships */}
      <section className="wrap py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Scholarship programs</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Two programs, one continuous path.</h2>
          </div>
          <Link href="/scholarships" className="link">How sponsorship works →</Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-white/50 p-8 md:p-10">
            <p className="eyebrow">Secondary school · 6 years</p>
            <h3 className="mt-3 text-3xl">Hungerford JPSS Sponsorship</h3>
            <p className="mt-4 text-muted">
              One sponsor, one student, first day to graduation. Covers full tuition, boarding, uniform and
              exam fees so a bright child from Pallisa District can focus on learning.
            </p>
            <p className="mt-6 font-display text-5xl">
              $60<span className="text-xl text-muted"> a month</span>
            </p>
            <Link href="/scholarships#hungerford" className="btn btn-clay mt-8">Sponsor a student</Link>
          </div>
          <div className="on-dark rounded-xl bg-teal-deep p-8 text-paper md:p-10">
            <p className="eyebrow !text-sun">University · 3 to 5 years</p>
            <h3 className="mt-3 text-3xl">JPSS Graduate Scholarship</h3>
            <p className="mt-4 text-paper/80">
              For graduates who earn a university place their families cannot fund. Covers tuition, fees and
              a laptop, with a mentor who visits every semester.
            </p>
            <p className="mt-6 font-display text-5xl text-sun">
              $5,000<span className="text-xl text-paper/70"> for a full degree, and up</span>
            </p>
            <Link href="/scholarships#graduate" className="btn btn-sun mt-8">Sponsor a graduate</Link>
          </div>
        </div>
      </section>

      {/* Stories from WordPress */}
      <section className="border-t-[3px] border-bark">
        <div className="wrap py-20 md:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">From the campus</p>
              <h2 className="mt-4 text-4xl md:text-6xl">Current stories</h2>
            </div>
            <Link href="/stories" className="link">All stories →</Link>
          </div>
          <Suspense fallback={<div className="frame h-96 animate-pulse" />}>
            <LatestStories />
          </Suspense>
        </div>
      </section>

      {/* Mission and impact */}
      <section className="on-dark bg-teal-deep text-paper">
        <div className="wrap grid gap-14 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow !text-sun">Our mission</p>
            <p className="mt-5 font-display text-3xl leading-snug md:text-4xl">
              To provide a path to quality education and faith formation for the children of rural Africa
              through the establishment and construction of schools, while providing development, competence
              and prosperity for the local community.
            </p>
          </div>
          <div className="space-y-10 md:pl-10">
            <div>
              <h3 className="text-2xl">The 2024–2025 Impact Report</h3>
              <p className="mt-3 text-paper/80">
                Expanded classrooms and laboratories, national academic recognition and scholarships that
                open doors to lifelong opportunity.
              </p>
              <Link href="/impact-report-2025" className="link mt-4 inline-block">Read the report →</Link>
            </div>
            <div className="border-t border-paper/20 pt-10">
              <h3 className="text-2xl">In memory of Dr. Larry Hungerford</h3>
              <p className="mt-3 text-paper/80">
                1936–2025. For eleven years Larry and his wife, Sue, supported hundreds of our students
                through the scholarships that carry their name. His legacy lives on in every one of them.
              </p>
              <Link href="/scholarships#hungerford" className="link mt-4 inline-block">
                The Hungerford story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GiveBand />
    </>
  );
}
