import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeatureUSSD from "@/components/home/FeatureUSSD";
import Partners from "@/components/home/Partners";
import FeatureAPI from "@/components/home/FeatureAPI";
import CTA from "@/components/home/CTA";

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
