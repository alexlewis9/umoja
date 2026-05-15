import type { Metadata } from "next";
import { Anta, Geist_Mono, Lato } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const anta = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "UMOJA",
  description: "UMOJA Basketball Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${geistMono.variable} ${anta.variable}`}
      >
        <Providers>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Navbar /> */}
            <main style={{ flex: 1, backgroundColor: "white" }}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
