import type { Metadata } from "next";
import ContactPage from "../contact";

export const metadata: Metadata = {
  title: "Contact Us | UMOJA",
  description: "Contact DurhamONE through the UMOJA website.",
};

export default function Page() {
  return <ContactPage />;
}
