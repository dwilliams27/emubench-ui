interface StickProps {
  x?: number;
  y?: number;
  size?: number;
}

interface ButtonProps {
  size?: number;
}

export function AButton({ size = 40 }: ButtonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" fill="#4ade80" stroke="#22c55e" strokeWidth="2"/>
      <text x="20" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="18" fontWeight="bold">A</text>
    </svg>
  );
}

export function BButton({ size = 40 }: ButtonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" fill="#ef4444" stroke="#dc2626" strokeWidth="2"/>
      <text x="20" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="14" fontWeight="bold">B</text>
    </svg>
  );
}

export function XButton({ size = 40 }: ButtonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="12" fill="#9ca3af" stroke="#6b7280" strokeWidth="2"/>
      <text x="20" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">X</text>
    </svg>
  );
}

export function YButton({ size = 40 }: ButtonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="12" fill="#9ca3af" stroke="#6b7280" strokeWidth="2"/>
      <text x="20" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">Y</text>
    </svg>
  );
}

export function ZButton({ size = 40 }: ButtonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="12" width="30" height="16" rx="4" fill="#a855f7" stroke="#9333ea" strokeWidth="2"/>
      <text x="20" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12" fontWeight="bold">Z</text>
    </svg>
  );
}

export function StartButton({ size = 40 }: ButtonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="36" height="12" rx="3" fill="#9ca3af" stroke="#6b7280" strokeWidth="2"/>
      <text x="26" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="8" fontWeight="bold">START</text>
    </svg>
  );
}

export function LTrigger({ size = 50 }: ButtonProps) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5 L5 20 L45 20 L45 10 L40 5 Z" fill="#9ca3af" stroke="#6b7280" strokeWidth="2"/>
      <text x="25" y="15" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">L</text>
    </svg>
  );
}

export function RTrigger({ size = 50 }: ButtonProps) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45 5 L45 20 L5 20 L5 10 L10 5 Z" fill="#9ca3af" stroke="#6b7280" strokeWidth="2"/>
      <text x="25" y="15" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">R</text>
    </svg>
  );
}

export function DPad({ activeDirections = [] as string[], size = 50 }: ButtonProps & { activeDirections?: string[] }) {
  const isActive = (direction: string) => activeDirections.includes(direction);

  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2 L32 2 L32 18 L48 18 L48 32 L32 32 L32 48 L18 48 L18 32 L2 32 L2 18 L18 18 Z"
            fill="#9ca3af" stroke="#6b7280" strokeWidth="2"/>

      {isActive('up') && <path d="M20 4 L30 4 L30 16 L20 16 Z" fill="#4ade80"/>}
      {isActive('down') && <path d="M20 34 L30 34 L30 46 L20 46 Z" fill="#4ade80"/>}
      {isActive('left') && <path d="M4 20 L16 20 L16 30 L4 30 Z" fill="#4ade80"/>}
      {isActive('right') && <path d="M34 20 L46 20 L46 30 L34 30 Z" fill="#4ade80"/>}
    </svg>
  );
}

export function MainStick({ x = 128, y = 128, size = 60 }: StickProps) {
  const centerX = 30;
  const centerY = 30;
  const maxOffset = 20;

  const normalizedX = ((x - 128) / 127) * maxOffset;
  const normalizedY = ((128 - y) / 127) * maxOffset;

  const dotX = centerX + normalizedX;
  const dotY = centerY + normalizedY;

  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={centerX} cy={centerY} r="25" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2"/>
      <circle cx={centerX} cy={centerY} r="20" fill="none" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2 2"/>
      <line x1={centerX} y1="5" x2={centerX} y2="55" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2 2"/>
      <line x1="5" y1={centerY} x2="55" y2={centerY} stroke="#d1d5db" strokeWidth="1" strokeDasharray="2 2"/>
      <circle cx={dotX} cy={dotY} r="6" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2"/>
    </svg>
  );
}

export function CStick({ x = 128, y = 128, size = 50 }: StickProps) {
  const centerX = 25;
  const centerY = 25;
  const maxOffset = 16;

  const normalizedX = ((x - 128) / 127) * maxOffset;
  const normalizedY = ((128 - y) / 127) * maxOffset;

  const dotX = centerX + normalizedX;
  const dotY = centerY + normalizedY;

  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={centerX} cy={centerY} r="20" fill="#fef08a" stroke="#eab308" strokeWidth="2"/>
      <circle cx={centerX} cy={centerY} r="16" fill="none" stroke="#facc15" strokeWidth="1" strokeDasharray="2 2"/>
      <line x1={centerX} y1="5" x2={centerX} y2="45" stroke="#facc15" strokeWidth="1" strokeDasharray="2 2"/>
      <line x1="5" y1={centerY} x2="45" y2={centerY} stroke="#facc15" strokeWidth="1" strokeDasharray="2 2"/>
      <circle cx={dotX} cy={dotY} r="5" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2"/>
    </svg>
  );
}
