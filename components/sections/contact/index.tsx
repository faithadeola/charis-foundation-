// Contact — PRD § 7.10
// "Email, phone (click-to-call), WhatsApp link, physical address, social links.
//  Simple contact form: name, email, message, reason-for-contact dropdown."

import { Phone, Mail, MapPin } from "@icons";
import { FacebookIcon, InstagramIcon } from "@icons";
import { ContactForm } from "./contact-form";

// Replace placeholders with real values before launch — PRD § 6.1
const CONTACT_DETAILS = {
  phone: "0703 777 4573",
  phoneHref: "tel:+2347037774573",
  whatsappHref: "https://wa.me/2347037774573",
  email: "Charis.care.for.orphan.and.widow@gmail.com",
  emailHref: "mailto:Charis.care.for.orphan.and.widow@gmail.com",
  address: "Ogbomoso, Oyo State, Nigeria",
  facebook: "https://www.facebook.com/CharisFoundationforOrphansandWidows",
  instagram: "https://www.instagram.com/cf_orphansandwidows",
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-magenta">
            Contact us
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-heading text-3xl font-bold leading-tight text-plum sm:text-4xl"
          >
            We would love to hear from you
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Whether you want to donate, partner, volunteer, or just ask a
            question — reach us through the form or directly below.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact details */}
          <div className="flex flex-col gap-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blush">
                <Phone className="h-5 w-5 text-magenta" aria-hidden="true" />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-plum">Phone</p>
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="mt-0.5 block font-body text-base text-ink transition-colors hover:text-hot-pink"
                >
                  {CONTACT_DETAILS.phone}
                </a>
                <a
                  href={CONTACT_DETAILS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-hot-pink transition-colors hover:text-magenta"
                >
                  Message on WhatsApp →
                </a>
              </div>
            </div>

            {/* Email — shown when domain email is ready */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blush">
                <Mail className="h-5 w-5 text-magenta" aria-hidden="true" />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-plum">Email</p>
                <a
                  href={CONTACT_DETAILS.emailHref}
                  className="mt-0.5 block font-body text-base text-ink transition-colors hover:text-hot-pink break-all"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blush">
                <MapPin className="h-5 w-5 text-magenta" aria-hidden="true" />
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-plum">Address</p>
                {/* Replace with full physical address before launch — PRD § 6.1 */}
                <p className="mt-0.5 font-body text-base text-ink">
                  {CONTACT_DETAILS.address}
                </p>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="font-body text-sm font-semibold text-plum">Follow us</p>
              <div className="mt-3 flex items-center gap-4">
                <a
                  href={CONTACT_DETAILS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Charis Foundation on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush text-magenta transition-colors hover:bg-soft-pink hover:text-plum"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT_DETAILS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Charis Foundation on Instagram (@cf_orphansandwidows)"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush text-magenta transition-colors hover:bg-soft-pink hover:text-plum"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
