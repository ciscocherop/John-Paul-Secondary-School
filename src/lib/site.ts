/**
 * Site-wide facts and links. Edit here, not in the pages.
 * All copy and figures come from the existing johnpaulschool.com site.
 */

/** Where the WordPress install lives. Change WP_URL when WordPress moves to a subdomain. */
export const WP_URL = (process.env.WP_URL ?? "https://johnpaulschool.com").replace(/\/$/, "");

/** Build a URL to a file in the WordPress media library. */
export const media = (path: string) => `${WP_URL}/wp-content/uploads/${path}`;

export const site = {
  name: "Friends of John Paul School",
  school: "John Paul Secondary School",
  tagline: "A door. A path. A promise.",
  description:
    "Friends of John Paul School funds John Paul Secondary School in Chelekura, Uganda — from 14 students under a shade tree in 2007 to a campus of more than 800 today.",
  email: "info@johnpaulschool.com",
  ein: "46-2732642",
  address: ["Friends of John Paul School", "P.O. Box 80815", "Rochester, MI 48308-0815"],
};

export const links = {
  /** Donorbox campaign embedded on the donate page. */
  donorboxEmbed:
    "https://donorbox.org/embed/fojpsmonthly-2?designation=Area%20of%20greatest%20need&default_interval=o",
  sponsorStudent: "https://givebutter.com/JPSS_Scholarship",
  volunteerForm: "https://secure.lglforms.com/form_engine/s/wpPTk4IEe-6lALQyQVVfJg",
  donationFormPdf: media("2026/09/FOJPS-donation-form-updated.pdf"),
  charityNavigator: "https://www.charitynavigator.org/ein/462732642",
  guidestar: "https://www.guidestar.org/profile/shared/267a92c7-92c1-4033-bf8e-6a112dd4123a",
  facebook: "https://www.facebook.com/FOJPS",
  instagram: "https://www.instagram.com/friendsofjpss",
  linkedin: "https://www.linkedin.com/company/friends-of-john-paul-school/",
  youtube: "https://www.youtube.com/channel/UC9O-SLaYi1dBgC8yUHlbRFg",
};

/**
 * The strip above the header. Set to null to hide it.
 * Update or clear this after each campaign.
 */
export const announcement: { text: string; cta: string; href: string } | null = {
  text: "GivingTuesday is December 1. Our A-level students need classrooms of their own.",
  cta: "Help make room",
  href: "https://givebutter.com/FOJPSGT2026",
};

export const nav = [
  { href: "/about", label: "Who we are" },
  { href: "/school", label: "The school" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/history", label: "History" },
  { href: "/stories", label: "Stories" },
  { href: "/get-involved", label: "Get involved" },
];

/** Photos from the school's media library, chosen for the redesign. */
export const photos = {
  classroom: media("2022/11/8.jpg"),
  scholarInDoorway: media("2020/06/Single-scholar.jpg"),
  teachersOnRoad: media("2020/06/Teachers-riding-bikes-to-work-2019.jpg"),
  girlsInClass: media("2022/11/9a.jpg"),
  friendsLaughing: media("2022/11/DSC05654-1024x768.jpg"),
  hungerfordScholars: media("2020/06/Hungerford-Scholars-1-1024x682.jpg"),
  chapel: media("2022/11/2av2.jpg"),
  foundersAtGate: media("2022/11/Nancy-Paul-at-JPSS-entrance-1-1024x768.jpg"),
  firstClassroom: media("2020/07/John-Paul-Students-1-scaled.jpg"),
  computerLab: media("2022/11/7a.jpg"),
  studyGroup: media("2022/11/4a.jpg"),
  dedication2007: media("2020/07/2007-Archbishop-Odongo-at-dedication-of-JPSS.jpg"),
  classOnSteps: media("2022/11/PHOTO-2022-01-28-11-48-41.jpg"),
  hungerfords: media("2020/06/The-Hungerfords.jpg"),
};
