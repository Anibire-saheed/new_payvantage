import type { ReactNode } from "react";
import Image from "next/image";
import { Badge } from "@/components/home/landingShared";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductActions from "./ProductActions";

export default function ProductHero({ label,title,children,image,imageAlt,featuresId,demoHref,className,descriptionClassName,largeImage = false }: {
  label: ReactNode; title: ReactNode; children: ReactNode; image: string; imageAlt: string;
  featuresId: string; demoHref: string; className: string; descriptionClassName: string; largeImage?: boolean;
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
        className="w-full sm:max-w-[480px] lg:max-w-none lg:w-1/2 mx-auto mt-4 lg:mt-5"
      >
        <div className={`rounded-xl w-full aspect-[500/482] lg:aspect-auto relative overflow-hidden mix-blend-multiply ${largeImage ? "lg:h-[480px]" : "lg:h-87.5"}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 480px, (max-width: 1279px) calc(50vw - 64px), 576px"
            className="object-contain object-center"
            priority
          />
        </div>
      </ScrollReveal>
    </section>);
}
