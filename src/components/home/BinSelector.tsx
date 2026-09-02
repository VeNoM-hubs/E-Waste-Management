import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../../data/categories";

export function BinSelector() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 safe-px sm:px-6 sm:py-14">
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
        Four compartments
      </h2>
      <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
        Each dustbin has a QR code. Open a category to learn what belongs there.
      </p>

      <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <Link
              to={cat.slug}
              className="group flex h-full min-h-[7.5rem] flex-col justify-between rounded-2xl border border-transparent p-5 transition-transform active:scale-[0.99] sm:rounded-3xl sm:p-7"
              style={{ backgroundColor: cat.accent.accentSoft }}
            >
              <div>
                <span className="text-3xl" aria-hidden>
                  {cat.emoji}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">
                  {cat.shortTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {cat.tagline}
                </p>
              </div>
              <span
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold"
                style={{ color: cat.accent.accentDeep }}
              >
                Open guide
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
