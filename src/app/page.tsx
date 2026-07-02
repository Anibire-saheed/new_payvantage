import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeatureUSSD from "@/components/FeatureUSSD";
import Partners from "@/components/Partners";
import FeatureAPI from "@/components/FeatureAPI";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Stats />
      <FeatureUSSD />
      <Partners />
      <FeatureAPI />
      <CTA />
    </main>
  );
}
