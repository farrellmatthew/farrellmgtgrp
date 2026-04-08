const proofPoints = [
  {
    label: "Archetype",
    title: "Ruler, sharpened by a navigator's lens",
    body:
      "Authority here feels earned, not performed. The posture is calm, direct, and already oriented toward the destination.",
    tone: "blue",
  },
  {
    label: "Operating System",
    title: "The arena changes. The engine does not.",
    body:
      "Competitor to coach to entrepreneur to CEO reads less like a resume and more like a repeated stress test with the same outcome.",
    tone: "neutral",
  },
  {
    label: "Proof Layer",
    title: "Instruments over adjectives",
    body:
      "The identity book keeps returning to scores, rank, and evidence. That makes the visual language precise, not promotional.",
    tone: "amber",
  },
];

const arc = ["Competitor", "Coach", "Entrepreneur", "CEO"];

const metrics = [
  "Strategic #1",
  "Urgency #1 of 12",
  "Type 8 Challenger",
  "High-dominance self-starter",
];

function NavigatorKeyMark() {
  return (
    <svg
      viewBox="0 0 160 160"
      aria-hidden="true"
      className="h-28 w-28 text-white md:h-36 md:w-36"
      fill="none"
    >
      <circle cx="80" cy="80" r="26" className="fill-[#185FA5] opacity-[0.15]" />
      <circle cx="80" cy="80" r="17" className="fill-[#185FA5]" />
      <g className="stroke-white/[0.15]" strokeWidth="1">
        <line x1="80" y1="39" x2="80" y2="47" />
        <line x1="80" y1="113" x2="80" y2="121" />
        <line x1="39" y1="80" x2="47" y2="80" />
        <line x1="113" y1="80" x2="121" y2="80" />
      </g>
      <line
        x1="80"
        y1="98"
        x2="80"
        y2="116"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="62"
        y1="80"
        x2="44"
        y2="80"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="80"
        y1="62"
        x2="80"
        y2="20"
        stroke="#185FA5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polygon points="80,12 74,24 86,24" fill="#185FA5" />
      <circle cx="80" cy="10" r="6" fill="#EF9F27" />
      <line
        x1="80"
        y1="80"
        x2="144"
        y2="80"
        stroke="rgba(255,255,255,0.72)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="132"
        y1="80"
        x2="132"
        y2="94"
        stroke="rgba(255,255,255,0.72)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="144"
        y1="80"
        x2="144"
        y2="94"
        stroke="rgba(255,255,255,0.72)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MattFarrellVibePage() {
  return (
    <main className="min-h-screen bg-[#f1efe8] text-[#2c2c2a] [font-family:'DM_Sans',system-ui,sans-serif]">
      <section className="relative isolate overflow-hidden bg-[#2c2c2a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,95,165,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(239,159,39,0.12),transparent_18%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,auto,42px_42px,42px_42px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl gap-14 px-6 py-16 sm:px-10 md:px-12 md:py-20 lg:grid-cols-[minmax(0,1.15fr)_420px] lg:items-end lg:px-16 lg:py-24">
          <div className="max-w-3xl self-center">
            <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-white/[0.45] [font-family:'DM_Mono',ui-monospace,monospace]">
              Matt Farrell / Identity Signal
            </p>

            <div className="mb-8 h-px w-20 bg-[#ef9f27]" />

            <h1 className="[font-family:'Playfair_Display',serif] text-5xl font-black leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Built for pressure.
              <span className="mt-2 block font-semibold italic text-[#ef9f27]">
                Driven to win.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/[0.72] sm:text-lg">
              A one-page expression of a brand that feels less like self-promotion
              and more like a field-tested operating system: direct, strategic, and
              already looking three moves ahead.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/[0.72] [font-family:'DM_Mono',ui-monospace,monospace]">
                CEO / Defense-Tech / National Security
              </span>
              <span className="rounded-full border border-[#185FA5]/50 bg-[#185FA5]/[0.14] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#d7eaff] [font-family:'DM_Mono',ui-monospace,monospace]">
                The market&apos;s contested. The path isn&apos;t obvious.
              </span>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#ef9f27]/[0.15] blur-3xl" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#185FA5]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_32px_120px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/[0.4] [font-family:'DM_Mono',ui-monospace,monospace]">
                    Navigator&apos;s Key
                  </p>
                  <p className="mt-3 max-w-[14rem] [font-family:'Playfair_Display',serif] text-2xl font-bold leading-tight text-white">
                    Earned authority with a destination in view.
                  </p>
                </div>
                <NavigatorKeyMark />
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/[0.38] [font-family:'DM_Mono',ui-monospace,monospace]">
                  Proof, not posture
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/[0.08] bg-black/10 px-4 py-3 text-sm text-white/[0.78]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#dbe8f6]/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[#185fa5] [font-family:'DM_Mono',ui-monospace,monospace]">
              Core Essence
            </p>
            <h2 className="mt-5 [font-family:'Playfair_Display',serif] text-4xl font-bold leading-tight tracking-[-0.03em] text-[#2c2c2a] sm:text-5xl">
              The vibe is executive clarity, not borrowed bravado.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#444441] sm:text-lg">
              The identity book keeps insisting on the same idea: the setting can
              change completely, but the internal architecture stays intact. That
              makes the page feel disciplined, sparse, and load-bearing.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {proofPoints.map((point) => {
              const toneClass =
                point.tone === "blue"
                  ? "border-[#b5d4f4] bg-[#e6f1fb]"
                  : point.tone === "amber"
                    ? "border-[#fac775] bg-[#faeeda]"
                    : "border-black/[0.10] bg-white/[0.70]";

              return (
                <article
                  key={point.title}
                  className={`rounded-[1.75rem] border p-7 shadow-[0_18px_50px_rgba(44,44,42,0.08)] ${toneClass}`}
                >
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#444441] [font-family:'DM_Mono',ui-monospace,monospace]">
                    {point.label}
                  </p>
                  <h3 className="mt-4 [font-family:'Playfair_Display',serif] text-2xl font-bold leading-tight tracking-[-0.02em] text-[#2c2c2a]">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#444441]">
                    {point.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_360px]">
            <article className="rounded-[2rem] border border-black/[0.08] bg-white/80 p-7 shadow-[0_24px_60px_rgba(44,44,42,0.08)] sm:p-9">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#185fa5] [font-family:'DM_Mono',ui-monospace,monospace]">
                Story Arc
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {arc.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-medium ${
                        index === arc.length - 1
                          ? "bg-[#2c2c2a] text-white"
                          : "border border-[#b5d4f4] bg-[#e6f1fb] text-[#0c447c]"
                      }`}
                    >
                      {item}
                    </span>
                    {index < arc.length - 1 ? (
                      <span className="text-[#888780]">→</span>
                    ) : null}
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 border-l-[3px] border-[#185fa5] bg-[#f7f8f6] px-5 py-5 text-base leading-8 text-[#2c2c2a]">
                The story isn&apos;t a resume. It&apos;s a proof of concept. Every arena
                changes; the operating system never does.
              </blockquote>
            </article>

            <aside className="rounded-[2rem] bg-[#2c2c2a] p-7 text-white shadow-[0_28px_80px_rgba(44,44,42,0.18)] sm:p-9">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/[0.38] [font-family:'DM_Mono',ui-monospace,monospace]">
                Visual Rules
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-white/[0.72]">
                <li>Command Dark carries the page so the tone feels grounded and exact.</li>
                <li>Navigator Blue acts like structure, not decoration.</li>
                <li>Destination Amber appears rarely so it lands like a signal flare.</li>
                <li>Serif headlines bring gravitas while mono labels read like evidence.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.08] bg-white/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 sm:px-10 md:px-12 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-16">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#185fa5] [font-family:'DM_Mono',ui-monospace,monospace]">
              Minimal Footer / CTA
            </p>
            <h2 className="mt-4 [font-family:'Playfair_Display',serif] text-3xl font-bold leading-tight tracking-[-0.03em] text-[#2c2c2a] sm:text-4xl">
              If the terrain is contested, make the signal unmistakable.
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/mfarrelldayton/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#185fa5] px-6 py-3 text-sm font-medium text-white shadow-[0_16px_40px_rgba(24,95,165,0.28)] transition hover:bg-[#0c447c] sm:w-auto"
          >
            Open the conversation
          </a>
        </div>
      </footer>
    </main>
  );
}
