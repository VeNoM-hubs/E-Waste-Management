import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
} from "react-leaflet";
import type { EwasteCentre } from "../../data/ewasteCentres";
import type { GeoPosition } from "../../hooks/useGeolocation";
import { formatDistance } from "../../lib/geo";
import { centreIcon, fixLeafletDefaultIcon, userLocationIcon } from "./leafletIcons";

fixLeafletDefaultIcon();

type CentresMapProps = {
  user: GeoPosition | null;
  centres: Array<EwasteCentre & { distanceKm?: number }>;
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function MapController({
  user,
  selected,
}: {
  user: GeoPosition | null;
  selected: (EwasteCentre & { distanceKm?: number }) | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (selected) {
      map.flyTo([selected.lat, selected.lng], Math.max(map.getZoom(), 14), {
        duration: 0.7,
      });
      return;
    }
    if (user) {
      map.flyTo([user.lat, user.lng], 12, { duration: 0.8 });
    }
  }, [map, user, selected]);

  return null;
}

export function CentresMap({ user, centres, selectedId, onSelect }: CentresMapProps) {
  const selected = centres.find((c) => c.id === selectedId) ?? null;
  const center: [number, number] = user
    ? [user.lat, user.lng]
    : [20.5937, 78.9629]; // India fallback

  return (
    <MapContainer
      center={center}
      zoom={user ? 12 : 5}
      className="h-full w-full rounded-none sm:rounded-2xl"
      scrollWheelZoom
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController user={user} selected={selected} />

      {user && (
        <>
          <Circle
            center={[user.lat, user.lng]}
            radius={Math.max(user.accuracy, 40)}
            pathOptions={{
              color: "#0f3d2e",
              fillColor: "#b8f255",
              fillOpacity: 0.18,
              weight: 1,
            }}
          />
          <Marker position={[user.lat, user.lng]} icon={userLocationIcon}>
            <Popup>
              <strong>You are here</strong>
              <br />
              Accuracy ±{Math.round(user.accuracy)} m
            </Popup>
          </Marker>
        </>
      )}

      {centres.map((centre) => (
        <Marker
          key={centre.id}
          position={[centre.lat, centre.lng]}
          icon={centreIcon}
          eventHandlers={{
            click: () => onSelect(centre.id),
          }}
        >
          <Popup>
            <div className="min-w-[160px]">
              <strong>{centre.name}</strong>
              <br />
              <span>{centre.address}</span>
              {centre.distanceKm != null && (
                <>
                  <br />
                  <span>{formatDistance(centre.distanceKm)} away</span>
                </>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
