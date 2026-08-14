import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { StudioShowcase, Experience } from "@/components/site/sections";
import { Booking, Contact, Footer, MobileBar } from "@/components/site/contact";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [{ title: "Studio | Panjharaksha Media" }],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <div className="bg-background pt-20">
      <SiteNav />
      <main>
        <StudioShowcase />
        <Experience />
        <Contact />
        <Booking />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
