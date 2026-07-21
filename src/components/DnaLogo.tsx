interface DnaLogoProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * DNA double-helix logo rendered as a pure SVG.
 * Two interweaving S-curve strands (180° out of phase) with horizontal
 * base-pair rungs, enclosed in a circle — side-view classic helix.
 */
export default function DnaLogo({ size = 100, color = '#fff', className }: DnaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cretaceous Biosciences logo"
    >
      {/* ── Outer ring ────────────────────────────────── */}
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1.5" />

      {/*
        Two S-curves — each makes 2 full turns between y=14 and y=86.
        Strand A starts at x=64 (right); Strand B starts at x=36 (left).
        They cross at y≈23, 41, 59, 77 and are at their widest at y=14,32,50,68,86.
      */}

      {/* ── Strand A  (right → left → right → left → right) ─── */}
      <path
        d="M64 14
           C64 23, 36 21, 36 32
           C36 43, 64 41, 64 50
           C64 59, 36 57, 36 68
           C36 79, 64 77, 64 86"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* ── Strand B  (left → right → left → right → left) ─── */}
      <path
        d="M36 14
           C36 23, 64 21, 64 32
           C64 43, 36 41, 36 50
           C36 59, 64 57, 64 68
           C64 79, 36 77, 36 86"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* ── Base-pair rungs at the widest separations ──────── */}
      <line x1="36" y1="14" x2="64" y2="14" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="36" y1="32" x2="64" y2="32" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="36" y1="50" x2="64" y2="50" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="36" y1="68" x2="64" y2="68" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="36" y1="86" x2="64" y2="86" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
