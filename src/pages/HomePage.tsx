import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import { AppShell } from "../components/layout/AppShell";
import { SegregationFlow } from "../components/home/SegregationFlow";
import { BinSelector } from "../components/home/BinSelector";

export function HomePage() {
  return (
    <AppShell>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-soft/80 via-canvas to-forest/10" />
        <div className="circuit-overlay absolute inset-0 opacity-70 sm:opacity-50" />

        <div className="relative mx-auto flex min-h-[72dvh] max-w-5xl flex-col justify-center px-4 py-12 safe-px sm:min-h-[80dvh] sm:px-6 sm:py-20">
          <motion.p
            initial={{ y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,12vw,6rem)] font-extrabold leading-none text-forest"
          >
            EcoSort
          </motion.p>
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-balance font-display text-[clamp(1.35rem,5.5vw,2.25rem)] font-bold leading-tight text-ink sm:mt-6"
          >
            E-waste segregation made simple
          </motion.h1>
          <motion.p
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:mt-5 sm:text-lg"
          >
            Four bins. Four QR codes. Scan any compartment to learn what goes
            where — in plain language.
          </motion.p>
          <motion.div
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap"
          >
            <a
              href="#bins"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-bold text-lime transition-transform active:scale-[0.98]"
            >
              See the four bins
            </a>
            <Link
              to="/batteries"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest/20 bg-white/70 px-6 py-3 text-sm font-bold text-forest backdrop-blur-sm transition-colors hover:border-forest/40"
            >
              <QrCode className="size-4" />
              Sample QR page
            </Link>
          </motion.div>
        </div>
      </section>

      <SegregationFlow />

      <div id="bins">
        <BinSelector />
      </div>

      <section className="mx-auto max-w-5xl px-4 pb-16 safe-px sm:px-6">
        <div className="rounded-2xl bg-forest px-5 py-7 text-canvas sm:rounded-3xl sm:px-10 sm:py-10">
          <p className="font-display text-xl font-bold text-lime sm:text-2xl">
            Scan the QR on any bin
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-canvas/70 sm:text-base">
            Point your phone camera at the code on the dustbin. Each code opens
            the matching guide — Batteries, Electronics, Cables, or Other —
            so segregation stays easy on site.
          </p>
        </div>
      </section>
    </AppShell>
  );
}
