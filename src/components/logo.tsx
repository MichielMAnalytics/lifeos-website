export function LogoMark({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
    >
      <path
        d="M98 14 C126 12,154 23,170 44 C186 65,188 92,180 116 C172 140,154 158,130 166 C106 174,72 174,50 160 C28 146,13 122,13 97 C13 72,26 50,46 35 C66 20,70 16,98 14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
      />
      <g stroke="currentColor" fill="none" strokeLinecap="round">
        <line x1="100" y1="162" x2="100" y2="52" strokeWidth="4.5" />
        <path d="M100 144 Q70 118 38 106" strokeWidth="4" />
        <path d="M100 144 Q130 118 162 106" strokeWidth="4" />
        <path d="M100 112 Q78 88 62 70" strokeWidth="3" />
        <path d="M100 112 Q122 88 138 70" strokeWidth="3" />
        <path d="M100 84 Q88 64 80 50" strokeWidth="2.5" />
        <path d="M100 84 Q112 64 120 50" strokeWidth="2.5" />
      </g>
      <g fill="currentColor">
        <circle cx="34" cy="103" r="9" />
        <circle cx="166" cy="103" r="9" />
        <circle cx="58" cy="67" r="8" />
        <circle cx="142" cy="67" r="8" />
        <circle cx="76" cy="47" r="7" />
        <circle cx="124" cy="47" r="7" />
        <circle cx="100" cy="48" r="8" />
      </g>
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={32} />
      <span className="text-xl font-medium tracking-tight">
        Life<span className="text-muted">os</span>
      </span>
    </div>
  );
}
