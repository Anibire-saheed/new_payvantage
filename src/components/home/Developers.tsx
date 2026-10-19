import ApiExample from "./ApiExample";
import { Badge, docsUrl } from "./landingShared";

export default function Developers() {
  return (
    <section
      className="mx-auto mt-[100px] grid min-h-[680px] w-[min(1240px,calc(100%-48px))] grid-cols-[minmax(0,1fr)_494px] items-center gap-12 rounded-[20px] bg-[#3e4095] bg-[url('/image/landing/api-background.svg')] bg-cover bg-center bg-no-repeat px-[98px] pt-[62px] pb-[81px] text-white max-[75rem]:grid-cols-2 max-[75rem]:gap-9 max-[75rem]:px-12 max-md:mt-16 max-md:max-w-[548px] max-md:grid-cols-[1fr] max-md:gap-12 max-md:px-6 max-md:pt-10 max-md:pb-[60px] mb-14"
      aria-labelledby="developers-heading"
    >
      <div className="pt-[19px] [&>h2]:mt-5 [&>h2]:whitespace-nowrap [&>h2]:text-white [&>p]:mt-4 [&>p]:leading-6 [&>p]:text-[rgb(210,211,230)] [&>a]:mt-[18px] max-[75rem]:[&>h2]:whitespace-normal max-md:p-0">
        <Badge>Developer-First</Badge>
        <h2 className="text-[26px] font-bold leading-9 text-[#3e4095] max-md:text-[24px] max-md:leading-8"
          id="developers-heading"
        >
          Build Better With Our APIs
        </h2>
        <p className="text-[14px] font-medium leading-6">
          Our well-documented and easy-to-use APIs make integrating and
          accessing reliable payment functionalities easy for your developers.
        </p>
        <a
          className="inline-flex min-h-[50px] items-center justify-center rounded-[5px] border border-transparent bg-[#5153a0] px-5 text-[14px] font-semibold leading-5 whitespace-nowrap text-white"
          href={docsUrl}
        >
          View API Documentation
        </a>
      </div>
      <ApiExample />
    </section>
  );
}
