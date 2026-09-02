import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { flowSteps } from "../../data/categories";

export function SegregationFlow() {
  const [step, setStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % flowSteps.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [autoplay]);

  return (
    <section className="border-y border-line bg-white/60">
      <div className="mx-auto max-w-5xl px-4 py-10 safe-px sm:px-6 sm:py-14">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          How your smart dustbin works
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
          Follow the path from drop-off to recycling. Tap a step or let it play.
        </p>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[1fr_1.1fr]">
          <ol className="space-y-2">
            {flowSteps.map((item, i) => {
              const active = i === step;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => {
                      setAutoplay(false);
                      setStep(i);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors"
                    style={{
                      backgroundColor: active ? "var(--color-forest)" : "transparent",
                      color: active ? "var(--color-canvas)" : "var(--color-ink)",
                    }}
                  >
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold"
                      style={{
                        backgroundColor: active ? "var(--color-lime)" : "var(--color-line)",
                        color: "var(--color-ink)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="flex-1 font-semibold">{item.title}</span>
                    {active && <ChevronRight className="size-4 text-lime" />}
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="relative min-h-48 overflow-hidden rounded-3xl bg-forest p-6 text-canvas sm:p-8">
            <div className="circuit-overlay absolute inset-0 opacity-40" style={{ ["--accent" as string]: "var(--color-lime)" }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                  Step {step + 1} of {flowSteps.length}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                  {flowSteps[step].title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-canvas/75 sm:text-lg">
                  {flowSteps[step].detail}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="relative mt-8 flex gap-1.5">
              {flowSteps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to step ${i + 1}`}
                  onClick={() => {
                    setAutoplay(false);
                    setStep(i);
                  }}
                  className="h-1.5 flex-1 rounded-full transition-colors"
                  style={{
                    backgroundColor: i === step ? "var(--color-lime)" : "rgba(243,246,242,0.25)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
