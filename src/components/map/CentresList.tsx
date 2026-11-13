import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";
import type { EwasteCentre } from "../../data/ewasteCentres";
import { formatDistance } from "../../lib/geo";

type CentresListProps = {
  centres: Array<EwasteCentre & { distanceKm?: number }>;
  selectedId: string | null;
  onSelect: (id: string) => void;
  loadingOsm: boolean;
};

export function CentresList({
  centres,
  selectedId,
  onSelect,
  loadingOsm,
}: CentresListProps) {
  if (centres.length === 0 && !loadingOsm) {
    return (
      <p className="px-4 py-8 text-sm text-muted">
        No centres found nearby yet. Try enabling GPS or widen your search by
        moving the map after location is granted.
      </p>
    );
  }

  return (
    <ul className="divide-y divide-line">
      {centres.map((centre) => {
        const active = centre.id === selectedId;
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${centre.lat},${centre.lng}`;

        return (
          <li key={centre.id}>
            <button
              type="button"
              onClick={() => onSelect(centre.id)}
              className="w-full px-4 py-4 text-left transition-colors"
              style={{
                backgroundColor: active
                  ? "color-mix(in oklab, var(--color-lime) 28%, white)"
                  : "transparent",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-base font-bold text-ink">
                    {centre.name}
                  </p>
                  <p className="mt-1 flex items-start gap-1.5 text-sm text-muted">
                    <MapPin className="mt-0.5 size-3.5 shrink-0" />
                    <span>
                      {centre.address}
                      {centre.city ? ` · ${centre.city}` : ""}
                    </span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {centre.accepts.map((a) => (
                      <span
                        key={a}
                        className="rounded-full bg-forest/8 px-2 py-0.5 text-[11px] font-semibold text-forest"
                      >
                        {a}
                      </span>
                    ))}
                    {centre.source === "openstreetmap" && (
                      <span className="rounded-full bg-line px-2 py-0.5 text-[11px] font-medium text-muted">
                        OSM
                      </span>
                    )}
                  </div>
                </div>
                {centre.distanceKm != null && (
                  <span className="shrink-0 rounded-full bg-forest px-2.5 py-1 text-xs font-bold text-lime">
                    {formatDistance(centre.distanceKm)}
                  </span>
                )}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded-full border border-forest/20 px-3 py-1.5 text-xs font-bold text-forest"
                >
                  <Navigation className="size-3.5" />
                  Directions
                </a>
                {centre.phone && (
                  <a
                    href={`tel:${centre.phone}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 rounded-full border border-forest/20 px-3 py-1.5 text-xs font-bold text-forest"
                  >
                    <Phone className="size-3.5" />
                    Call
                  </a>
                )}
                {centre.website && (
                  <a
                    href={centre.website}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 rounded-full border border-forest/20 px-3 py-1.5 text-xs font-bold text-forest"
                  >
                    <ExternalLink className="size-3.5" />
                    Website
                  </a>
                )}
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
