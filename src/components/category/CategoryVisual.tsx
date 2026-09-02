import type { CategoryId } from "../../data/categories";

type CategoryVisualProps = {
  categoryId: CategoryId;
  accent: string;
};

export function CategoryVisual({ categoryId, accent }: CategoryVisualProps) {
  if (categoryId === "batteries") {
    return (
      <svg viewBox="0 0 320 280" className="h-full w-full" fill="none">
        <rect x="90" y="40" width="140" height="200" rx="28" fill={accent} opacity="0.25" />
        <rect x="110" y="20" width="100" height="28" rx="8" fill={accent} />
        <rect x="108" y="58" width="104" height="164" rx="18" fill={accent} />
        <rect x="122" y="78" width="76" height="28" rx="6" fill="#fff3d6" opacity="0.9" />
        <rect x="122" y="120" width="76" height="28" rx="6" fill="#fff3d6" opacity="0.7" />
        <rect x="122" y="162" width="76" height="28" rx="6" fill="#fff3d6" opacity="0.5" />
        <circle cx="250" cy="70" r="18" fill={accent} opacity="0.5">
          <animate attributeName="r" values="14;20;14" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="180" r="12" fill={accent} opacity="0.35">
          <animate attributeName="cy" values="180;160;180" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }

  if (categoryId === "electronics") {
    return (
      <svg viewBox="0 0 320 280" className="h-full w-full" fill="none">
        <rect x="50" y="50" width="220" height="150" rx="16" fill={accent} opacity="0.2" />
        <rect x="70" y="70" width="180" height="110" rx="8" fill={accent} />
        <rect x="88" y="88" width="144" height="74" rx="4" fill="#ccfbf1" />
        <rect x="120" y="210" width="80" height="12" rx="4" fill={accent} opacity="0.7" />
        <rect x="100" y="222" width="120" height="18" rx="6" fill={accent} opacity="0.45" />
        <g stroke={accent} strokeWidth="2" opacity="0.6">
          <path d="M40 40 H90 V90">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M280 40 H230 V90">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
          </path>
          <circle cx="40" cy="40" r="4" fill={accent} />
          <circle cx="280" cy="40" r="4" fill={accent} />
        </g>
      </svg>
    );
  }

  if (categoryId === "cables") {
    return (
      <svg viewBox="0 0 320 280" className="h-full w-full" fill="none">
        <path
          d="M40 80 C100 40, 140 160, 200 120 S280 60, 300 100"
          stroke={accent}
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 160 C90 220, 150 100, 210 160 S290 200, 310 150"
          stroke={accent}
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        <rect x="20" y="68" width="36" height="24" rx="6" fill={accent} />
        <rect x="278" y="88" width="28" height="24" rx="5" fill={accent} opacity="0.85" />
        <circle cx="160" cy="200" r="8" fill={accent}>
          <animate attributeName="cx" values="140;180;140" dur="3.2s" repeatCount="indefinite" />
        </circle>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 280" className="h-full w-full" fill="none">
      <circle cx="160" cy="130" r="90" fill={accent} opacity="0.15" />
      <path
        d="M160 55 C120 55 95 90 95 130 C95 175 130 205 160 225 C190 205 225 175 225 130 C225 90 200 55 160 55 Z"
        fill={accent}
        opacity="0.85"
      />
      <path
        d="M130 130 L150 150 L195 105"
        stroke="#f3f6f2"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="70" cy="70" r="10" fill={accent} opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="200" r="14" fill={accent} opacity="0.35">
        <animate attributeName="r" values="10;16;10" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
