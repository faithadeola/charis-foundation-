// Programs — PRD § 7.6
// "Three or four cards. Each: icon or photo, program name, one-sentence
//  description, concrete deliverables list. Nurturing Minds gets prominence —
//  it is the most fundable, because its costs are itemisable."
//
// Copy sourced verbatim from PRD § 6.3. Program descriptions rewritten in
// clean prose per the content note ("Existing flyers contain typos and
// inconsistent capitalisation. Copy on the website must be flawless.")

import { BookOpen, Stethoscope, ShoppingBasket, GraduationCap } from "@icons";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@shared/utils/cn";

interface Deliverable {
  readonly text: string;
}

interface Program {
  readonly id: string;
  readonly icon: ComponentType<SVGProps<SVGSVGElement>>;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly deliverables: readonly Deliverable[];
  readonly featured?: boolean;
}

const PROGRAMS: readonly Program[] = [
  {
    id: "nurturing-minds",
    icon: BookOpen,
    name: "Nurturing Minds",
    tagline: "Mentorship · Growth · Impact",
    description:
      "Empowering orphaned teens and young adults in Ogbomoso with the skills, resources, and guidance they need to build independent, purposeful lives.",
    deliverables: [
      { text: "12 books provided over the year" },
      { text: "Journal kits for personal development" },
      { text: "Meals and event logistics at every session" },
      { text: "Financial aid for courses and certifications" },
      { text: "Vocational training with skilled artisans" },
      { text: "Start-up kits for graduates entering a trade" },
    ],
    featured: true,
  },
  {
    id: "feed-a-widow",
    icon: ShoppingBasket,
    name: "Charis Project: Feed a Widow",
    tagline: "Nourishment · Dignity · Care",
    description:
      "Distributing food staples and essential supplies to widows in the community, with dedicated outreaches at Christmas and around International Widows' Day.",
    deliverables: [
      { text: "Food packages and household staples" },
      { text: "Seasonal outreaches at Christmas" },
      { text: "International Widows' Day distributions" },
    ],
  },
  {
    id: "medical-outreach",
    icon: Stethoscope,
    name: "Medical Outreach",
    tagline: "Health · Access · Community",
    description:
      "Bringing free health checks and essential medication to widows and vulnerable community members who cannot easily access or afford healthcare.",
    deliverables: [
      { text: "Free health screenings and check-ups" },
      { text: "Essential medication provided at no cost" },
      { text: "Community-based delivery — no travel required" },
    ],
  },
  {
    id: "life-skills",
    icon: GraduationCap,
    name: "School Life Skills",
    tagline: "Character · Confidence · Future",
    description:
      "Delivering mentorship and life-skills sessions directly inside primary and secondary schools, equipping young students with tools for decision-making and self-worth.",
    deliverables: [
      { text: "In-school mentorship sessions" },
      { text: "Life-skills curriculum for adolescents" },
      { text: "Character and leadership development" },
    ],
  },
];

interface ProgramCardProps {
  readonly program: Program;
}

function ProgramCard({ program }: ProgramCardProps) {
  const Icon = program.icon;

  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border p-6 transition-shadow duration-200 hover:shadow-md sm:p-8",
        program.featured
          ? "border-hot-pink bg-plum text-white"
          : "border-soft-pink bg-paper text-ink",
      )}
      aria-label={program.name}
    >
      {/* Icon + featured badge */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl",
            program.featured ? "bg-white/15" : "bg-blush",
          )}
        >
          <Icon
            className={cn(
              "h-6 w-6",
              program.featured ? "text-soft-pink" : "text-magenta",
            )}
            aria-hidden="true"
          />
        </div>
        {program.featured && (
          <span className="rounded-full bg-hot-pink px-3 py-1 font-body text-xs font-semibold text-white">
            Flagship program
          </span>
        )}
      </div>

      {/* Name + tagline */}
      <div className="mt-5">
        <h3
          className={cn(
            "font-heading text-xl font-bold leading-snug",
            program.featured ? "text-white" : "text-plum",
          )}
        >
          {program.name}
        </h3>
        <p
          className={cn(
            "mt-1 font-body text-xs font-semibold uppercase tracking-widest",
            program.featured ? "text-soft-pink" : "text-magenta",
          )}
        >
          {program.tagline}
        </p>
      </div>

      {/* Description */}
      <p
        className={cn(
          "mt-4 font-body text-sm leading-relaxed",
          program.featured ? "text-white/85" : "text-ink",
        )}
      >
        {program.description}
      </p>

      {/* Deliverables */}
      <ul
        role="list"
        className="mt-6 flex flex-col gap-2"
        aria-label={`What ${program.name} provides`}
      >
        {program.deliverables.map(({ text }) => (
          <li key={text} className="flex items-start gap-2.5">
            <span
              className={cn(
                "mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full",
                program.featured ? "bg-soft-pink" : "bg-magenta",
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                "font-body text-sm",
                program.featured ? "text-white/85" : "text-ink",
              )}
            >
              {text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Programs() {
  const [featured, ...rest] = PROGRAMS;

  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-magenta">
            What we do
          </p>
          <h2
            id="programs-heading"
            className="mt-4 font-heading text-3xl font-bold leading-tight text-plum sm:text-4xl"
          >
            Our programs
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Every program is built around what people in our community
            actually need — not what looks good in a report.
          </p>
        </div>

        {/* Nurturing Minds — full-width featured card */}
        {featured && (
          <div className="mt-12">
            <ProgramCard program={featured} />
          </div>
        )}

        {/* Remaining programs — 3-column grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
