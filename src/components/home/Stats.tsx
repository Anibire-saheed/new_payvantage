"use client";

import React from "react";
import { useCountUp } from "react-countup";

function StatItem({
  value,
  label,
  prefix,
}: {
  value: string;
  label: string;
  prefix?: string;
}) {
  const match = value.match(/^([\d.]+)(\+?)\s*(.*)/);

  const numberString = match ? match[1] : "0";
  const rawNumber = parseFloat(numberString);

  const plus = match ? match[2] : "";
  const word = match ? match[3] : "";

  // Keep the exact number of decimal places.
  // 1.1  -> 1 decimal
  // 1.94 -> 2 decimals
  // 33.6 -> 1 decimal
  const decimals = numberString.includes(".")
    ? numberString.split(".")[1].length
    : 0;

  const countUpRef = React.useRef<HTMLSpanElement>(null);

  useCountUp({
    ref: countUpRef as React.RefObject<HTMLElement>,
    start: 0,
    end: rawNumber,
    duration: 2.5,
    decimals,
    separator: ",",
    suffix: `${plus} ${word}`,
    enableScrollSpy: true,
    scrollSpyOnce: false,
    scrollSpyDelay: 200,
  });

  return (
    <div className="flex flex-col items-center justify-center p-12 md:p-6 lg:p-18 w-full text-center">
      <h2 className="text-3xl md:text-[22px] lg:text-[32px] font-extrabold flex flex-wrap justify-center items-center mb-3 lg:mb-4 text-brand-primary">
        {prefix && (
          <span className="mr-1 text-[#FFA500] font-montserrat font-bold">
            {prefix}
          </span>
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
      value: "1.1+ Trillion",
      label: "Processed Transactions Value",
      prefix: "₦",
    },
    {
      value: "1.94+ Billion",
      label: "Transaction Count",
    },
    {
      value: "33.6+ Million",
      label: "Unique Customer Interactions",
    },
  ];

  return (
    <section className="w-full max-w-360 mx-auto bg-white px-6">
      <div className="flex flex-col md:flex-row justify-between items-center w-full relative">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <StatItem
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
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
