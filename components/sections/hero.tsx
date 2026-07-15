"use client";

import { ChevronDown } from "@icons";
import { Button } from "@components/ui/button";

export function Hero() {
  function scrollToImpact() {
    document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToDonate() {
    document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image — replace src with real photograph before launch */}
      {/* Placeholder: solid plum until real image is supplied */}
      <div
        className="absolute inset-0 bg-plum bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
        role="img"
        aria-label="Children and widows supported by Charis Foundation in Ogbomoso"
      />

      {/* Plum overlay for text legibility — PRD § 7.2 */}
      <div className="absolute inset-0 bg-plum/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white/90 sm:text-5xl lg:text-6xl">
          Every child deserves someone in their corner.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/90 sm:text-xl">
          Charis Foundation provides mentorship, vocational training, and
          essential support to orphans and widows in Ogbomoso, Oyo State.
        </p>

        {/* CTAs — PRD § 7.2 */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" onClick={scrollToDonate}>
            Donate now
          </Button>
          <Button variant="ghost" size="lg" onClick={scrollToImpact}>
            See our work
          </Button>
        </div>
      </div>

      {/* Below-the-fold indicator — PRD § 7.2 */}
      <button
        onClick={scrollToImpact}
        aria-label="Scroll down to see more"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
      >
        <ChevronDown
          size={32}
          className="animate-bounce"
          aria-hidden="true"
        />
      </button>
    </section>
  );
}
