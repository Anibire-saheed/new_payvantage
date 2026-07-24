import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeatureAPI() {
  return (
    <section className="py-14 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <ScrollReveal
          from="left"
          className="lg:w-1/2 flex flex-col items-start text-left"
        >
          <span className="inline-block bg-[#5153A0] text-white px-8 py-5 border-b-5 border-gray-300 rounded-full text-[12px] font-bold mb-6">
            Developer-First
          </span>
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-extrabold text-brand-primary leading-tight mb-4 px-0">
            Build Better With Our APIs
          </h2>
          <p className="text-black font-bold text-[13px] md:text-[14px] leading-5 md:leading-6.5 mb-6 lg:max-w-lg px-1 lg:px-0">
            Our well-documented and easy-to-use APIs make integrating and
            accessing reliable payment functionalities easy for your developers.
          </p>
          <button
            type="button"
            className="bg-[#5153A0] text-white px-8 py-3.5 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://payvantage.gitbook.io/payvantage.gitbook.io"
            >
              View API Documentation
            </a>
          </button>
        </ScrollReveal>

        <ScrollReveal from="right" className="lg:w-230 relative">
          <div className="animate-float -translate-y-2.5">
            <Image
              src="/image/Api_img.svg"
              alt="API Documentation"
              width={600}
              height={335}
              className="w-200 h-auto mix-blend-multiply drop-shadow-none"
              style={{
                mixBlendMode: "multiply",
                width: "auto",
                height: "auto",
              }}
              priority
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 lg:w-[120%] lg:h-[120%] w-[80%] h-[80%] bg-blue-100 rounded-full blur-[100px] opacity-40" />
        </ScrollReveal>
      </div>
    </section>
  );
}
