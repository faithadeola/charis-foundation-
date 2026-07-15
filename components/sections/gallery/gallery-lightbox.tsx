"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

import { X, ArrowRight, ArrowLeft } from "@icons";

export interface GalleryPhoto {
  readonly src: string;
  readonly alt: string;
}

interface GalleryLightboxProps {
  readonly photos: readonly GalleryPhoto[];
  readonly activeIndex: number;
  readonly onClose: () => void;
  readonly onPrev: () => void;
  readonly onNext: () => void;
}

export function GalleryLightbox({
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const current = photos[activeIndex];
  const total = photos.length;

  // Keyboard navigation
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-plum/95 p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={20} aria-hidden="true" />
      </button>

      {/* Prev */}
      {total > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
        {/* Caption */}
        <div className="bg-plum/80 px-4 py-3 text-center">
          <p className="font-body text-sm text-white/80">{current.alt}</p>
          <p className="mt-0.5 font-body text-xs text-white/40">
            {activeIndex + 1} / {total}
          </p>
        </div>
      </div>

      {/* Next */}
      {total > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <ArrowRight size={20} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
