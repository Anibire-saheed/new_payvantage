import React from 'react'
import Image from 'next/image'
import ScrollReveal from "@/components/ui/ScrollReveal";

const ctaImage = () => {
  return (
    <div>
      <ScrollReveal
                from="none"
                delay={200}
                className="relative w-full max-w-360 mx-auto aspect-4/1 md:aspect-[4.2/1] overflow-hidden mt-10"
              >
                <Image
                  src="/image/Group_Pic.svg"
                  alt="Payvantage Team"
                  fill
                  className="object-cover object-top mix-blend-multiply scale-[1.03]"
                />
              </ScrollReveal>
    </div>
  )
}

export default ctaImage
