import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface ProductFeature {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export default function ProductFeatures({
  items,
}: {
  items: ProductFeature[];
}) {
  return (
    <>
      {items.map((item, index) => (
        <ScrollReveal
          key={item.number}
          from={index % 2 === 0 ? "left" : "right"}
          delay={index * 100}
          className="flex min-w-0"
        >
          <div className="bg-[#EFF0F6] min-w-0 w-full p-6 lg:p-8 rounded-2xl border-b-4 border-gray-200 flex flex-col items-start text-left break-words relative overflow-hidden flex-1">
            {/* Top section with icon and number */}
            <div className="flex justify-between gap-4 items-center w-full mb-6 relative z-10">
              <div className="w-16 h-16 bg-[#DFDFEE] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain [filter:invert(32%)_sepia(35%)_saturate(1175%)_hue-rotate(203deg)_brightness(94%)_contrast(91%)]"
                  />
                )}
              </div>

              {/* Number badge (top right) */}
              <span className="text-[52px] lg:text-[64px] shrink-0 font-extrabold text-[#0000001A] leading-none">
                {item.number}
              </span>
            </div>

            <h3 className="text-[#5153A0] font-bold text-lg mb-3 relative z-10">
              {item.title}
            </h3>
            <p className="text-gray-500 relative z-10 flex-1 text-[14px] font-medium leading-6">
              {item.description}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </>
  );
}
