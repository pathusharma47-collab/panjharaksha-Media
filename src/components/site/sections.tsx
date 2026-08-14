import { useState } from "react";
import { ArrowUpRight, Play, Star, ArrowRight, Users } from "lucide-react";
import { Eyebrow, EMBLEM_URL, Waveform } from "./brand";
import heroStudio from "@/assets/hero-studio-new.jpg";
import studioWorkstation from "@/assets/studio-workstation.jpg";
import studioMic from "@/assets/studio-mic.jpg";
import studioMonitors from "@/assets/studio-monitors.jpg";
import studioPanels from "@/assets/studio-panels.jpg";
import studioLounge from "@/assets/studio-lounge.jpg";
import studioConsole from "@/assets/studio-console.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/4">
        <img
          src={heroStudio}
          alt="Panjharaksha Media post-production studio interior"
          width={1920}
          height={1088}
          className="h-full w-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-5 pb-32 pt-32 lg:px-10">
        <div className="max-w-3xl animate-rise">
          <div className="mb-8">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">PANJHARAKSHA MEDIA</h2>
            <div className="mt-3 h-px w-12 bg-gold/60" />
          </div>
          
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
            WHERE SOUND
            <br />
            BECOMES <span className="text-gold">EXPERIENCE.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Professional post-production, recording and audio services crafted for artists,
            creators and storytellers.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#book"
              className="flex items-center gap-3 rounded-md bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-gold/90"
            >
              Book a Session <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#studio"
              className="rounded-md border border-gold/30 px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Explore Our Studio
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="font-medium text-white">4.6</span> Google Rating
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gold" />
              <span className="font-medium text-white">122</span> Reviews
            </div>
          </div>
        </div>
      </div>

      <Waveform bars={64} className="absolute bottom-0 left-0 h-16 w-full px-5 opacity-40 lg:px-10" />
    </section>
  );
}

