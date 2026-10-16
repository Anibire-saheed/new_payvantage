export const docsUrl = "https://payvantage.gitbook.io/payvantage.gitbook.io";

// Preserve explicit file extensions; keep defaults for existing callers.
export const asset = (name: string) => {
  const filename = /\.[^/.]+$/.test(name)
    ? name
    : `${name}.${name === "logo" ? "svg" : "webp"}`;

  return `/image/landing/${filename}`;
};

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex h-[35px] items-center justify-center gap-2.5 rounded-[30px] bg-[#5153a0] px-3 text-[12px] font-medium leading-[18px] text-white shadow-[0_5px_0_rgb(0_0_0/0.15)] ${className}`}>
      {children}
    </span>
  );
}
