import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import type { Category, CategoryExample } from "../../data/categories";

type ExampleChipsProps = {
  category: Category;
};

export function ExampleChips({ category }: ExampleChipsProps) {
  const [selected, setSelected] = useState<CategoryExample | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selected || !previewRef.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    previewRef.current.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
    });
  }, [selected]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 safe-px sm:px-6 sm:py-14">
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Examples</h2>
      <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
        Tap an item to see a photo and confirm it belongs here.
      </p>

      <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
        {category.examples.map((example, i) => {
          const isOn = selected?.label === example.label;
          return (
            <motion.button
              key={example.label}
              type="button"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.03, duration: 0.35 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(isOn ? null : example)}
              className="min-h-11 rounded-full border px-3.5 py-2.5 text-left text-sm font-medium transition-colors sm:min-h-0 sm:px-4"
              style={
                isOn
                  ? {
                      backgroundColor: category.accent.accent,
                      borderColor: category.accent.accentDeep,
                      color: "#14201a",
                    }
                  : {
                      backgroundColor: category.accent.accentSoft,
                      borderColor: "transparent",
                      color: "var(--color-ink)",
                    }
              }
            >
              {example.label}
            </motion.button>
          );
        })}
      </div>

      <div ref={previewRef} className="mt-6 min-h-0 sm:mt-8">
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_40px_-24px_rgba(20,32,26,0.45)]"
            >
              <div className="relative aspect-[4/3] w-full bg-line/40 sm:aspect-[16/10]">
                <img
                  src={selected.image}
                  alt={selected.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="flex items-start gap-3 px-4 py-4 sm:px-5 sm:py-5"
                style={{ backgroundColor: category.accent.accentSoft }}
              >
                <span
                  className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full text-ink"
                  style={{ backgroundColor: category.accent.accent }}
                  aria-hidden
                >
                  <Check className="size-4" strokeWidth={2.75} />
                </span>
                <p
                  className="text-sm font-semibold leading-snug sm:text-base"
                  style={{ color: category.accent.accentDeep }}
                >
                  Yes — <span className="font-bold text-ink">{selected.label}</span> goes in
                  the {category.shortTitle} compartment.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
