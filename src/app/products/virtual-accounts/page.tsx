import VirtualAccountsPage from "./VirtualAccountsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Accounts | Payvantage",
};

export default function Page() {
  return <VirtualAccountsPage />;
}
