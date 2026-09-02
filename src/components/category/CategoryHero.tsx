import { motion } from "framer-motion";
import type { Category } from "../../data/categories";
import { CategoryVisual } from "./CategoryVisual";

type CategoryHeroProps = {
  category: Category;
};

export function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-line"
      style={{ ["--accent" as string]: category.accent.accent }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${category.accent.accentSoft} 0%, var(--color-canvas) 55%, color-mix(in oklab, ${category.accent.accent} 18%, var(--color-canvas)) 100%)`,
        }}
      />
      <div className="circuit-overlay absolute inset-0 opacity-75 sm:opacity-60" />

      <div className="relative mx-auto grid min-h-[70dvh] max-w-5xl items-center gap-6 px-4 py-10 safe-px sm:min-h-[78dvh] sm:grid-cols-[1.1fr_0.9fr] sm:gap-8 sm:px-6 sm:py-16">
        <div className="order-2 sm:order-1">
          <motion.p
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.25rem,10vw,3.75rem)] font-extrabold leading-none text-forest"
          >
            EcoSort
          </motion.p>
          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]"
            style={{ color: category.accent.accentDeep }}
          >
            {category.emoji} {category.shortTitle} bin
          </motion.p>
          <motion.h1
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 max-w-xl text-balance font-display text-[clamp(1.5rem,6vw,2.25rem)] font-bold leading-[1.1] text-ink sm:mt-4"
          >
            {category.title}
          </motion.h1>
          <motion.p
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-md text-base leading-relaxed text-muted sm:mt-5 sm:text-lg"
          >
            {category.tagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ scale: 0.94, y: 12 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 h-44 w-full sm:order-2 sm:h-72 md:h-80"
          aria-hidden
        >
          <CategoryVisual categoryId={category.id} accent={category.accent.accent} />
        </motion.div>
      </div>
    </section>
  );
}
