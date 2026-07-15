// Our Story — PRD § 7.5
// "Founding narrative — why Olajire started this.
//  2–3 short paragraphs plus a portrait.
//  Names the founder as founder, not as the organisation."
//
import Image from "next/image";

export function OurStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="bg-blush py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Founder portrait */}
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-soft-pink lg:max-w-full">
            <Image
              src="/images/founder.jpg"
              alt="Olajire Oyedokun, founder of Charis Foundation for Orphans and Widows"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Story text */}
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-magenta">
              Our story
            </p>

            <h2
              id="story-heading"
              className="mt-4 font-heading text-3xl font-bold leading-tight text-plum sm:text-4xl"
            >
              Why Olajire started Charis Foundation
            </h2>

            {/* Placeholder paragraphs — replace with real founding story */}
            <div className="mt-6 space-y-5 font-body text-base leading-relaxed text-ink">
              <p>
                [Placeholder — Olajire&apos;s personal story and what moved her
                to start the foundation. What year did she begin? What did she
                see in her community that others were walking past?]
              </p>
              <p>
                [Placeholder — What happened in those early days? How did the
                first outreach come together? Who were the first people the
                foundation helped?]
              </p>
              <p>
                Today, Charis Foundation is CAC-registered and runs structured
                programs serving widows and orphaned teens across Ogbomoso.
                What began as one person&apos;s conviction has grown into an
                organisation with accountability, structure, and a corporate
                bank account — because the work deserves to last.
              </p>
            </div>

            {/* Founder name — named as founder, not the organisation */}
            <div className="mt-8 flex items-center gap-4">
              <div>
                <p className="font-heading text-base font-semibold text-plum">
                  Olajire Oyedokun
                </p>
                <p className="font-body text-sm text-magenta">
                  Founder, Charis Foundation for Orphans and Widows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
