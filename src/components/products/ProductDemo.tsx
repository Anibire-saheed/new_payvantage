import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/home/landingShared";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CtaImage from "@/components/ui/ctaImage";
import { Button } from "@/components/ui/button";

export default function ProductDemo({ title,children,demoHref,descriptionClassName }: {
  title: ReactNode; children: ReactNode; demoHref: string; descriptionClassName: string;
}) {
  return (
    <section className="mt-22">
      <div className="relative pt-16 px-6 lg:pb-0 bg-linear-to-b from-[#3E409533] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center ">
          <ScrollReveal>
            <div className="mb-4">
              <Badge>
                Get Started
              </Badge>
            </div>

            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-bold text-brand-primary mb-3 md:mb-4">{title}</h2>

            <p className={descriptionClassName}>{children}</p>

            <Button asChild variant="default" size="lg" className="mb-8">
              <Link href={demoHref}>Book Your Demo</Link>
            </Button>
          </ScrollReveal>
        </div>
      </div>
      <CtaImage />
    </section>
  );
}
