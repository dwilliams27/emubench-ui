interface MoneyOnFireProps {
  cost: string;
  intensity: 'low' | 'medium' | 'high';
}

export function MoneyOnFire({ cost, intensity }: MoneyOnFireProps) {
  return (
    <div className="relative">
      <svg
        width="90"
        height="45"
        viewBox="0 0 90 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* Bill background */}
          <rect
            x="0"
            y="0"
            width="90"
            height="45"
            rx="4"
            fill="#86efac"
            stroke="#4ade80"
            strokeWidth="2"
          />

          {/* Decorative border */}
          <rect
            x="5"
            y="5"
            width="80"
            height="35"
            rx="2"
            fill="none"
            stroke="#4ade80"
            strokeWidth="1"
            strokeDasharray="3,2"
          />

          {/* Corner decorations */}
          <circle cx="12" cy="12" r="4" fill="#4ade80" />
          <circle cx="78" cy="12" r="4" fill="#4ade80" />
          <circle cx="12" cy="33" r="4" fill="#4ade80" />
          <circle cx="78" cy="33" r="4" fill="#4ade80" />

          {/* Cost text */}
          <text
            x="45"
            y="23"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#166534"
            fontFamily="monospace"
            fontWeight="bold"
            fontSize="16"
          >
            {cost}
          </text>
        </g>
      </svg>
    </div>
  );
}
