import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/** Fix default marker icons when bundling with Vite. */
export function fixLeafletDefaultIcon() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });
}

export const userLocationIcon = L.divIcon({
  className: "ecosort-user-marker",
  html: `<span class="ecosort-user-dot"></span>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

export const centreIcon = L.divIcon({
  className: "ecosort-centre-marker",
  html: `<span class="ecosort-centre-pin"></span>`,
  iconSize: [28, 36],
  iconAnchor: [14, 34],
  popupAnchor: [0, -28],
});
