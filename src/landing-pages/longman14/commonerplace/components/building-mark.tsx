export function BuildingMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* facade */}
      <rect x="20" y="60" width="380" height="440" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      {/* arched window, nodding to the 1925 post office */}
      <path
        d="M90 300 V190 A120 120 0 0 1 330 190 V300"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M90 300 V220 A120 120 0 0 1 330 220 V300"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <line x1="210" y1="90" x2="210" y2="300" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      {/* sill */}
      <line x1="70" y1="300" x2="350" y2="300" stroke="currentColor" strokeWidth="1.5" />
      {/* cornice / keystone marks */}
      <line x1="20" y1="60" x2="400" y2="60" stroke="currentColor" strokeWidth="2" />
      <path d="M195 60 L210 40 L225 60" stroke="currentColor" strokeWidth="1.5" />
      {/* door */}
      <rect x="175" y="380" width="70" height="120" stroke="currentColor" strokeWidth="1.5" />
      <line x1="210" y1="380" x2="210" y2="500" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" />
      {/* woodgrain rings, nodding to the years as a woodworking shop */}
      <g stroke="currentColor" strokeOpacity="0.3">
        <circle cx="210" cy="440" r="10" />
        <circle cx="210" cy="440" r="18" />
        <circle cx="210" cy="440" r="26" />
      </g>
      {/* year mark */}
      <text
        x="210"
        y="345"
        textAnchor="middle"
        fill="currentColor"
        fontSize="13"
        letterSpacing="2"
        fontFamily="var(--font-body)"
      >
        1925
      </text>
    </svg>
  );
}
