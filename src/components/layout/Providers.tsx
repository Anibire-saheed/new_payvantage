"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/store/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            refetchOnReconnect: true,
          },
        },
      })
  );

  useEffect(() => {
    const isEventObject = (reason: unknown): boolean => {
      if (!reason) return true;
      if (typeof Event !== "undefined" && reason instanceof Event) return true;
      if (Object.prototype.toString.call(reason) === "[object Event]") return true;
      if (typeof reason === "object" && reason !== null && "isTrusted" in reason && "type" in reason) return true;
      if (
        typeof reason === "object" &&
        reason !== null &&
        "message" in reason &&
        typeof (reason as { message: unknown }).message === "string" &&
        (reason as { message: string }).message.includes("[object Event]")
      ) {
        return true;
      }
      return false;
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isEventObject(event.reason)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    const handleError = (event: ErrorEvent) => {
      if (isEventObject(event.error) || isEventObject(event)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection, true);
    window.addEventListener("error", handleError, true);
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection, true);
      window.removeEventListener("error", handleError, true);
    };
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
