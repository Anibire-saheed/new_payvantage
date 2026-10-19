import Image from "next/image";
import Link from "next/link";
import { asset, Badge } from "./landingShared";

const products = [
  {
    name: "Virtual Account",
    description:
      "Innovative and disruptive Virtual Account API with easily accessible API documentation.",
    image: "virtual-account.svg",
    href: "/products/virtual-accounts",
    alt: "Virtual account showing a received payment and settled invoices.",
  },
  {
    name: "Address Verification",
    description:
      "Confirm customer addresses quickly and accurately to reduce fraud and streamline onboarding.",
    image: "address_verification.svg",
    href: "/products/vas?service=address-verification",
    alt: "A map and a successfully verified customer address.",
  },
  {
    name: "Liveliness",
    description:
      "Verify that every user is a real person with fast liveness checks that prevent spoofing and fraud.",
    image: "liveliness.svg",
    href: "/products/vas?service=liveliness",
    alt: "Identity verification with a 92% live match and facial movement checks.",
  },
  {
    name: "Gamification",
    description:
      "Increase engagement and retention with rewards, challenges, and leaderboards.",
    image: "gamification.svg",
    href: "/products/vas?service=gamification",
    alt: "A rewards challenge with stars, points and a leaderboard.",
  },
];

export default function Products() {
  return (
    <section id="products" aria-labelledby="products-heading">
      <div className="text-center [&>h2]:mt-7 [&>p]:mt-5 max-md:px-6 max-md:[&>h2]:mt-6 max-md:[&>p]:mx-auto max-md:[&>p]:max-w-[480px]">
        <Badge>Our Products and Services</Badge>
        <h2
          className="text-[26px] font-bold leading-9 text-[#3e4095] max-md:text-[24px] max-md:leading-8"
          id="products-heading"
        >
          <span className="max-md:whitespace-nowrap">Build For The Future Of</span>{" "}
          <br className="md:hidden" />
          <span className="max-md:whitespace-nowrap">
            Digital<br className="max-md:hidden" />{" "}Payments.
          </span>
        </h2>
        <p className="text-[14px] font-medium leading-6">
          Embrace the future of digital payment with our customer-centric
          payment
          <br className="max-md:hidden" /> platforms.
        </p>
      </div>
      <div className="mx-auto mt-[99px] flex w-[min(1000px,calc(100%-48px))] flex-col gap-[118px] max-md:mt-12 max-md:max-w-[500px] max-md:gap-[72px]">
        {products.map((product, index) => (
          <article
            key={product.image}
            className={`grid grid-cols-2 items-stretch max-md:grid-cols-[1fr] max-md:gap-8 ${index % 2 ? "md:[&>img]:col-start-1 md:[&>img]:row-start-1 md:[&>div]:col-start-2 md:[&>div]:row-start-1" : ""}`}
          >
            <div className="relative isolate flex flex-col items-start justify-center px-[90px] before:absolute before:inset-x-0 before:-inset-y-[60px] before:z-[-1] before:bg-[url('/image/landing/product-grid.svg')] before:bg-size-[100%_100%] before:opacity-[0.38] before:[mask-image:linear-gradient(transparent,#000_25%,#000_75%,transparent)] before:content-[''] [&>h3]:text-[20px] [&>h3]:font-bold [&>h3]:leading-7 [&>h3]:text-[#3e4095] [&>p]:mt-4 [&>p]:text-[14px] [&>p]:leading-6 [&>a]:mt-5 max-[75rem]:px-10 max-md:p-6 max-md:before:inset-0 max-md:[&>a]:mt-6">
              <h3>{product.name}</h3>
              <p className="text-[14px] font-medium leading-6">
                {product.description}
              </p>
              <Link
                className="inline-flex min-h-[50px] items-center justify-center rounded-[5px] border border-transparent bg-[#5153a0] px-5 text-[14px] font-semibold leading-5 whitespace-nowrap text-white"
                href={product.href}
                aria-label={`Learn more about ${product.name}`}
              >
                Learn more
              </Link>
            </div>
            <Image
              className="block h-auto w-full rounded-[20px]"
              src={asset(product.image)}
              alt={product.alt}
              width={500}
              height={482}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
