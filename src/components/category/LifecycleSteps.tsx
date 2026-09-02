import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { Category } from "../../data/categories";

type LifecycleStepsProps = {
  category: Category;
};

export function LifecycleSteps({ category }: LifecycleStepsProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
        What happens after collection?
      </h2>
      <p className="mt-2 max-w-xl text-muted">
        From your bin to proper recycling.
      </p>

      <ol className="mt-10 max-w-2xl">
        {category.after.map((step, i) => (
          <li key={step} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="flex gap-4 rounded-2xl px-4 py-5 sm:px-5"
              style={{ backgroundColor: i % 2 === 0 ? category.accent.accentSoft : "transparent" }}
            >
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                style={{ backgroundColor: category.accent.accentDeep }}
              >
                {i + 1}
              </span>
              <p className="pt-2 text-base leading-relaxed text-ink sm:text-lg">{step}</p>
            </motion.div>
            {i < category.after.length - 1 && (
              <div className="flex justify-center py-1 text-muted/50" aria-hidden>
                <ArrowDown className="size-4" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
