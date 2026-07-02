import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative text-white pt-10 pb-10 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image src="/image/footer_bg.svg" alt="footer background" fill className="object-cover object-center" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="w-full mb-5 text-left">
            <Image
              src="/image/logo.svg"
              alt="Payvantage Logo"
              width={160}
              height={40}
              className="inline-block lg:block"
              style={{ height: '2rem', width: 'auto' }}
            />
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between items-start gap-8 mb-16 w-full">
          <ScrollReveal from="left" className="w-full lg:w-[50%] text-left">
            <p className="text-white font-bold text-[14px] leading-6 max-w-95">
              Flexible and value-driven payment platforms reaching both banked and unbanked Nigerians through mobile channels.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="flex items-center justify-center">
                <Image src="/image/in_logo.svg" alt="" width={24} height={24} className="w-6 h-6 object-contain" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="w-full lg:w-auto flex flex-row gap-0 md:gap-0 lg:gap-30">
            <div className="lg:-ml-30 md:ml-0 ml-0" />
            <div className="flex-1 lg:flex-none lg:w-30">
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm font-medium">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Code of Practice</Link></li>
              </ul>
            </div>
            <div className="flex-1 lg:flex-none lg:w-30">
              <h4 className="font-bold mb-4 text-lg">Developers</h4>
              <ul className="space-y-2 text-gray-400 text-sm font-medium">
                <li><Link href="/docs" className="hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal from="right" delay={150} className="w-full lg:w-130 ml-0 md:ml-0 lg:ml-10">
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-[14px] font-medium">
              <li>2, Dele Omodara Close off Titilayo Adedoyin Street, Omole Phase 1, Lagos.</li>
              <li>
                <a href="mailto:info@payvantage.com.ng" className="hover:text-white transition-colors">
                  info@payvantage.com.ng
                </a>
              </li>
              <li>
                <a href="tel:+2348022473198" className="hover:text-white transition-colors">
                  08022473198
                </a>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <hr className="border-white/10 mb-8" />

        <ScrollReveal from="none">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-400 font-medium space-y-4 md:space-y-0">
            <div className="flex flex-col items-start md:items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto text-left">
              <div className="bg-white px-3 py-1.5 rounded-md justify-center shadow-sm self-start">
                <Image
                  src="/image/pci.svg"
                  alt="PCI DSS Compliant"
                  width={90}
                  height={28}
                  className="h-6 lg:h-7 w-auto"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <span className="text-white font-semibold text-[13px] md:text-[15px]">
                © 2026 Payvantage Ltd. All Rights Reserved
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