export function Intro() {
  return (
    <section id="about" className="border-t border-border bg-background py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="group relative overflow-hidden">
          <img
            src={studioWorkstation}
            alt="Music production workstation at Panjharaksha Media"
            loading="lazy"
            width={1200}
            height={1504}
            className="h-[420px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 lg:h-[620px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>
        <div>
          <Eyebrow>The Studio</Eyebrow>
          <h2 className="mt-7 font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
            Built for sound.
            <br />
            Designed for creators.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            “Panjharaksha Media Productions is a professional post-production studio in R.S. Puram,
            Coimbatore, created to provide artists and creators with a focused environment to
            record, refine and bring their work to life.”
          </p>
          <div className="mt-10 h-px w-40 gold-line" />
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { n: "01", name: "Recording", d: "Professional recording environment for vocal and musical performances.", img: studioMic },
  { n: "02", name: "Music Production", d: "Shape musical ideas into polished productions.", img: studioWorkstation },
  { n: "03", name: "Audio Editing", d: "Clean, refine and prepare recorded audio.", img: studioConsole },
  { n: "04", name: "Mixing & Mastering", d: "Give your final track clarity, balance and professional finishing.", img: studioMonitors },
  { n: "05", name: "Post-Production", d: "Professional audio post-production support for creative projects.", img: studioPanels },
  { n: "06", name: "Media Production", d: "Production support for artists, creators and media projects.", img: studioLounge },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Eyebrow>Services</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          WHAT WE DO
        </h2>

        <div className="mt-14 border-t border-border">
          {SERVICES.map((s) => (
            <a
              key={s.n}
              href="#book"
              className="group relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 overflow-hidden border-b border-border py-7 transition-colors duration-500 hover:bg-card/40 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)_auto] lg:gap-10 lg:py-10"
            >
              <img
                src={s.img}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="pointer-events-none absolute right-0 top-0 h-full w-1/3 object-cover opacity-0 transition-opacity duration-700 [mask-image:linear-gradient(to_left,black,transparent)] group-hover:opacity-25"
              />
              <span className="relative font-display text-xs tracking-[0.3em] text-gold/70">{s.n}</span>
              <span className="relative min-w-0 font-display text-xl font-medium tracking-tight text-foreground transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                {s.name}
              </span>
              <span className="relative col-span-3 text-sm leading-relaxed text-muted-foreground lg:col-span-1">
                {s.d}
              </span>
              <ArrowUpRight className="relative h-5 w-5 shrink-0 text-gold/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: studioConsole, label: "Main Workstation", cls: "lg:col-span-2 h-[280px] lg:h-[420px]" },
  { src: studioMonitors, label: "Monitoring", cls: "h-[280px] lg:h-[420px]" },
  { src: studioPanels, label: "Acoustic Treatment", cls: "h-[300px] lg:h-[520px]" },
  { src: studioMic, label: "Recording Environment", cls: "h-[300px] lg:h-[520px]" },
  { src: studioLounge, label: "Seating & Ambience", cls: "h-[300px] lg:h-[520px]" },
];

export function StudioShowcase() {
  return (
    <section id="studio" className="border-t border-border bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Eyebrow>Gallery</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          INSIDE PANJHARAKSHA
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <figure key={g.label} className={`group relative overflow-hidden ${g.cls}`}>
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-ink/40 transition-colors duration-500 group-hover:bg-ink/65" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <span className="text-xs uppercase tracking-[0.25em] text-foreground/90">{g.label}</span>
                <span className="translate-y-2 text-[0.65rem] uppercase tracking-[0.3em] text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrandMoment() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-ink py-28 lg:py-40">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[130px] animate-glow" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-5 text-center">
        <img
          src={EMBLEM_URL}
          alt="Panjharaksha Media emblem"
          loading="lazy"
          className="w-44 object-contain mix-blend-screen sm:w-56"
        />
        <h2 className="mt-8 font-display text-2xl font-semibold tracking-[0.28em] text-foreground sm:text-4xl">
          PANJHARAKSHA MEDIA
        </h2>
        <p className="mt-4 text-[0.7rem] uppercase tracking-[0.4em] text-gold">
          Professional Post-Production Studio
        </p>
        <p className="mt-4 font-tamil text-sm text-muted-foreground">
          பஞ்சரக்ஷ மீடியா புரொடக்ஷன்ஸ்
        </p>
      </div>
    </section>
  );
}

const EXPERIENCE = [
  { n: "01", t: "PROFESSIONAL ENVIRONMENT", d: "A dedicated space designed for focused creative work." },
  { n: "02", t: "CREATOR FRIENDLY", d: "A comfortable and supportive environment for artists and creators." },
  { n: "03", t: "ATTENTION TO DETAIL", d: "Every stage of the production process deserves precision." },
  { n: "04", t: "R.S. PURAM, COIMBATORE", d: "Conveniently located near Pizza Hut in R.S. Puram." },
];

export function Experience() {
  return (
    <section className="border-t border-border bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Eyebrow>Why Panjharaksha</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          THE PANJHARAKSHA EXPERIENCE
        </h2>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {EXPERIENCE.map((e) => (
            <div key={e.n} className="group bg-background p-8 transition-colors duration-500 hover:bg-card/50 lg:p-12">
              <span className="font-display text-xs tracking-[0.3em] text-gold/70">{e.n}</span>
              <h3 className="mt-6 font-display text-lg tracking-[0.15em] text-foreground">{e.t}</h3>
              <div className="mt-4 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-24" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudioVisual() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 text-center lg:px-10">
        <Eyebrow>Sound Design</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-6xl">
          YOUR SOUND. YOUR STORY.
        </h2>
        <Waveform bars={72} className="mx-auto mt-14 h-28 max-w-4xl opacity-70" />
        <div className="mx-auto mt-10 h-px max-w-4xl gold-line" />
      </div>
    </section>
  );
}

const CATEGORIES = ["All", "Music", "Recording", "Audio", "Post Production", "Media"];
// Portfolio architecture — real projects can be added to this array later.
const PROJECTS: { title: string; category: string; image: string }[] = [
  { title: "Project Slot 01", category: "Music", image: studioConsole },
  { title: "Project Slot 02", category: "Recording", image: studioMic },
  { title: "Project Slot 03", category: "Post Production", image: studioPanels },
  { title: "Project Slot 04", category: "Media", image: studioLounge },
];

export function Work() {
  const [active, setActive] = useState("All");
  const items = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="work" className="border-t border-border bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Eyebrow>Portfolio</Eyebrow>
        <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          SELECTED WORK
        </h2>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 text-xs uppercase tracking-[0.25em] transition-colors ${
                active === c ? "text-gold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {items.map((p) => (
            <article key={p.title} className="group relative h-[260px] overflow-hidden lg:h-[380px]">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <h3 className="font-display text-lg tracking-[0.12em] text-foreground">{p.title}</h3>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-gold">{p.category}</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-primary-foreground">
                  <Play className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Project archive in progress
        </p>
      </div>
    </section>
  );
}

const REVIEW_THEMES = [
  "Friendly service",
  "Professional approach",
  "Recording experience",
  "Quality of output",
  "Editing",
  "Studio ambience",
  "Technical knowledge",
];

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border bg-ink py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-24 lg:px-10">
        <div>
          <div className="flex items-end gap-3">
            <span className="font-display text-7xl font-semibold gold-text lg:text-8xl">4.6</span>
            <Star className="mb-3 h-7 w-7 fill-gold text-gold" />
          </div>
          <p className="mt-4 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground">
            Google Rating
          </p>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.35em] text-gold">122 Reviews</p>
        </div>
        <div>
          <Eyebrow>What visitors mention</Eyebrow>
          <div className="mt-8 space-y-6">
            {REVIEW_THEMES.map((t, i) => (
              <div key={t} className="flex items-baseline gap-6 border-b border-border pb-5">
                <span className="font-display text-xs tracking-[0.3em] text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl tracking-tight text-foreground sm:text-2xl">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Recurring themes from our Google reviews.
          </p>
        </div>
      </div>
    </section>
  );
}