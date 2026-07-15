"use client";

// Gallery grid — handles tab state (event filter) and lightbox trigger.
// Server data flows in; all interactivity lives here.

import { useState } from "react";
import Image from "next/image";

import { cn } from "@shared/utils/cn";
import { GalleryLightbox } from "./gallery-lightbox";
import type { GalleryPhoto } from "./gallery-lightbox";

export interface GalleryEvent {
  readonly id: string;
  readonly label: string;
  readonly photos: readonly GalleryPhoto[];
}

interface GalleryGridProps {
  readonly events: readonly GalleryEvent[];
}

export function GalleryGrid({ events }: GalleryGridProps) {
  const [activeEventId, setActiveEventId] = useState(events[0]?.id ?? "");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeEvent = events.find((e) => e.id === activeEventId) ?? events[0];
  const photos = activeEvent?.photos ?? [];

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function goPrev() {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  }

  function goNext() {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % photos.length,
    );
  }

  return (
    <>
      {/* Event filter tabs */}
      <div
        role="tablist"
        aria-label="Filter gallery by event"
        className="flex flex-wrap justify-center gap-2"
      >
        {events.map((event) => (
          <button
            key={event.id}
            role="tab"
            aria-selected={event.id === activeEventId}
            aria-controls={`gallery-panel-${event.id}`}
            onClick={() => setActiveEventId(event.id)}
            className={cn(
              "rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors duration-200",
              event.id === activeEventId
                ? "bg-plum text-white"
                : "bg-paper text-plum border border-soft-pink hover:border-magenta hover:text-magenta",
            )}
          >
            {event.label}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div
        id={`gallery-panel-${activeEventId}`}
        role="tabpanel"
        aria-label={`${activeEvent?.label ?? ""} photos`}
        className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => openLightbox(index)}
            aria-label={`View photo: ${photo.alt}`}
            className="group relative aspect-square overflow-hidden rounded-xl bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hot-pink"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading={index < 4 ? "eager" : "lazy"}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-plum/0 transition-colors duration-200 group-hover:bg-plum/30" />
          </button>
        ))}

        {/* Empty state — shown until real photos are added */}
        {photos.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-soft-pink py-20 text-center">
            <p className="font-body text-sm text-ink/40">
              Photos from this event will appear here.
            </p>
            <p className="font-body text-xs text-ink/30">
              Add images to{" "}
              <code className="rounded bg-blush px-1.5 py-0.5 font-mono text-xs text-magenta">
                public/images/gallery/
              </code>
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          photos={photos}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
