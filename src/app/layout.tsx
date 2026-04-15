import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TBC Salon | The Barber Club — Madhapur, Hyderabad",
  description:
    "TBC Salon (The Barber Club) — Madhapur's premier grooming destination. Expert haircuts, hair color, bridal packages, facials & skincare. Book online 24/7.",
  keywords: [
    "TBC Salon",
    "The Barber Club",
    "salon Madhapur",
    "barber Hyderabad",
    "hair salon Madhapur",
    "bridal makeup Hyderabad",
    "haircut Madhapur",
    "hair coloring Hyderabad",
    "best salon Madhapur",
    "men's grooming Hyderabad",
  ],
  authors: [{ name: "TBC Salon" }],
  openGraph: {
    title: "TBC Salon | The Barber Club — Madhapur, Hyderabad",
    description:
      "Madhapur's premier grooming destination. Expert cuts, color, bridal packages & skincare. Book your appointment online.",
    url: "https://tbcsalon.in",
    siteName: "TBC Salon",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TBC Salon | The Barber Club — Madhapur, Hyderabad",
    description:
      "Expert haircuts, hair color, bridal & skincare at TBC Salon, Madhapur. Book now.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "TBC Salon — The Barber Club",
  description:
    "Premier grooming salon in Madhapur, Hyderabad offering haircuts, color treatments, bridal packages, and skincare.",
  url: "https://tbcsalon.in",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Madhapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.4435",
    longitude: "78.3772",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  priceRange: "₹₹",
  image: "https://tbcsalon.in/hero.png",
  sameAs: ["https://www.instagram.com/tbcsalonmadhapur"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-tbc-cream text-tbc-ink antialiased">
        {children}
      </body>
    </html>
  );
}
