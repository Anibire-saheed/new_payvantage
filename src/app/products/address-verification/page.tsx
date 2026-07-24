import AddressVerificationPage from "./AddressVerificationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Address Verification | Payvantage",
};

export default function Page() {
  return <AddressVerificationPage />;
}
