"use client";

import ProductHero from "@/components/products/ProductHero";

import ProductFeatures from "@/components/products/ProductFeatures";
import ProductDemo from "@/components/products/ProductDemo";
import ProductBackButton from "@/components/products/ProductBackButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function GamificationPage({ embedded=false }: { embedded?: boolean; }={}) {
  const Container=embedded? "div":"main";

  return (
    <Container className="flex min-h-screen flex-col bg-white overflow-hidden">
      {!embedded&&<ProductBackButton />}

      {/* Hero Section */}
      <ProductHero label={<>Gamification</>} title={<>Increase Engagement & Retention</>}
        image="/image/products/product_2.svg" imageAlt="Gamification" featuresId="gamification-features" demoHref="/book-demo?product=Gamification"
        className="pt-8 md:pt-12 lg:pt-16 pb-10 px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center xl:justify-center gap-8 mb-8 md:mb-12 lg:mb-16" descriptionClassName="text-gray-600 mb-6 max-w-130 text-[14px] font-medium leading-6">
        Increase engagement and retention with rewards, challenges, badges,
        and leaderboards.
      </ProductHero>

      {/* Details Section */}
      <section id="gamification-features" className="scroll-mt-6 px-6 lg:px-12 max-w-7xl mx-auto w-full py-8">
        <ScrollReveal className="mb-6">
          <h2 className="max-w-xl text-2xl md:text-[28px] lg:text-[26px] font-bold text-brand-primary mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl text-[14px] font-medium leading-6">
            Discover how Gamification can transform your business operations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductFeatures items={[
            {
              number: "01",
              title: "Easy Integration",
              description:
                "Seamlessly integrate our solution into your existing systems with minimal effort.",
            },
            {
              number: "02",
              title: "Scalable Infrastructure",
              description:
                "Built to handle millions of transactions with reliable performance.",
            },
            {
              number: "03",
              title: "24/7 Support",
              description:
                "Dedicated support team available around the clock to assist you.",
            },
          ]} />
        </div>
      </section>

      <ProductDemo title={<>Ready To Deploy Your Gamification Channel?</>} demoHref="/book-demo?product=Gamification" descriptionClassName="text-black max-w-2xl mx-auto mb-6 px-4 md:px-0 text-[14px] font-medium leading-6">
        Let&apos;s get your business connected to every mobile network
        in Nigeria
        <br />
        with zero carrier delays.
      </ProductDemo>
    </Container>
  );
}
