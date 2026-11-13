import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { links, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Friends of John Paul School in Rochester, Michigan, or to our partners in Uganda.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>We are happy to answer <em className="text-clay">any question.</em></>}
        lead="Our board members are volunteers, and every message reaches one of them."
      >
        <a href={`mailto:${site.email}`} className="btn btn-clay">{site.email}</a>
      </PageHero>

      <section className="wrap grid gap-12 py-20 md:grid-cols-3">
        <div className="border-t-[3px] border-bark pt-6">
          <p className="eyebrow">In the United States</p>
          <h2 className="mt-3 text-3xl">Friends of John Paul School</h2>
          <address className="mt-4 not-italic text-lg text-muted">
            {site.address.slice(1).map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
          <p className="mt-4 text-muted">
            Paul and Nancy Berrigan, founders
            <br />
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>

        <div className="border-t-[3px] border-bark pt-6">
          <p className="eyebrow">In Uganda</p>
          <h2 className="mt-3 text-3xl">Monsignor John Kauta</h2>
          <address className="mt-4 not-italic text-lg text-muted">
            Secretary General, Uganda Episcopal Conference
            <span className="block">Uganda Catholic Secretariat</span>
            <span className="block">Hanlon, Nsambya Hill</span>
            <span className="block">P.O. Box 2886, Kampala</span>
          </address>
          <p className="mt-4 text-muted">
            Cissy Kagimu, Principal and Administrative Secretary
            <br />
            <a className="link" href="mailto:cissy@uecon.org">cissy@uecon.org</a>
          </p>
        </div>

        <div className="border-t-[3px] border-bark pt-6">
          <p className="eyebrow">Follow along</p>
          <h2 className="mt-3 text-3xl">News from the campus</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li><a className="link" href={links.facebook}>Facebook</a></li>
            <li><a className="link" href={links.instagram}>Instagram</a></li>
            <li><a className="link" href={links.linkedin}>LinkedIn</a></li>
            <li><a className="link" href={links.youtube}>YouTube</a></li>
          </ul>
          <p className="mt-6 text-muted">
            Want to help in person? <a className="link" href={links.volunteerForm}>Fill in the volunteer form</a>.
          </p>
        </div>
      </section>
    </>
  );
}
