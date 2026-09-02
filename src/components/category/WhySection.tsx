import { motion } from "framer-motion";
import type { Category } from "../../data/categories";

type WhySectionProps = {
  category: Category;
};

export function WhySection({ category }: WhySectionProps) {
  return (
    <section className="border-y border-line bg-white/50">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Why should they be separated?
        </h2>
        <p className="mt-2 max-w-xl text-muted">
          Plain reasons — no jargon needed.
        </p>

        <ul className="mt-10 space-y-4">
          {category.why.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex gap-4"
            >
              <span
                className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-ink"
                style={{ backgroundColor: category.accent.accent }}
              >
                {i + 1}
              </span>
              <p className="pt-1 text-base leading-relaxed text-ink/90 sm:text-lg">{point}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
