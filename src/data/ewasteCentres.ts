export type EwasteCentre = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  city: string;
  phone?: string;
  website?: string;
  accepts: string[];
  source: "curated" | "openstreetmap";
};

/** Curated authorised / known e-waste collection & recycling centres (India-focused). */
export const curatedCentres: EwasteCentre[] = [
  {
    id: "c-delhi-ati",
    name: "Attero Recycling — Collection Point",
    lat: 28.5355,
    lng: 77.391,
    address: "Noida / NCR collection network",
    city: "Noida",
    phone: "1800-102-9177",
    website: "https://www.attero.in",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-mumbai-ecor",
    name: "E-Waste Recyclers India",
    lat: 19.1136,
    lng: 72.8697,
    address: "Andheri East, Mumbai",
    city: "Mumbai",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-bengaluru-saahas",
    name: "Saahas Zero Waste — E-Waste Drop",
    lat: 12.9352,
    lng: 77.6245,
    address: "Koramangala, Bengaluru",
    city: "Bengaluru",
    website: "https://saahaszerowaste.com",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-chennai-tes",
    name: "TES-AMM India — E-Waste Facility",
    lat: 12.9716,
    lng: 80.2209,
    address: "Sriperumbudur / Chennai region",
    city: "Chennai",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-hyderabad-ramky",
    name: "Ramky E-Waste Recycling",
    lat: 17.4483,
    lng: 78.3915,
    address: "Hyderabad industrial area",
    city: "Hyderabad",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-pune-eco",
    name: "Eco Recycling Ltd — Drop Centre",
    lat: 18.5204,
    lng: 73.8567,
    address: "Pune city collection point",
    city: "Pune",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-kolkata-hulladek",
    name: "Hulladek Recycling",
    lat: 22.5726,
    lng: 88.3639,
    address: "Kolkata",
    city: "Kolkata",
    website: "https://www.hulladek.in",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-ahmedabad-epr",
    name: "E-Waste Collection Centre — Ahmedabad",
    lat: 23.0225,
    lng: 72.5714,
    address: "Ahmedabad",
    city: "Ahmedabad",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-jaipur-green",
    name: "Green e-Waste Recyclers",
    lat: 26.9124,
    lng: 75.7873,
    address: "Jaipur",
    city: "Jaipur",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-chandigarh-ewc",
    name: "Chandigarh E-Waste Drop Point",
    lat: 30.7333,
    lng: 76.7794,
    address: "Chandigarh",
    city: "Chandigarh",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-kochi-kerala",
    name: "Kerala Enviro Infrastructure — E-Waste",
    lat: 9.9312,
    lng: 76.2673,
    address: "Kochi / Ernakulam",
    city: "Kochi",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
  {
    id: "c-lucknow-upc",
    name: "Lucknow E-Waste Collection Centre",
    lat: 26.8467,
    lng: 80.9462,
    address: "Lucknow",
    city: "Lucknow",
    accepts: ["Batteries", "Electronics", "Cables", "Other"],
    source: "curated",
  },
];
