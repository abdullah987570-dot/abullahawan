import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TickerTape } from "@/components/landing/TickerTape";
import { MarketGrid } from "@/components/landing/MarketGrid";
import { AIPredictions } from "@/components/landing/AIPredictions";
import { Courses } from "@/components/landing/Courses";
import { Blog } from "@/components/landing/Blog";
import { Community } from "@/components/landing/Community";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ForexVision Pro — Master Forex Trading With Real Traders" },
      {
        name: "description",
        content:
          "Premium forex education, AI-powered market predictions, live dashboards, and a global trading community in one platform.",
      },
      { property: "og:title", content: "ForexVision Pro — Trade smarter with AI & community" },
      { property: "og:description", content: "Courses, AI predictions, live forex dashboards, and a thriving trader community." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <TickerTape />
      <MarketGrid />
      <AIPredictions />
      <Courses />
      <Blog />
      <Community />
      <Pricing />
      <Footer />
    </div>
  );
}
