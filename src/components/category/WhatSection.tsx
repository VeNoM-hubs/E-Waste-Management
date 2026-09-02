import { motion } from "framer-motion";
import type { Category } from "../../data/categories";

type WhatSectionProps = {
  category: Category;
};

export function WhatSection({ category }: WhatSectionProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 safe-px sm:px-6 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">What are they?</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:mt-4 sm:text-xl">
          {category.what}
        </p>
      </motion.div>
    </section>
  );
}
