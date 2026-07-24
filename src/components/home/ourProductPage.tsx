import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import productCards from "@/components/home/productCards";

export default function OurProductPage() {
  return (
    <section
      id="products"
      className="pb-12 pt-0 md:pt-12 px-6 lg:px-12 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-8 flex flex-col items-start text-left">
          <span className="inline-block bg-[#5153A0] text-white px-8 py-5 border-b-5 border-gray-300 rounded-full text-[12px] font-bold mb-6">
            Our Products and Services
          </span>
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-extrabold text-brand-primary leading-tight mb-4 px-2 lg:px-0">
            Build For The Future Of Digital <br className="hidden md:block" />{" "}
            Payments.
          </h2>
          <p className="text-black max-w-xl text-[13px] md:text-[14px] font-bold px-2 lg:px-0 pb-0 lg:pb-5">
            Embrace the future of digital payment with our customer-centric
            <br className="hidden md:block" /> payment platforms.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bottom Row Cards */}
          {productCards.map((card, index) => (
            <ScrollReveal
              key={index}
              delay={100 + index * 100}
              className={`${card.bgColor}  lg:col-span-1 rounded-lg p-6 flex flex-col items-start overflow-hidden shadow-sm border-b-4 border-gray-200`}
            >
              {/* Image at top */}
              {card.image && (
                <div className="relative w-full h-[200px] mb-6 flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={240}
                    height={200}
                    className="object-contain"
                  />
                </div>
              )}

              <div className="w-full flex flex-col flex-1">
                <h3 className="text-[16px] font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <Link
                  href={card.link}
                  className="bg-[#5153A0] text-white text-[14px] font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-colors mt-auto w-fit"
                >
                  Learn more
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
