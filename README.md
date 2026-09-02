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

## Deploy (Vercel)

This is a client-side React Router app. [`vercel.json`](vercel.json) rewrites all paths to `index.html` so QR links like `/batteries` work on refresh and direct open.

After pushing this file, redeploy on Vercel (or wait for the automatic deploy from git).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production build
