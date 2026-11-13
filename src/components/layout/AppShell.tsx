import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
  accent?: string;
  hideFooter?: boolean;
};

export function AppShell({
  children,
  accent = "var(--color-lime)",
  hideFooter = false,
}: AppShellProps) {
  return (
    <div className="mesh-bg min-h-dvh" style={{ ["--accent" as string]: accent }}>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 safe-px sm:px-6">
          <Link to="/" className="group flex items-baseline gap-2">
            <span className="font-display text-xl font-extrabold tracking-tight text-forest sm:text-2xl">
              EcoSort
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-muted sm:inline">
              E-Waste
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-sm font-medium text-muted sm:gap-3">
            <Link
              to="/"
              className="rounded-md px-2 py-1 transition-colors hover:bg-forest/5 hover:text-forest"
            >
              Home
            </Link>
            <Link
              to="/#bins"
              className="rounded-md px-2 py-1 transition-colors hover:bg-forest/5 hover:text-forest"
            >
              Bins
            </Link>
            <Link
              to="/centres"
              className="rounded-md px-2 py-1 transition-colors hover:bg-forest/5 hover:text-forest"
            >
              Centres
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      {!hideFooter && (
        <footer className="mt-16 border-t border-line bg-forest-deep text-canvas">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6">
            <div>
              <p className="font-display text-2xl font-bold text-lime">EcoSort</p>
              <p className="mt-1 max-w-sm text-sm text-canvas/70">
                Scan a dustbin QR to learn where each piece of e-waste belongs.
              </p>
            </div>
            <p className="text-xs text-canvas/50">Segregate · Recover · Recycle</p>
          </div>
        </footer>
      )}
    </div>
  );
}
