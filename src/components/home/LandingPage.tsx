import Banking from "./Banking";
import Demo from "./Demo";
import Developers from "./Developers";
import Hero from "./Hero";
import LandingFooter from "./LandingFooter";
import LandingStats from "./LandingStats";
import Partners from "./Partners";
import Principles from "./Principles";
import Products from "./Products";

export default function LandingPage() {
  return (
    <div className="bg-white text-black text-[14px] leading-6 [font-family:var(--font-schibsted-grotesk),Arial,sans-serif] [&_a]:no-underline [&_a:focus-visible]:[outline:3px_solid_#ffa500] [&_a:focus-visible]:outline-offset-[5px] [&_button:focus-visible]:[outline:3px_solid_#ffa500] [&_button:focus-visible]:outline-offset-[5px] [&_[tabindex='0']:focus-visible]:[outline:3px_solid_#ffa500] [&_[tabindex='0']:focus-visible]:outline-offset-[5px]">
      <Hero />
      <main>
        <LandingStats />
        <Banking />
        <Partners />
        <Products />
        <Principles />
        <Developers />
        <Demo />
      </main>
      <LandingFooter />
    </div>
  );
}
