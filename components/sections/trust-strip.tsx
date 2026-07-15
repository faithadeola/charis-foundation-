// Trust strip — PRD § 7.3
// "Immediately under the hero. Understated, single row, blush background."
// Replace RC number and founding year before launch — PRD § 6.1

const TRUST_ITEMS = [
  "CAC Registered",
  "RC 9041325",
  "Ogbomoso, Oyo State",
  "Founded 2022",
] as const;

export function TrustStrip() {
  return (
    <section
      aria-label="Registration and credibility"
      className="bg-blush border-y border-soft-pink"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
        >
          {TRUST_ITEMS.map((item, index) => (
            <li key={item} className="flex items-center gap-3">
              <span className="font-body text-sm font-medium text-plum">{item}</span>
              {index < TRUST_ITEMS.length - 1 && (
                <span className="text-soft-pink" aria-hidden="true">
                  &middot;
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
