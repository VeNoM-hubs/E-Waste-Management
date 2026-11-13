import { LocateFixed, Loader2, ShieldAlert } from "lucide-react";
import type { GeoStatus } from "../../hooks/useGeolocation";

type LocationPromptProps = {
  status: GeoStatus;
  errorMessage: string | null;
  onRequest: () => void;
};

export function LocationPrompt({
  status,
  errorMessage,
  onRequest,
}: LocationPromptProps) {
  const busy = status === "prompting";

  return (
    <div className="border-b border-line bg-white/80 px-4 py-4 sm:px-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="font-display text-lg font-bold text-ink">
            Find centres near you
          </p>
          <p className="mt-1 text-sm text-muted">
            {status === "granted"
              ? "GPS is on — centres are sorted by distance from your device."
              : "Allow location access so we can show the closest e-waste management centres."}
          </p>
          {errorMessage && (
            <p className="mt-2 flex items-start gap-1.5 text-sm text-cables-deep">
              <ShieldAlert className="mt-0.5 size-4 shrink-0" />
              {errorMessage}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onRequest}
          disabled={busy}
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-bold text-lime transition-transform active:scale-[0.98] disabled:opacity-70"
        >
          {busy ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <LocateFixed className="size-4" />
          )}
          {busy
            ? "Getting GPS…"
            : status === "granted"
              ? "Refresh location"
              : "Allow GPS access"}
        </button>
      </div>
    </div>
  );
}
