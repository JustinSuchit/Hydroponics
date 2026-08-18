import type { Metadata } from "next";
import "./globals.css";

const hydroponicsOgImage = "/images/hydroponics/hero.png";

export const metadata: Metadata = {
  title: "Company Name | Hydroponic Solutions Trinidad & Tobago",
  description:
    "Modern hydroponic solutions designed to support efficient and sustainable growing in Trinidad & Tobago.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Company Name | Hydroponic Solutions Trinidad & Tobago",
    description:
      "Modern hydroponic solutions designed to support efficient and sustainable growing in Trinidad & Tobago.",
    type: "website",
    locale: "en_TT",
    images: [
      {
        url: hydroponicsOgImage,
        width: 1536,
        height: 1024,
        alt: "Hydroponic lettuce growing in a modern greenhouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Name | Hydroponic Solutions Trinidad & Tobago",
    description:
      "Modern hydroponic solutions designed to support efficient and sustainable growing in Trinidad & Tobago.",
    images: [hydroponicsOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
