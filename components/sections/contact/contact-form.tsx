"use client";

// Contact form — PRD § 7.10
// Fields: name, email, message, reason-for-contact dropdown
// Security: honeypot field to catch bots (PRD § 9.7)
// Error handling: inline, adjacent to the field — never toasts

import { useState } from "react";
import { AlertCircle, Check } from "@icons";
import { cn } from "@shared/utils/cn";

type Reason =
  | ""
  | "donate"
  | "partner"
  | "volunteer"
  | "goods"
  | "media"
  | "other";

interface FormFields {
  name: string;
  email: string;
  reason: Reason;
  message: string;
  honeypot: string; // must stay empty — bot trap
}

interface FormErrors {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

const INITIAL: FormFields = {
  name: "",
  email: "",
  reason: "",
  message: "",
  honeypot: "",
};

const REASONS: { value: Reason; label: string }[] = [
  { value: "donate", label: "I want to donate" },
  { value: "partner", label: "Partnership enquiry" },
  { value: "volunteer", label: "I want to volunteer" },
  { value: "goods", label: "Donating goods" },
  { value: "media", label: "Media or press" },
  { value: "other", label: "Something else" },
];

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!fields.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.reason) errors.reason = "Please select a reason for contact.";
  if (!fields.message.trim()) errors.message = "Please write a message.";
  else if (fields.message.trim().length < 10)
    errors.message = "Message is too short — please add a bit more detail.";
  return errors;
}

interface FieldErrorProps {
  readonly id: string;
  readonly message?: string;
}

function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
      <AlertCircle size={12} aria-hidden="true" />
      {message}
    </p>
  );
}

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function set<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    // Clear error on change
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Bot trap — if honeypot is filled, silently discard
    if (fields.honeypot) return;

    const fieldErrors = validate(fields);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitState("submitting");

    try {
      // v1: form submits to Formspree or similar static-friendly service.
      // Replace action URL with real endpoint before launch.
      const res = await fetch("https://formspree.io/f/[YOUR_FORM_ID]", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          reason: fields.reason,
          message: fields.message,
        }),
      });

      if (!res.ok) throw new Error("Form submission failed");
      setSubmitState("success");
      setFields(INITIAL);
    } catch {
      setSubmitState("error");
    }
  }

  const inputBase =
    "w-full rounded-xl border border-soft-pink bg-paper px-4 py-3 font-body text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-magenta focus:outline-none";

  if (submitState === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-soft-pink bg-blush px-6 py-16 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <Check className="h-6 w-6 text-green-600" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-xl font-bold text-plum">
          Message received
        </h3>
        <p className="font-body text-sm leading-relaxed text-ink">
          Thank you for reaching out. We will get back to you as soon as we
          can — usually within a few days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact Charis Foundation"
      className="flex flex-col gap-5"
    >
      {/* Honeypot — hidden from real users, bots fill it */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Leave this blank</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={fields.honeypot}
          onChange={(e) => set("honeypot", e.target.value)}
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block font-body text-sm font-semibold text-plum"
        >
          Your name <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          aria-invalid={!!errors.name}
          value={fields.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Amara Okafor"
          className={cn(inputBase, errors.name && "border-red-400")}
        />
        <FieldError id="contact-name-error" message={errors.name} />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block font-body text-sm font-semibold text-plum"
        >
          Email address <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          aria-invalid={!!errors.email}
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="amara@example.com"
          className={cn(inputBase, errors.email && "border-red-400")}
        />
        <FieldError id="contact-email-error" message={errors.email} />
      </div>

      {/* Reason */}
      <div>
        <label
          htmlFor="contact-reason"
          className="mb-1.5 block font-body text-sm font-semibold text-plum"
        >
          Reason for contact <span aria-hidden="true">*</span>
        </label>
        <select
          id="contact-reason"
          aria-required="true"
          aria-describedby={errors.reason ? "contact-reason-error" : undefined}
          aria-invalid={!!errors.reason}
          value={fields.reason}
          onChange={(e) => set("reason", e.target.value as Reason)}
          className={cn(
            inputBase,
            "cursor-pointer appearance-none",
            errors.reason && "border-red-400",
            !fields.reason && "text-ink/40",
          )}
        >
          <option value="" disabled>
            Select a reason…
          </option>
          {REASONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <FieldError id="contact-reason-error" message={errors.reason} />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block font-body text-sm font-semibold text-plum"
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          aria-required="true"
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          aria-invalid={!!errors.message}
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us a little about why you're reaching out…"
          className={cn(
            inputBase,
            "resize-none",
            errors.message && "border-red-400",
          )}
        />
        <FieldError id="contact-message-error" message={errors.message} />
      </div>

      {/* Submission error */}
      {submitState === "error" && (
        <p role="alert" className="flex items-center gap-2 font-body text-sm text-red-600">
          <AlertCircle size={15} aria-hidden="true" />
          Something went wrong. Please try again or reach us by phone or
          WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={submitState === "submitting"}
        aria-busy={submitState === "submitting"}
        className="rounded-full bg-primary px-6 py-3 font-heading text-base font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-60"
      >
        {submitState === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
