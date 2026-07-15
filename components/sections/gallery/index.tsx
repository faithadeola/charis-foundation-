// Gallery — added per client request
// Slot: between Impact and Donate (proof → gallery → ask)
//
// Structure: event tabs (All · Orphans Hangout · Widows Medical Outreach ·
// Nurturing Minds · ...) → photo grid → lightbox on click.
//
// HOW TO ADD PHOTOS:
// 1. Drop images into public/images/gallery/<event-id>/
// 2. Add entries to the EVENTS array below — src, alt text (describe the scene)
// 3. Real photos only — no stock. Faces of minors only with guardian consent.
//    Per PRD § 6.4: "preserve dignity; show agency, not misery."

import { GalleryGrid } from "./gallery-grid";
import type { GalleryEvent } from "./gallery-grid";

// Add real photo paths and alt texts before launch.
// Placeholder entries show the empty-state UI until images are supplied.
const EVENTS: readonly GalleryEvent[] = [
  {
    id: "orphans-hangout",
    label: "Orphans Hangout",
    photos: [
       {
        src: "/images/gallery/orphans-hangout/01.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/orphans-hangout/02.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/orphans-hangout/03.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/orphans-hangout/04.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/orphans-hangout/05.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/orphans-hangout/06.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
    ],
  },
  {
    id: "widows-medical-outreach",
    label: "Widows Medical Outreach",
    photos: [
      {
        src: "/images/gallery/widows-medical-outreach/01.jpg",
        alt: "Charis Foundation Widows Medical Outreach in Ogbomoso",
      },
      {
        src: "/images/gallery/widows-medical-outreach/02.jpg",
        alt: "Medical outreach — health checks for widows in Ogbomoso",
      },
      {
        src: "/images/gallery/widows-medical-outreach/03.jpg",
        alt: "Charis Foundation medical team serving the community",
      },
       {
        src: "/images/gallery/widows-medical-outreach/04.jpg",
        alt: "Charis Foundation medical team serving the community",
      },
       {
        src: "/images/gallery/widows-medical-outreach/05.jpg",
        alt: "Charis Foundation medical team serving the community",
      },
       {
        src: "/images/gallery/widows-medical-outreach/06.jpg",
        alt: "Charis Foundation medical team serving the community",
      },
       {
        src: "/images/gallery/widows-medical-outreach/07.jpg",
        alt: "Charis Foundation medical team serving the community",
      },
       {
        src: "/images/gallery/widows-medical-outreach/08.jpg",
        alt: "Charis Foundation medical team serving the community",
      },
       {
        src: "/images/gallery/widows-medical-outreach/09.jpg",
        alt: "Charis Foundation medical team serving the community",
      },
    ],
  },
  {
    id: "nurturing-minds",
    label: "Nurturing Minds",
    photos: [
      {
        src: "/images/gallery/nurturing-minds/01.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/nurturing-minds/02.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/nurturing-minds/03.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/nurturing-minds/04.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/nurturing-minds/05.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/nurturing-minds/06.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/nurturing-minds/07.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
       {
        src: "/images/gallery/nurturing-minds/08.jpg",
        alt: "Nurturing Minds mentorship session with teens in Ogbomoso",
      },
    ],
  },
  {
    id: "feed-a-widow",
    label: "Feed a Widow",
    photos: [
      {
        src: "/images/gallery/feed-a-widow/01.jpg",
        alt: "Charis Foundation Feed a Widow — food distribution in Ogbomoso",
      },
    ],
  },
  {
    id: "school-outreach",
    label: "School Outreach",
    photos: [
      // {
      //   src: "/images/gallery/school-outreach/01.jpg",
      //   alt: "Life skills session with students at a secondary school in Ogbomoso",
      // },
    ],
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-blush py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-magenta">
            Gallery
          </p>
          <h2
            id="gallery-heading"
            className="mt-4 font-heading text-3xl font-bold leading-tight text-plum sm:text-4xl"
          >
            Our work in pictures
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Every photograph is from a real Charis Foundation event. Browse by
            program below.
          </p>
        </div>

        {/* Interactive grid — client component */}
        <div className="mt-12">
          <GalleryGrid events={EVENTS} />
        </div>

        {/* Consent note */}
        <p className="mx-auto mt-8 max-w-lg text-center font-body text-xs leading-relaxed text-ink/40">
          All photographs are shared with the informed consent of participants.
          Images of minors are only included with guardian consent.
          Beneficiaries are depicted with dignity.
        </p>
      </div>
    </section>
  );
}
