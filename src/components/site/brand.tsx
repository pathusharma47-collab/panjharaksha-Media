import emblemAsset from "@/assets/panjharaksha-emblem.png.asset.json";
import wordmarkAsset from "@/assets/panjharaksha-wordmark.png.asset.json";

// Replace the underlying asset files to swap in the high-resolution logo later.
export const EMBLEM_URL = "/logo.png";
export const WORDMARK_URL = wordmarkAsset.url;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/#contact" },
];

export const PHONE = "097906 90436";
export const PHONE_TEL = "+919790690436";
export const ADDRESS =
  "Shop No: 75, Subramaniam Rd, Near Pizza Hut, R.S. Puram, Coimbatore, Tamil Nadu 641002";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Panjharaksha+Media+Subramaniam+Rd+R.S.+Puram+Coimbatore";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}

export function Waveform({ bars = 48, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] flex-1 origin-bottom rounded-full bg-gold/40 animate-wave"
          style={{
            height: `${18 + Math.abs(Math.sin(i * 0.7)) * 82}%`,
            animationDelay: `${(i % 12) * 0.12}s`,
            animationDuration: `${1.4 + (i % 5) * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}