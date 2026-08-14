import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { EMBLEM_URL, NAV_LINKS, PHONE_TEL } from "./brand";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={EMBLEM_URL}
            alt="Panjharaksha Media emblem"
            className="h-24 w-24 shrink-0 object-contain mix-blend-screen sm:h-32 sm:w-32"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="border border-gold/50 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:shadow-[0_0_28px_-6px_var(--gold)]"
          >
            Book a Session
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end text-gold lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-ink/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gold"
            >
              <Phone className="h-4 w-4" /> Call the studio
            </a>
          </div>
        </div>
      )}
    </header>
  );
}