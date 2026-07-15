// Impact — PRD § 7.7
// "Numbers, presented plainly. Four stat blocks: widows supported ·
//  children in programs · outreaches held · years running.
//  Only publish numbers the foundation can defend."
//
// ALL numbers below are placeholders marked [N] — replace with real,
// verifiable figures from Olajire before launch. PRD § 7.7:
// "An honest '37 widows' beats an unverifiable 'thousands of lives touched'."
//
// Photo grid: 6–9 images from real outreaches. Placeholders shown until
// real photographs are supplied — PRD § 6.4.

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Stat {
  readonly value: string;
  readonly label: string;
  readonly note: string;
}

// Replace all values with real, defensible numbers before launch
const STATS: readonly Stat[] = [
  {
    value: "300+",
    label: "Widows supported",
    note: "through Feed a Widow and medical outreach",
  },
  {
    value: "400+",
    label: "Orphans in programs",
    note: "through Nurturing Minds and school sessions",
  },
  {
    value: "20+",
    label: "Outreaches held",
    note: "food, medical, and school programs combined",
  },
  {
    value: "3",
    label: "Years running",
    note: "serving Ogbomoso and surrounding communities since 2022",
  },
];

// Replace with real outreach photo paths before launch — PRD § 6.4
// Min 12 photos recommended; this grid shows 6–9
const PHOTOS: readonly { src: string; alt: string }[] = [
  { src: "/images/med-out4.jpeg", alt: "Charis Foundation Widows Medical Outreach in Ogbomoso" },
  { src: "/images/nut-mind3.jpeg", alt: "Medical outreach — health checks for widows in Ogbomoso" },
  { src: "/images/med-out7.jpeg", alt: "Charis Foundation medical team serving the community" },
  { src: "/images/nut-mind1.jpeg", alt: "Nurturing Minds mentorship session with teens in Ogbomoso" },
  { src: "/images/orph-out1.jpg", alt: "Feed a Widow outreach — food distribution in Ogbomoso" },
  { src: "/images/med-out5.jpeg", alt: "Charis Foundation Feed a Widow program volunteers" },
];

interface StatCardProps {
  readonly stat: Stat;
}

function StatCard({ stat }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);

  const numeric = parseInt(stat.value, 10);
  const suffix = stat.value.replace(String(numeric), "");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1500;
    const steps = 60;
    const increment = numeric / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= numeric) {
        setCount(numeric);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [triggered, numeric]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-2xl border border-soft-pink bg-paper px-6 py-8 text-center"
    >
      <span className="font-heading text-5xl font-bold tabular-nums text-hot-pink sm:text-6xl">
        {triggered ? `${count}${suffix}` : `0${suffix}`}
      </span>
      <span className="mt-3 font-heading text-lg font-semibold text-plum">
        {stat.label}
      </span>
      <span className="mt-2 font-body text-sm leading-relaxed text-ink/70">
        {stat.note}
      </span>
    </div>
  );
}

interface PhotoGridItemProps {
  readonly photo: { src: string; alt: string };
  readonly index: number;
}

function PhotoGridItem({ photo, index }: PhotoGridItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-square overflow-hidden rounded-xl bg-blush"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        loading={index < 2 ? "eager" : "lazy"}
      />
    </div>
  );
}

export function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="bg-blush py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-magenta">
            Our impact
          </p>
          <h2
            id="impact-heading"
            className="mt-4 font-heading text-3xl font-bold leading-tight text-plum sm:text-4xl"
          >
            Real people. Real numbers.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            We only publish figures we can stand behind. These are the people
            Charis Foundation has directly served since we began.
          </p>
        </div>

        {/* Stat blocks */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Photo grid */}
        <div className="mt-16">
          <h3 className="sr-only">Photographs from our outreaches</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
            {PHOTOS.map((photo, index) => (
              <PhotoGridItem key={photo.src} photo={photo} index={index} />
            ))}
          </div>
          <p className="mt-4 text-center font-body text-xs text-ink/50">
            All photographs show real outreaches by Charis Foundation.
            Beneficiary images shared with informed consent.
          </p>
        </div>
      </div>
    </section>
  );
}
