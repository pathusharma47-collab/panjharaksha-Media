import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Work, AudioVisual } from "@/components/site/sections";
import { Booking, Contact, Footer, MobileBar } from "@/components/site/contact";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{ title: "Portfolio | Panjharaksha Media" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="bg-background pt-20">
      <SiteNav />
      <main>
        <Work />
        <AudioVisual />
        <Contact />
        <Booking />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
