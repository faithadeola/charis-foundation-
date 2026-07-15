// Footer — PRD § 7.11
// "Logo · mission line · nav links · socials · RC number · copyright"

import { FacebookIcon, InstagramIcon } from "@icons";
import { Logo } from "@components/ui/logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CharisFoundationforOrphansandWidows",
    Icon: FacebookIcon,
  },
  {
    label: "Instagram (@cf_orphansandwidows)",
    href: "https://www.instagram.com/cf_orphansandwidows",
    Icon: InstagramIcon,
  },
] as const;

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-plum" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            {/* Mission line — verbatim per PRD § 6.2 */}
            <p className="max-w-xs font-body text-sm leading-relaxed text-white/70">
              To raise and help orphans and widows, who will grow with the
              passion to help others and add value to the society.
            </p>

            {/* Social links */}
            <div className="mt-2 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Charis Foundation on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigation
            </p>
            <ul role="list" className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal + registration */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-white/40">
              Legal
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {/* RC number — PRD § 7.11: required in footer */}
              <p className="font-body text-sm text-white/70">
                CAC Registered · RC{" "}
                <span className="font-semibold text-white">
                  9041325
                </span>
              </p>
              <p className="font-body text-sm text-white/70">
                Ogbomoso, Oyo State, Nigeria
              </p>
              <p className="font-body text-sm text-white/70">
                Tel:{" "}
                <a
                  href="tel:+2347037774573"
                  className="transition-colors hover:text-white"
                >
                  0703 777 4573
                </a>
              </p>
              {/* Privacy note — PRD § 9.7 */}
              <p className="mt-2 font-body text-xs leading-relaxed text-white/40">
                We do not store beneficiary personal data on this site. Contact
                form submissions are used solely to respond to your enquiry.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-body text-xs text-white/40">
            &copy; {CURRENT_YEAR} Charis Foundation for Orphans and Widows.
            All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30">
            Caring for Orphans and Widows
          </p>
        </div>
      </div>
    </footer>
  );
}
