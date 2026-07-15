// Get Involved — PRD § 7.9
// "Partner · Volunteer · Donate goods. Each routes to the contact form
//  or WhatsApp. No forms beyond contact in v1."

import { Heart, Users, ShoppingBasket, ArrowRight } from "@icons";
import type { ComponentType, SVGProps } from "react";

interface InvolvementOption {
  readonly id: string;
  readonly icon: ComponentType<SVGProps<SVGSVGElement>>;
  readonly title: string;
  readonly description: string;
  readonly cta: string;
  readonly href: string;
}

// WhatsApp link — replace phone number with foundation's WhatsApp number
const WHATSAPP_URL = "https://wa.me/2347037774573";
const CONTACT_ANCHOR = "#contact";

const OPTIONS: readonly InvolvementOption[] = [
  {
    id: "partner",
    icon: Users,
    title: "Partner with us",
    description:
      "Churches, corporate CSR offices, and other NGOs — we welcome formal partnerships that extend our reach and deepen our programs.",
    cta: "Get in touch",
    href: CONTACT_ANCHOR,
  },
  {
    id: "volunteer",
    icon: Heart,
    title: "Volunteer",
    description:
      "Join us at an outreach, mentor a teen, or contribute a skill. We welcome hands-on support from people who show up.",
    cta: "Message us on WhatsApp",
    href: WHATSAPP_URL,
  },
  {
    id: "goods",
    icon: ShoppingBasket,
    title: "Donate goods",
    description:
      "Food items, books, stationery, vocational tools, and medical supplies are always needed. Contact us to arrange a drop-off or collection.",
    cta: "Contact us",
    href: CONTACT_ANCHOR,
  },
];

interface InvolvementCardProps {
  readonly option: InvolvementOption;
}

function InvolvementCard({ option }: InvolvementCardProps) {
  const Icon = option.icon;
  const isExternal = option.href.startsWith("http");

  return (
    <div className="flex flex-col rounded-2xl border border-soft-pink bg-paper p-6 sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blush">
        <Icon className="h-6 w-6 text-magenta" aria-hidden="true" />
      </div>

      <h3 className="mt-5 font-heading text-xl font-bold text-plum">
        {option.title}
      </h3>

      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink">
        {option.description}
      </p>

      <a
        href={option.href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-hot-pink transition-colors hover:text-magenta"
      >
        {option.cta}
        <ArrowRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}

export function GetInvolved() {
  return (
    <section
      aria-labelledby="get-involved-heading"
      className="bg-blush py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-magenta">
            Get involved
          </p>
          <h2
            id="get-involved-heading"
            className="mt-4 font-heading text-3xl font-bold leading-tight text-plum sm:text-4xl"
          >
            There is more than one way to help
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Money is one form of support. Your time, your network, and your
            goods matter just as much.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {OPTIONS.map((option) => (
            <InvolvementCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}
