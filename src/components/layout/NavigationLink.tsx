"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

type NavigationLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export default function NavigationLink({ href, onMouseEnter, onFocus, ...props }: NavigationLinkProps) {
  const router = useRouter();
  const preload = () => router.prefetch(href);

  return (
    <Link
      {...props}
      href={href}
      onMouseEnter={event => {
        preload();
        onMouseEnter?.(event);
      }}
      onFocus={event => {
        preload();
        onFocus?.(event);
      }}
    />
  );
}
