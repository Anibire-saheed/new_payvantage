export default function LandingStats() {
  return (
    <section className="bg-white [font-family:var(--font-schibsted-grotesk),Arial,sans-serif] h-[190px] pt-[41px] max-md:h-auto max-md:py-9" aria-label="Payvantage in numbers">
      <dl className="mx-auto grid w-[min(810px,calc(100%-48px))] grid-cols-3 gap-[5px] text-[#3e4095] [&>div]:relative [&>div]:flex [&>div]:h-[109px] [&>div]:flex-col-reverse [&>div]:justify-center [&>div]:pl-[30px] [&>div]:before:absolute [&>div]:before:inset-y-0 [&>div]:before:left-0 [&>div]:before:w-px [&>div]:before:bg-[linear-gradient(#d8d5ff,#aaa2ff)] [&>div]:before:content-[''] [&>div]:after:absolute [&>div]:after:bottom-0 [&>div]:after:left-0 [&>div]:after:h-[25px] [&>div]:after:w-0.5 [&>div]:after:bg-[#8054ff] [&>div]:after:content-[''] [&_dt]:mt-2 [&_dt]:text-[14px] [&_dt]:font-semibold [&_dt]:leading-5 [&_dd]:text-[26px] [&_dd]:font-bold [&_dd]:leading-[34px] [&_dd]:whitespace-nowrap [&_em]:text-[20px] [&_em]:font-extrabold [&_em]:text-[#ffa500] [&_em]:[font-family:var(--font-montserrat),Arial,sans-serif] [&_dd>span]:text-[#ffa500] max-md:max-w-[400px] max-md:grid-cols-[1fr] max-md:gap-5 max-md:[&>div]:h-[95px]">
        <div><dt>Transactions Count</dt><dd>1.7+ <em>Billion</em></dd></div>
        <div><dt>Processed Transactions Value</dt><dd><span>$</span>607+ <em>Million</em></dd></div>
        <div><dt>Unique Customer Interactions</dt><dd>33.6+ <em>Million</em></dd></div>
      </dl>
    </section>
  );
}
