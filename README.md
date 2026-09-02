# EcoSort — E-Waste Segregation Guides

Mobile-first React app for a smart e-waste dustbin. Each compartment has a QR code that opens a plain-language guide for that category.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## QR code routes

Point each dustbin QR at these paths (use your deployed host in production):

| Bin | Path |
|-----|------|
| Batteries | `/batteries` |
| Electronic Devices & Components | `/electronics` |
| Cables & Wires | `/cables` |
| Other / Miscellaneous | `/other` |

Home hub (how the smart dustbin works): `/`

## Stack

- Vite + React + TypeScript
- React Router
- Tailwind CSS
- Framer Motion
- lucide-react

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
