"use client";

import React from "react";
import Image from "next/image";
import { useCountUp } from "react-countup";

function StatItem({ value, label, icon }: { value: string; label: string; icon?: string }) {
  const match = value.match(/^([\d.]+)(\+?)\s*(.*)/);
  const rawNumber = match ? parseFloat(match[1]) : 0;
  const plus = match ? match[2] : "";
  const word = match ? match[3] : "";

  const countUpRef = React.useRef<HTMLSpanElement>(null);

  useCountUp({
    ref: countUpRef as React.RefObject<HTMLElement>,
    start: 0,
    end: rawNumber,
    duration: 2.5,
    decimals: rawNumber % 1 !== 0 ? 1 : 0,
    separator: ",",
    suffix: `${plus} ${word}`,
    enableScrollSpy: true,
    scrollSpyOnce: false,
    scrollSpyDelay: 200,
  });

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-2 lg:p-8 w-full text-center">
      <h2 className="text-3xl md:text-[22px] lg:text-[32px] font-extrabold flex flex-wrap justify-center items-center mb-3 lg:mb-4 text-brand-primary">
        {icon && (
          <Image
            src={icon}
            alt="icon"
            width={19}
            height={22}
            className="lg:w-5 md:w-3.25 w-4.25 mr-1"
            style={{ height: "auto" }}
          />
        )}
        <span ref={countUpRef} />
      </h2>
      <p className="text-brand-primary font-semibold text-[12px] md:text-[10px] lg:text-[14px] text-center max-w-50 md:max-w-37.5 lg:max-w-none mx-auto">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const stats = [
    {
      value: "777+ Million",
      label: "Processed Transactions Value",
      icon: "/image/dollar.svg",
    },
    {
      value: "1.94+ Billion",
      label: "Transactions Count",
    },
    {
      value: "33.6+ Million",
      label: "Unique Customer Interactions",
    },
  ];

  return (
    <section className="py-20 w-full max-w-360 mx-auto bg-white px-6">
      <div className="flex flex-col md:flex-row justify-between items-center w-full relative">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <StatItem
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
            {/* Vertical Divider - Desktop */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-0.5 h-32 bg-gradient-to-b from-transparent via-brand-primary to-transparent opacity-60" />
            )}
            {/* Horizontal Divider - Mobile */}
            {index < stats.length - 1 && (
              <div className="md:hidden w-[80%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-60" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}