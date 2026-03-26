export function LogoMark({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 140"
      width={size}
      height={size * 1.4}
      className={className}
    >
      {/* Rectangular frame */}
      <rect x="22" y="20" width="56" height="70" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="miter" />
      {/* Trunk */}
      <line x1="50" y1="115" x2="50" y2="25" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      {/* Lower branches */}
      <line x1="50" y1="85" x2="26" y2="65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="50" y1="85" x2="74" y2="65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Mid branches */}
      <line x1="50" y1="62" x2="30" y2="42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="50" y1="62" x2="70" y2="42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      {/* Upper branches */}
      <line x1="50" y1="45" x2="38" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="45" x2="62" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={22} />
      <span className="text-xl font-medium tracking-tight">
        Life<span className="text-muted-foreground text-[0.65em] ml-0.5">OS</span>
      </span>
    </div>
  );
}
