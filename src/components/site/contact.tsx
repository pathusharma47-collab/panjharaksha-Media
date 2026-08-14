import { useState } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { ADDRESS, EMBLEM_URL, Eyebrow, MAPS_URL, NAV_LINKS, PHONE, PHONE_TEL } from "./brand";

const PROJECT_TYPES = [
  "Recording",
  "Music Production",
  "Audio Editing",
  "Mixing & Mastering",
  "Post Production",
  "Media Production",
  "Other",
];

const WHATSAPP = "https://wa.me/919790690436";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Eyebrow>Location</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-6xl">
          COME CREATE WITH US.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">{ADDRESS}</p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-8 inline-block font-display text-2xl tracking-[0.1em] text-gold"
            >
              {PHONE}
            </a>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-shadow hover:shadow-[0_0_36px_-8px_var(--gold)]"
              >
                <Phone className="h-4 w-4" /> Call the Studio
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold/60 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-border px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold/60 hover:text-gold"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden border border-border lg:h-[420px]">
            <iframe
              title="Panjharaksha Media location map"
              src="https://www.google.com/maps?q=Subramaniam%20Rd%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20641002&output=embed"
              className="h-full w-full grayscale-[0.7] invert-[0.92] hue-rotate-180 contrast-[0.9]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book" className="border-t border-border bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <Eyebrow>Enquiry</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          BOOK YOUR SESSION
        </h2>

        {sent ? (
          <p className="mt-14 border border-gold/40 p-10 text-center font-display text-xl text-gold">
            Thank you. We’ll get back to you shortly.
          </p>
        ) : (
          <form
            className="mt-12 grid gap-6 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" />
            <div className="flex flex-col gap-2">
              <label className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                Project Type
              </label>
              <select
                name="projectType"
                className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
                defaultValue="Recording"
              >
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-ink">
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <Field label="Preferred Date" name="date" type="date" />
            <div className="sm:col-span-2">
              <label className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="sm:col-span-2 mt-4 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground transition-shadow hover:shadow-[0_0_40px_-8px_var(--gold)]"
            >
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink px-5 pb-28 pt-20 lg:px-10 lg:pb-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <img
              src={EMBLEM_URL}
              alt="Panjharaksha Media emblem"
              loading="lazy"
              className="w-24 object-contain mix-blend-screen"
            />
            <p className="mt-6 font-display text-lg tracking-[0.25em] text-foreground">
              PANJHARAKSHA MEDIA
            </p>
            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.35em] text-gold">
              Professional Post-Production Studio
            </p>
            <p className="mt-6 text-sm text-muted-foreground">R.S. Puram, Coimbatore</p>
            <a href={`tel:${PHONE_TEL}`} className="text-sm text-muted-foreground hover:text-gold">
              {PHONE}
            </a>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 self-end">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-14 h-px w-full gold-line" />
        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          © 2026 Panjharaksha Media Productions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-ink/95 backdrop-blur-xl lg:hidden">
      <a href={`tel:${PHONE_TEL}`} className="py-4 text-center text-[0.65rem] uppercase tracking-[0.25em] text-foreground">
        Call
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="border-x border-border py-4 text-center text-[0.65rem] uppercase tracking-[0.25em] text-foreground"
      >
        WhatsApp
      </a>
      <a href="#book" className="bg-gold py-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-primary-foreground">
        Book
      </a>
    </div>
  );
}