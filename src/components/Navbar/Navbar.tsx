"use client";

import Link from "next/link";
import Image from "next/image";
import { Anta } from "next/font/google";

const anta = Anta({
  weight: "400",
  subsets: ["latin"],
});

const navItems = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Registration", href: "/registration" },
  { label: "Resources", href: "/resources" },
  { label: "FAQs", href: "/faqs" },
  { label: "Photos", href: "/photos" },
];

export default function Navbar() {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          minHeight: "88px",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          gap: "32px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
            paddingTop: "4px",
          }}
        >
          <Image
            src="/durhamone logo.png"
            alt="DurhamONE"
            width={480}
            height={140}
            priority
            style={{
              width: "260px",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "44px",
            marginLeft: "auto",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={anta.className}
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "18px",
                lineHeight: "1",
                fontWeight: 400,
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}