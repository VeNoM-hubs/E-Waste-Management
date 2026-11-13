import type { EwasteCentre } from "../data/ewasteCentres";

type OverpassElement = {
  type: string;
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: Record<string, string>;
};

type OverpassResponse = {
  elements?: OverpassElement[];
};

/** Fetch nearby recycling / e-waste related POIs from OpenStreetMap. */
export async function fetchNearbyFromOverpass(
  lat: number,
  lng: number,
  radiusMeters = 25000,
): Promise<EwasteCentre[]> {
  const query = `
[out:json][timeout:25];
(
  node["recycling:electronics"="yes"](around:${radiusMeters},${lat},${lng});
  node["recycling:batteries"="yes"](around:${radiusMeters},${lat},${lng});
  node["recycling:mobile_phones"="yes"](around:${radiusMeters},${lat},${lng});
  node["amenity"="recycling"](around:${radiusMeters},${lat},${lng});
  node["recycling_type"="centre"](around:${radiusMeters},${lat},${lng});
  way["amenity"="recycling"](around:${radiusMeters},${lat},${lng});
  way["recycling:electronics"="yes"](around:${radiusMeters},${lat},${lng});
);
out center tags 40;
`.trim();

  const res = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: `data=${encodeURIComponent(query)}`,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  if (!res.ok) throw new Error(`Overpass error ${res.status}`);

  const data = (await res.json()) as OverpassResponse;
  const seen = new Set<string>();
  const centres: EwasteCentre[] = [];

  for (const el of data.elements ?? []) {
    const elLat = el.lat ?? el.center?.lat;
    const elLng = el.lon ?? el.center?.lon;
    if (elLat == null || elLng == null) continue;

    const id = `osm-${el.type}-${el.id}`;
    if (seen.has(id)) continue;
    seen.add(id);

    const tags = el.tags ?? {};
    const name =
      tags.name ||
      tags.operator ||
      (tags["recycling:electronics"] === "yes"
        ? "Electronics recycling point"
        : "Recycling centre");

    const accepts: string[] = [];
    if (tags["recycling:batteries"] === "yes") accepts.push("Batteries");
    if (
      tags["recycling:electronics"] === "yes" ||
      tags["recycling:mobile_phones"] === "yes" ||
      tags["recycling:computers"] === "yes"
    ) {
      accepts.push("Electronics");
    }
    if (tags["recycling:electrical_items"] === "yes") accepts.push("Cables");
    if (accepts.length === 0) accepts.push("Other");

    centres.push({
      id,
      name,
      lat: elLat,
      lng: elLng,
      address: [tags["addr:street"], tags["addr:city"]].filter(Boolean).join(", ") ||
        tags["addr:full"] ||
        "Address not listed on OpenStreetMap",
      city: tags["addr:city"] || tags["addr:town"] || "Nearby",
      phone: tags.phone || tags["contact:phone"],
      website: tags.website || tags["contact:website"],
      accepts,
      source: "openstreetmap",
    });
  }

  return centres;
}
