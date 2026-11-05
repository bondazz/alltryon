import type { Metadata, Viewport } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alltryon.com"),
  title: {
    default: "alltryon. — Digital Haute-Couture Try-On | AI Virtual Fitting Room",
    template: "%s | alltryon.",
  },
  description:
    "alltryon. Experience any garment on your real body with zero guesswork. High-precision neural AI virtual fitting room with instant floating widget for Trendyol, Zara & global fashion.",
  applicationName: "alltryon",
  authors: [{ name: "alltryon Atelier Team", url: "https://alltryon.com" }],
  generator: "Next.js",
  keywords: [
    "alltryon",
    "alltryon.",
    "alltryon app",
    "alltryon virtual try-on",
    "virtual try-on",
    "ai try on app",
    "virtual fitting room",
    "trendyol virtual try on",
    "zara virtual fitting",
    "online geyim sinaq",
    "fashion ai app",
    "paltar sınamaq tətbiqi",
    "digital couture atelier",
    "ai stylist",
    "zero return shopping",
    "virtual dressing room",
  ],
  referrer: "origin-when-cross-origin",
  creator: "ALLTRYON",
  publisher: "ALLTRYON",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://alltryon.com",
    languages: {
      "en-US": "https://alltryon.com",
      "az-AZ": "https://alltryon.com?lang=az",
      "tr-TR": "https://alltryon.com?lang=tr",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["az_AZ", "tr_TR"],
    url: "https://alltryon.com",
    title: "ALLTRYON — Looks better on you. | Digital Haute-Couture Try-On",
    description:
      "Try on any garment on your authentic photo before you buy. True-to-life fabric weave, exact drape, zero sizing guesswork.",
    siteName: "ALLTRYON",
    images: [
      {
        url: "/assets/hero_editorial.png",
        width: 1200,
        height: 630,
        alt: "ALLTRYON — Haute-Couture Virtual Try-On Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALLTRYON — Digital Haute-Couture Try-On",
    description:
      "Experience any garment on your real body before checkout. Works over Trendyol, Zara, and Instagram.",
    images: ["/assets/hero_editorial.png"],
    creator: "@alltryon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data (JSON-LD)
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ALLTRYON",
    operatingSystem: "iOS, Android, Web",
    applicationCategory: "LifestyleApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "8420",
    },
    description:
      "High-precision generative neural virtual fitting room and shopping assistant with persistent floating widget for e-commerce stores.",
    url: "https://alltryon.com",
    screenshot: "https://alltryon.com/assets/app_mockup.png",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ALLTRYON",
    url: "https://alltryon.com",
    logo: "https://alltryon.com/assets/logo.png",
    sameAs: [
      "https://instagram.com/alltryon",
      "https://twitter.com/alltryon",
      "https://tiktok.com/@alltryon",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ALLTRYON digər tətbiqlərdən (məsələn Trendyol və ya Zara) geyimləri necə sınaqdan keçirir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ALLTRYON Üzən Try-On Düyməsi (Floating Widget) ilə təchiz olunub. Siz Trendyol və ya Zara-da gəzərkən məhsulun ekran şəklini çəkdikdə və ya 'Paylaş -> ALLTRYON' etdikdə, ekrandakı düymə geyimi anında aşkarlayır və Sınaq Studiyasında modelinizin üzərinə geyindirir.",
        },
      },
      {
        "@type": "Question",
        name: "Mənim şəkillərim necə qorunur və silinə bilirmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bütün şəxsi portretləriniz tam məxfi saxlanılır. Siz istənilən vaxt şəkli sildikdə, o serverlərdən dərhal və birdəfəlik silinir.",
        },
      },
      {
        "@type": "Question",
        name: "Birdən çox geyimi (məsələn köynək və şalvar) eyni vaxtda kombin edə bilərəmmi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bəli! ALLTRYON-un yeni modulyar Slot arxitekturası sayəsində Geyim 1 (üst), Geyim 2 (alt) və əlavə olaraq Geyim 3 (aksessuar/pencək) əlavə edərək tam kombinləri real modeliniz üzərində sınaqdan keçirə bilərsiniz.",
        },
      },
    ],
  };

  return (
    <html lang="az" className={`${geistSans.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-[#F7F7F2] text-[#121212] antialiased selection:bg-[#C6FF00] selection:text-[#121212] min-h-screen">
        {children}
      </body>
    </html>
  );
}
