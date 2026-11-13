import { useEffect, useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { AppShell } from "../components/layout/AppShell";
import { LocationPrompt } from "../components/map/LocationPrompt";
import { CentresMap } from "../components/map/CentresMap";
import { CentresList } from "../components/map/CentresList";
import { curatedCentres, type EwasteCentre } from "../data/ewasteCentres";
import { useGeolocation } from "../hooks/useGeolocation";
import { distanceKm } from "../lib/geo";
import { fetchNearbyFromOverpass } from "../lib/overpass";

type RankedCentre = EwasteCentre & { distanceKm?: number };

export function CentresPage() {
  const { position, status, errorMessage, requestLocation } = useGeolocation({
    requestOnMount: true,
    enableHighAccuracy: true,
  });
  const [osmCentres, setOsmCentres] = useState<EwasteCentre[]>([]);
  const [loadingOsm, setLoadingOsm] = useState(false);
  const [osmError, setOsmError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (!position) return;

    let cancelled = false;
    setLoadingOsm(true);
    setOsmError(null);

    fetchNearbyFromOverpass(position.lat, position.lng, 30000)
      .then((centres) => {
        if (!cancelled) setOsmCentres(centres);
      })
      .catch(() => {
        if (!cancelled) {
          setOsmError(
            "Live map data unavailable right now — showing curated centres instead.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingOsm(false);
      });

    return () => {
      cancelled = true;
    };
  }, [position?.lat, position?.lng]);

  const ranked: RankedCentre[] = useMemo(() => {
    const merged = new Map<string, EwasteCentre>();
    for (const c of curatedCentres) merged.set(c.id, c);
    for (const c of osmCentres) merged.set(c.id, c);

    const list = Array.from(merged.values()).map((c) => ({
      ...c,
      distanceKm: position
        ? distanceKm(position, { lat: c.lat, lng: c.lng })
        : undefined,
    }));

    list.sort((a, b) => {
      if (a.distanceKm == null && b.distanceKm == null) return a.name.localeCompare(b.name);
      if (a.distanceKm == null) return 1;
      if (b.distanceKm == null) return -1;
      return a.distanceKm - b.distanceKm;
    });

    // With GPS: keep nearest ~25. Without: show curated list.
    if (position) return list.filter((c) => (c.distanceKm ?? 999) <= 80).slice(0, 25);
    return list.filter((c) => c.source === "curated");
  }, [osmCentres, position]);

  return (
    <AppShell hideFooter>
      <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col">
        <LocationPrompt
          status={status}
          errorMessage={errorMessage}
          onRequest={requestLocation}
        />

        {(loadingOsm || osmError) && (
          <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-2 text-xs text-muted sm:px-5">
            {loadingOsm && (
              <>
                <Loader2 className="size-3.5 animate-spin" />
                Searching OpenStreetMap for recycling points near you…
              </>
            )}
            {!loadingOsm && osmError}
          </div>
        )}

        <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(280px,380px)_1fr]">
          <aside className="flex max-h-[42dvh] flex-col border-b border-line bg-white/90 lg:max-h-none lg:border-b-0 lg:border-r">
            <div className="border-b border-line px-4 py-3">
              <p className="font-display text-sm font-bold text-ink">
                Nearby centres
                <span className="ml-2 font-body text-xs font-medium text-muted">
                  {ranked.length} shown
                </span>
              </p>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <CentresList
                centres={ranked}
                selectedId={selectedId}
                onSelect={setSelectedId}
                loadingOsm={loadingOsm}
              />
            </div>
          </aside>

          <section className="relative min-h-[48dvh] flex-1 lg:min-h-0">
            <CentresMap
              user={position}
              centres={ranked}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </section>
        </div>
      </div>
    </AppShell>
  );
}
