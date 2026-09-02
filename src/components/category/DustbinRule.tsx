import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Category } from "../../data/categories";
import { categories } from "../../data/categories";

type DustbinRuleProps = {
  category: Category;
};

export function DustbinRule({ category }: DustbinRuleProps) {
  const others = categories.filter((c) => c.id !== category.id);

  return (
    <section className="sticky bottom-0 z-30 border-t border-line bg-forest-deep/95 text-canvas backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 py-3 safe-px safe-bottom sm:px-6 sm:py-5">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-base font-bold leading-snug text-lime sm:text-xl"
        >
          {category.rule}
        </motion.p>
        <div className="mt-2.5 flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-3 sm:flex-wrap [&::-webkit-scrollbar]:hidden">
          {others.map((c) => (
            <Link
              key={c.id}
              to={c.slug}
              className="shrink-0 rounded-full border border-canvas/20 px-3 py-2 text-xs font-medium text-canvas/75 transition-colors hover:border-lime/50 hover:text-lime"
            >
              {c.emoji} {c.shortTitle}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
