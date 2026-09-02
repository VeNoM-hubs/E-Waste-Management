export type CategoryId = "batteries" | "electronics" | "cables" | "other";

export type CategoryAccent = {
  name: CategoryId;
  accent: string;
  accentDeep: string;
  accentSoft: string;
  cssVar: string;
};

export type CategoryExample = {
  label: string;
  image: string;
};

export type Category = {
  id: CategoryId;
  slug: `/${CategoryId}`;
  title: string;
  shortTitle: string;
  emoji: string;
  tagline: string;
  what: string;
  examples: CategoryExample[];
  why: string[];
  after: string[];
  rule: string;
  accent: CategoryAccent;
};

export const categories: Category[] = [
  {
    id: "batteries",
    slug: "/batteries",
    title: "Batteries",
    shortTitle: "Batteries",
    emoji: "🔋",
    tagline: "If it stores electricity, put it in the Battery compartment.",
    what: "Batteries are devices that store electrical energy and provide power to electronic devices.",
    examples: [
      { label: "AA and AAA batteries", image: "/examples/batteries/aa-aaa.jpg" },
      { label: "Mobile phone batteries", image: "/examples/batteries/phone-battery.jpg" },
      { label: "Laptop batteries", image: "/examples/batteries/laptop-battery.jpg" },
      { label: "Power-bank batteries", image: "/examples/batteries/powerbank.jpg" },
      { label: "Button / coin cells", image: "/examples/batteries/coin-cell.jpg" },
      { label: "Rechargeable batteries", image: "/examples/batteries/rechargeable.jpg" },
      { label: "Wireless earphone batteries", image: "/examples/batteries/earphone-battery.jpg" },
      { label: "Batteries from other gadgets", image: "/examples/batteries/gadget-battery.jpg" },
    ],
    why: [
      "Batteries can contain chemicals and metals such as lithium, nickel, cobalt, and lead.",
      "Thrown into regular waste, they can be damaged, leak chemicals, or catch fire — especially lithium-ion packs.",
      "They also hold materials that can be recovered and recycled when collected separately.",
    ],
    after: [
      "Collected batteries go to specialized recycling or treatment facilities.",
      "They are safely processed so useful materials can be recovered.",
      "Hazardous substances are handled under controlled conditions.",
    ],
    rule: "If it stores electricity, put it in the Battery compartment.",
    accent: {
      name: "batteries",
      accent: "#e8a317",
      accentDeep: "#b8740a",
      accentSoft: "#fff3d6",
      cssVar: "var(--color-battery)",
    },
  },
  {
    id: "electronics",
    slug: "/electronics",
    title: "Electronic Devices & Components",
    shortTitle: "Electronics",
    emoji: "💻",
    tagline: "If it is an electronic device or electronic component, put it here.",
    what: "This category covers electronic products and their internal parts that use electricity to perform a function.",
    examples: [
      { label: "Mobile phones", image: "/examples/electronics/phone.jpg" },
      { label: "Keyboards and mice", image: "/examples/electronics/keyboard-mouse.jpg" },
      { label: "Calculators", image: "/examples/electronics/calculator.jpg" },
      { label: "Circuit boards (PCBs)", image: "/examples/electronics/pcb.jpg" },
      { label: "RAM and computer components", image: "/examples/electronics/ram.jpg" },
      { label: "Routers", image: "/examples/electronics/router.jpg" },
      { label: "Remote controls", image: "/examples/electronics/remote.jpg" },
      { label: "Cameras", image: "/examples/electronics/camera.jpg" },
      { label: "Old electronic toys", image: "/examples/electronics/toys.jpg" },
      { label: "Small electronic devices", image: "/examples/electronics/small-device.jpg" },
    ],
    why: [
      "Devices mix copper, aluminium, iron, plastics, glass, and sometimes precious metals.",
      "Circuit boards can contain gold, silver, and copper that proper recycling can recover.",
      "Some components also hold hazardous substances — they should not go in household garbage.",
    ],
    after: [
      "Equipment is usually dismantled.",
      "Materials and components are separated for recycling or recovery.",
      "Working parts may be reused or refurbished.",
    ],
    rule: "If it is an electronic device or electronic component, put it here.",
    accent: {
      name: "electronics",
      accent: "#0d9488",
      accentDeep: "#0f766e",
      accentSoft: "#ccfbf1",
      cssVar: "var(--color-electronics)",
    },
  },
  {
    id: "cables",
    slug: "/cables",
    title: "Cables & Wires",
    shortTitle: "Cables",
    emoji: "🔌",
    tagline:
      "If its main job is to carry electricity or connect two electronic devices, put it in the Cable & Wire compartment.",
    what: "This category includes wires and cables whose primary purpose is to carry electricity or electrical signals between devices.",
    examples: [
      { label: "USB cables", image: "/examples/cables/usb.jpg" },
      { label: "Mobile chargers", image: "/examples/cables/mobile-charger.jpg" },
      { label: "Laptop chargers", image: "/examples/cables/laptop-charger.jpg" },
      { label: "Power cords", image: "/examples/cables/power-cord.jpg" },
      { label: "HDMI cables", image: "/examples/cables/hdmi.jpg" },
      { label: "Ethernet cables", image: "/examples/cables/ethernet.jpg" },
      { label: "Earphone wires", image: "/examples/cables/earphone-wire.jpg" },
      { label: "Electrical wires", image: "/examples/cables/electrical-wire.jpg" },
      { label: "Extension cables", image: "/examples/cables/extension.jpg" },
      { label: "Computer cables", image: "/examples/cables/computer-cable.jpg" },
    ],
    why: [
      "Most cables have a metal conductor wrapped in plastic or rubber insulation.",
      "Copper or aluminium inside can be recovered and reused when cables are sorted out.",
      "Mixed into general waste, valuable metals are lost and insulation may be disposed of improperly.",
    ],
    after: [
      "Cables are mechanically processed to separate metal from insulation.",
      "Recovered copper or aluminium becomes raw material for new products.",
      "Insulation is handled according to local recycling streams.",
    ],
    rule: "If its main job is to carry electricity or connect devices, put it here.",
    accent: {
      name: "cables",
      accent: "#c45c26",
      accentDeep: "#9a3f14",
      accentSoft: "#ffe8d9",
      cssVar: "var(--color-cables)",
    },
  },
  {
    id: "other",
    slug: "/other",
    title: "Other / Miscellaneous E-Waste",
    shortTitle: "Other",
    emoji: "♻️",
    tagline:
      "If it's electronic waste but doesn't fit into Batteries, Electronics, or Cables, put it here.",
    what: "A catch-all for small electrical or electronic waste that does not clearly belong in the first three categories.",
    examples: [
      { label: "Adapters", image: "/examples/other/adapter.jpg" },
      { label: "Broken electronic housings", image: "/examples/other/housing.jpg" },
      { label: "Small electronic accessories", image: "/examples/other/accessories.jpg" },
      { label: "Miscellaneous electronic parts", image: "/examples/other/parts.jpg" },
      { label: "Damaged electronic toys", image: "/examples/other/damaged-toys.jpg" },
      { label: "Small appliance components", image: "/examples/other/appliance.jpg" },
    ],
    why: [
      "Real-world e-waste is extremely diverse — a bin for every product type is not practical.",
      "An Other compartment stops people from tossing e-waste in ordinary garbage out of confusion.",
      "Items collected here can later be sorted by hand or at a recycling facility.",
    ],
    after: [
      "Waste is reviewed and sorted into the right material streams.",
      "Items that belong in another category are reassigned when possible.",
      "Everything is routed toward appropriate recycling or recovery.",
    ],
    rule: "If it's e-waste but doesn't fit Batteries, Electronics, or Cables, put it here.",
    accent: {
      name: "other",
      accent: "#475569",
      accentDeep: "#334155",
      accentSoft: "#e2e8f0",
      cssVar: "var(--color-other)",
    },
  },
];

export function getCategory(id: CategoryId): Category {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown category: ${id}`);
  return category;
}

export const flowSteps = [
  {
    title: "Bring e-waste",
    detail: "Someone arrives with an electronic item to dispose of.",
  },
  {
    title: "Smart dustbin identifies",
    detail: "The unit helps identify what kind of item it is.",
  },
  {
    title: "Classified into 1 of 4",
    detail: "Battery, Electronics, Cable/Wire, or Other E-Waste.",
  },
  {
    title: "Correct compartment opens",
    detail: "Only the matching bin opens for drop-off.",
  },
  {
    title: "Collected separately",
    detail: "Waste stays sorted instead of mixed.",
  },
  {
    title: "Sent for recycling",
    detail: "Each stream goes to the right recovery process.",
  },
] as const;
