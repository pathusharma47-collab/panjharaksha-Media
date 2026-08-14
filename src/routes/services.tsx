import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Services, BrandMoment } from "@/components/site/sections";
import { Booking, Contact, Footer, MobileBar } from "@/components/site/contact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [{ title: "Services | Panjharaksha Media" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="bg-background pt-20">
      <SiteNav />
      <main>
        <Services />
        <BrandMoment />
        <Contact />
        <Booking />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
