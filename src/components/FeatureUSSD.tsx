import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function FeatureUSSD() {
  const cards = [
    {
      title: "Soft POS and white-labeled Platform",
      bgColor: "bg-[#FFF8EB]",
      description: "Robust, Scalable, and value-driven white-labeled platform with our innovative SoftPOS solution.",
      image: "/image/softPOS_icon.svg",
      imgClassName: "object-contain object-bottom"
    },
    {
      title: "Vantage Recharge",
      bgColor: "bg-[#EFFAF2]",
      description: "Quick and rewarding way to recharge airtime and data.",
      image: "/image/Vantage_icon.svg",
      imgClassName: "object-contain object-bottom"
    },
    {
      title: "VAS - Value Added Services",
      bgColor: "bg-[#EDF8FC]",
      description: "Value is key to driving customer adoption and usage.",
      image: "/image/VAS_icon.svg",
      imgClassName: "object-contain object-bottom scale-110"
    }
  ];

  return (
    <section id="products" className="pb-20 pt-0 md:pt-20 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-12 flex flex-col items-start text-left">
          <span className="inline-block bg-[#5153A0] text-white px-8 py-5 border-b-5 border-gray-300 rounded-full text-[12px] font-bold mb-6">
            Our Products
          </span>
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-extrabold text-brand-primary leading-tight mb-4 px-2 lg:px-0">
            Build For The Future Of Digital <br className="hidden md:block" /> Payments.
          </h2>
          <p className="text-black max-w-xl text-[13px] md:text-[14px] font-bold px-2 lg:px-0">
            Embrace the future of digital payment with our customer-centric<br className="hidden md:block" /> payment platforms.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Main USSD Card */}
          <ScrollReveal from="left" delay={100} className="md:col-span-2 lg:col-span-2 relative bg-[#EDF8FC] rounded-xl border-[#E5E7EB] border-b-5 p-8 lg:p-12 overflow-hidden group min-h-95 lg:h-85 flex flex-col justify-center hover:shadow-lg transition-all duration-300">
            <div className="relative z-10 max-w-sm">
              <h3 className="text-[20px] font-extrabold text-brand-primary -mt-37 md:mt-0 mb-1">USSD Platform</h3>
              <p className="text-[#5B799A] leading-5 md:leading-relaxed text-[14px] font-medium w-[110%] md:w-[95%]">
                Robust, scalable, and customer-centric USSD platform for interactive user experience — reaching even the unbanked.
              </p>
            </div>
            <div className="absolute top-25 md:top-0 bottom-0 flex items-center right-5 md:-right-4 lg:-right-8">
              <Image
                src="/image/ussd_img.svg"
                alt="USSD Platform"
                width={600}
                height={335}
                className="object-contain w-70 md:w-100 lg:w-162.5 h-70 md:h-70 lg:h-90 max-w-none opacity-50 lg:opacity-100"
                style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.05)' }}
              />
            </div>
          </ScrollReveal>

          {/* Virtual Accounts */}
          <ScrollReveal from="right" delay={200} className="lg:col-span-1 bg-[#F0FDF4] rounded-xl border-[#E5E7EB] border-b-5 p-8 lg:p-10 flex flex-col justify-start relative overflow-hidden min-h-95 lg:h-85 hover:shadow-lg transition-all duration-300">
            <div className="z-10 relative">
              <h3 className="text-[17px] font-extrabold text-[#111827] mb-2">Virtual Accounts</h3>
              <p className="text-[#5B799A] leading-relaxed text-[14px] font-medium">
                Innovative and disruptive Virtual Account API with easily accessible API documentation.
              </p>
            </div>
            <div className="absolute bottom-4 left-0 w-full h-[55%] flex justify-center items-end px-4 z-0">
              <Image src="/image/virtual_icon.svg" alt="Virtual Accounts Graphic" fill className="object-contain object-bottom scale-110" style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.02)' }} />
            </div>
          </ScrollReveal>

          {/* Bottom Row Cards */}
          {cards.map((card, index) => (
            <ScrollReveal key={index} delay={100 + index * 100} className={`${card.bgColor} relative lg:col-span-1 rounded-xl border-[#E5E7EB] border-b-5 p-8 lg:p-10 flex flex-col justify-start min-h-85 overflow-hidden hover:shadow-lg transition-all duration-300`}>
              <div className="z-10 relative">
                <h3 className="text-[17px] font-extrabold text-brand-primary mb-2">{card.title}</h3>
                <p className="text-[#5B799A] leading-relaxed text-[14px] font-medium">{card.description}</p>
              </div>
              {card.image && (
                <div className="absolute bottom-0 left-0 w-full h-[55%] flex justify-center z-0">
                  <Image src={card.image} alt={card.title} fill className={card.imgClassName} style={{ mixBlendMode: 'multiply' as const, filter: 'brightness(1.01)' }} />
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
