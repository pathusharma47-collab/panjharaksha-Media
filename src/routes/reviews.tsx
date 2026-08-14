import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Reviews } from "@/components/site/sections";
import { Booking, Contact, Footer, MobileBar } from "@/components/site/contact";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [{ title: "Reviews | Panjharaksha Media" }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="bg-background pt-20">
      <SiteNav />
      <main>
        <Reviews />
        <Contact />
        <Booking />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
