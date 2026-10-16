import type { ReactNode } from "react";
import Image from "next/image";
import { Badge } from "@/components/home/landingShared";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductActions from "./ProductActions";

export default function ProductHero({ label,title,children,image,imageAlt,featuresId,demoHref,className,descriptionClassName }: {
  label: ReactNode; title: ReactNode; children: ReactNode; image: string; imageAlt: string;
  featuresId: string; demoHref: string; className: string; descriptionClassName: string;
}) {
  return (
    <section className={className}>
      <ScrollReveal from="left" className="w-full lg:w-1/2 text-left">
        <Badge className="mb-4">{label}</Badge>
        <h1 className="font-bold text-brand-primary mb-4 text-[24px] md:text-[26px] leading-8 md:leading-9">{title}</h1>
        <p className={descriptionClassName}>{children}</p>
        <ProductActions featuresId={featuresId} demoHref={demoHref} />
      </ScrollReveal>

      <ScrollReveal
        from="right"
        delay={150}
        className="w-full lg:w-1/2 mt-4 lg:mt-5"
      >
        <div className="rounded-xl w-full h-55 sm:h-70 md:h-87.5 relative overflow-hidden mix-blend-multiply">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </ScrollReveal>
    </section>);
}
