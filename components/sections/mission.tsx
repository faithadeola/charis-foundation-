import Image from "next/image";

export function Mission() {
  return (
    <section
      id="about"
      aria-labelledby="mission-heading"
      className="bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest text-magenta">
              Our mission
            </p>

            {/* Verbatim mission statement — PRD § 6.2: "do not rewrite" */}
            <blockquote
              id="mission-heading"
              className="mt-4 font-heading text-2xl font-bold leading-snug text-plum sm:text-3xl lg:text-4xl"
            >
              &ldquo;To raise and help orphans and widows, who will grow with
              the passion to help others and add value to the society.&rdquo;
            </blockquote>

            <p className="mt-6 font-body text-base leading-relaxed text-ink">
              Since our founding in Ogbomoso, Oyo State, Charis Foundation has
              walked alongside vulnerable children and widows — not with pity,
              but with practical, sustained support. From mentorship and
              vocational skills to food and medical outreaches, we work to
              ensure no one is left to face hardship alone.
            </p>

            <p className="mt-4 font-body text-base leading-relaxed text-ink">
              We are CAC-registered, donor-accountable, and rooted in the
              community we serve. Every naira donated goes directly to the
              people and programs named on this page.
            </p>
          </div>

          {/* Supporting photograph */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-blush">
            <Image
              src="/images/orph-out5.jpeg"
              alt="Charis Foundation volunteers at a community outreach in Ogbomoso"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
