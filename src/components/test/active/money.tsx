interface MoneyCostProps {
  cost: string;
}

export function Money({ cost }: MoneyCostProps) {
  return (
    <div className="relative">
      <svg
        width="100"
        height="48"
        viewBox="0 0 100 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        {/* Bill background */}
        <rect
          x="1"
          y="1"
          width="98"
          height="46"
          rx="4"
          className="fill-secondary/50 stroke-primary/60"
          strokeWidth="1.5"
        />

        {/* Inner decorative border */}
        <rect
          x="6"
          y="6"
          width="88"
          height="36"
          rx="2"
          className="fill-none stroke-primary/25"
          strokeWidth="1"
          strokeDasharray="4,2"
        />

        {/* Corner circles */}
        <circle cx="14" cy="14" r="5" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />
        <circle cx="86" cy="14" r="5" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />
        <circle cx="14" cy="34" r="5" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />
        <circle cx="86" cy="34" r="5" className="fill-primary/10 stroke-primary/30" strokeWidth="1" />

        {/* Cost text */}
        <text
          x="50"
          y="24"
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-foreground"
          fontFamily="ui-monospace, monospace"
          fontWeight="bold"
          fontSize="14"
        >
          ${cost}
        </text>
      </svg>
    </div>
  );
}
