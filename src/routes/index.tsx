import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import {
  AudioVisual,
  BrandMoment,
  Experience,
  Hero,
  Intro,
  Reviews,
  Services,
  StudioShowcase,
  Work,
} from "@/components/site/sections";
import { Booking, Contact, Footer, MobileBar } from "@/components/site/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Panjharaksha Media | Post-Production Studio, Coimbatore" },
      {
        name: "description",
        content:
          "Recording, music production, mixing, mastering and audio post-production at Panjharaksha Media, R.S. Puram, Coimbatore.",
      },
      { property: "og:title", content: "Panjharaksha Media Productions" },
      {
        property: "og:description",
        content: "Where sound becomes experience. Professional post-production studio in Coimbatore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Services />
        <StudioShowcase />
        <BrandMoment />
        <Experience />
        <AudioVisual />
        <Work />
        <Reviews />
        <Contact />
        <Booking />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
