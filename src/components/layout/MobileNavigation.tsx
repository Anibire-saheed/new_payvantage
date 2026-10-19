"use client";

import Link from "@/components/layout/NavigationLink";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./MobileNavigation.module.css";
import { PRODUCTS_LIST } from "./ProductsDropdown";

import { docsUrl } from "@/components/home/landingShared";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffa500]";

function MobileNavigationPanel({
  onClose,
  onExited,
  closing,
  top,
}: {
  onClose: () => void;
  onExited: () => void;
  closing: boolean;
  top: number;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  const openedPath = useRef(pathname);


  useEffect(() => {
    if (pathname !== openedPath.current) onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.show();
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (desktop.matches) onClose();
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);
    handleResize();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
      document.body.style.overflow = previousOverflow;
      dialog.close();
    };
  }, [onClose]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        data-closing={closing}
        className={`${styles.overlay} fixed inset-x-0 bottom-0 z-[60] bg-black/50 backdrop-blur-sm`}
        style={{ top }}
      />
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Navigation menu"
        data-closing={closing}
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget && closing) onExited();
        }}
        onCancel={(event) => {
          event.preventDefault();
          onClose();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
        style={{ top, height: `calc(100dvh - ${top}px)` }}
        className={`${styles.panel} fixed right-0 bottom-0 left-auto z-[70] m-0 max-h-none w-[min(420px,100vw)] max-w-none border-0 bg-[#232555] p-0 font-sans text-white shadow-2xl`}
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pt-4 pb-[max(24px,env(safe-area-inset-bottom))]">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              <button
                type="button"
                aria-expanded={productsOpen}
                aria-controls="mobile-products"
                onClick={() => setProductsOpen((open) => !open)}
                className={`flex min-h-12 w-full items-center justify-between gap-3 py-3 text-left text-base font-semibold ${focusRing}`}
              >
                Products
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 transition-transform motion-reduce:transition-none ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {productsOpen && (
                <div
                  id="mobile-products"
                  className="mb-3 space-y-1 rounded-xl bg-[#D8D9EA] p-2"
                >
                  {PRODUCTS_LIST.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      onClick={onClose}
                      aria-current={
                        pathname === product.href ? "page" : undefined
                      }
                      className={`block min-h-11 rounded-lg p-3 ${focusRing}`}
                    >
                      <span className="block text-sm font-semibold leading-5 text-[#3E4095]">
                        {product.name}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#7D7D7D]">
                        {product.description}
                      </span>
                    </Link>
                  ))}
                  <div className="space-y-2 border-t border-white/15 p-3">
                    <Link
                      href="/contact-sales"
                      onClick={onClose}
                      className={`flex min-h-11 items-center text-[#3E4095] text-sm font-semibold ${focusRing}`}
                    >
                      Core Banking Solution · Book a call
                    </Link>
                    <a
                      href="/image/code-of-practice.pdf"
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex min-h-11 items-center text-[#3E4095] text-sm underline underline-offset-4 ${focusRing}`}
                    >
                      Read the code of practice
                    </a>
                  </div>
                </div>
              )}
              <a
                href={docsUrl}
                onClick={onClose}
                className={`flex min-h-12 items-center py-3 text-base font-semibold ${focusRing}`}
              >
                Developers
              </a>
              <Link
                href="/about"
                onClick={onClose}
                className={`flex min-h-12 items-center py-3 text-base font-semibold ${focusRing}`}
              >
                About Us
              </Link>
              <Link
                href="/careers"
                onClick={onClose}
                className={`flex min-h-12 items-center py-3 text-base font-semibold ${focusRing}`}
              >
                Careers
              </Link>
            </nav>
            <div className="mt-5 flex flex-col gap-3 border-t border-white/15 pt-5">
              <a
                href={docsUrl}
                onClick={onClose}
                className={`flex min-h-12 items-center justify-center rounded-md border border-white px-4 text-sm font-semibold ${focusRing}`}
              >
                View API Docs
              </a>
              <Link
                href="/book-demo"
                onClick={onClose}
                className={`flex min-h-12 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-[#3e4095] ${focusRing}`}
              >
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [top, setTop] = useState(0);
  const requestClose = useCallback(() => setClosing(true), []);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen(false);
    setClosing(false);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    const updateTop = () => {
      const navbar = triggerRef.current?.closest("header, nav");
      setTop(navbar?.getBoundingClientRect().bottom ?? 0);
    };
    updateTop();
    window.addEventListener("resize", updateTop);
    return () => window.removeEventListener("resize", updateTop);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-haspopup="dialog"
        onClick={() => {
          if (open) requestClose();
          else {
            setTop(
              triggerRef.current
                ?.closest("header, nav")
                ?.getBoundingClientRect().bottom ?? 0,
            );
            setOpen(true);
          }
        }}
        className={`inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-white/70 text-white lg:hidden ${focusRing}`}
      >
        {open ? (
          <X size={24} aria-hidden="true" />
        ) : (
          <Menu size={24} aria-hidden="true" />
        )}
      </button>
      {open &&
        createPortal(
          <MobileNavigationPanel
            onClose={requestClose}
            onExited={close}
            closing={closing}
            top={top}
          />,
          document.body,
        )}
    </>
  );
}
