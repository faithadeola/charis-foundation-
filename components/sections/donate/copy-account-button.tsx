"use client";

import { useState } from "react";

import { Copy, Check } from "@icons";
import { cn } from "@shared/utils/cn";

interface CopyAccountButtonProps {
  readonly accountNumber: string;
}

export function CopyAccountButton({ accountNumber }: CopyAccountButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement("textarea");
      el.value = accountNumber;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={
        copied ? "Account number copied" : "Copy account number to clipboard"
      }
      aria-live="polite"
      className={cn(
        "flex items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-semibold transition-all duration-200",
        copied
          ? "bg-green-100 text-green-700"
          : "bg-blush text-plum hover:bg-soft-pink",
      )}
    >
      {copied ? (
        <>
          <Check size={15} aria-hidden="true" />
          Copied!
        </>
      ) : (
        <>
          <Copy size={15} aria-hidden="true" />
          Copy account number
        </>
      )}
    </button>
  );
}
