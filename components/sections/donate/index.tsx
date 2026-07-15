import { CopyAccountButton } from "./copy-account-button";

const ACCOUNT = {
  bank: "First Bank",
  accountName: "Charis Foundation for Orphans and Widows",
  accountNumber: "2048942650",
} as const;

export function Donate() {
  return (
    <section
      id="donate"
      aria-labelledby="donate-heading"
      className="bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-magenta">
            Give today
          </p>
          <h2
            id="donate-heading"
            className="mt-4 font-heading text-3xl font-bold leading-tight text-plum sm:text-4xl"
          >
            Your gift changes a real life in Ogbomoso
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink">
            Every naira goes directly to the people and programs on this page.
            No middlemen. No admin overhead taken from your gift.
          </p>
        </div>

        {/* Account details */}
        <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-soft-pink bg-blush p-6 sm:p-8">
          <h3 className="font-heading text-lg font-bold text-plum">
            Make a bank transfer
          </h3>
          <p className="mt-1 font-body text-sm text-ink/70">
            Send any amount directly to the foundation&apos;s corporate account.
          </p>

          <dl className="mt-6 space-y-4">
            <div className="flex justify-between gap-4 border-b border-soft-pink pb-4">
              <dt className="font-body text-sm text-ink/60">Bank</dt>
              <dd className="font-body text-sm font-semibold text-plum text-right">
                {ACCOUNT.bank}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-soft-pink pb-4">
              <dt className="font-body text-sm text-ink/60">Account name</dt>
              <dd className="font-body text-sm font-semibold text-plum text-right">
                {ACCOUNT.accountName}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div>
                <dt className="font-body text-sm text-ink/60">Account number</dt>
                <dd className="mt-0.5 font-heading text-2xl font-bold tabular-nums text-plum">
                  {ACCOUNT.accountNumber}
                </dd>
              </div>
              <CopyAccountButton accountNumber={ACCOUNT.accountNumber} />
            </div>
          </dl>
        </div>

        {/* CAC registration note */}
        <p className="mx-auto mt-6 max-w-lg text-center font-body text-xs leading-relaxed text-ink/50">
          Charis Foundation for Orphans and Widows is registered with the
          Corporate Affairs Commission (RC 9041325). All donations are received
          into the foundation&apos;s corporate account, not a personal account.
        </p>
      </div>
    </section>
  );
}
