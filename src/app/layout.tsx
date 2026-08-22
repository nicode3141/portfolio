import "@/app/styles/globals.css";
import { interFont, montserratFont, nunitoFont } from "@/app/styles/fonts/font";
import { type Metadata, type Viewport } from "next";

const baseUrl = "https://nicodenetworks.com";

export const metadata: Metadata = {
  title: {
    default: "Nicolas Pfeifer - Portfolio",
    template: "%s",
  },
  description: "Software Developer and CS Student",
  authors: [
    {
      name: "nicode3141",
      url: "https://github.com/nicode3141",
    },
  ],
  keywords: [
    "Nicolas Pfeifer",
    "Portfolio",
    "Software Developer",
    "Computer Science",
    "Heidelberg",
    "Software Entwickler",
    "Programmierer Heidelberg",
  ],
  alternates: {
    canonical: baseUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Audlect",
    url: baseUrl,
    logo: `${baseUrl}/app-logo.svg`,
    description: "Collaborative music voting for events, parties, and venues.",
    sameAs: ["https://github.com/nicode3141", "https://x.com/nicode3141"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Audlect",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/voting?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Audlect",
    url: baseUrl,
    description:
      "Collaborative music voting app for events, parties, and venues. Guests vote songs into a shared playlist in real time.",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    screenshot: `${baseUrl}/images/landing/product-shot.png`,
    featureList: [
      "Real-time song voting",
      "Custom voting deadlines",
      "Shared event playlists",
      "Song preview playback",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppSchema),
          }}
        />

        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Audlect" />
        <meta name="apple-mobile-web-app-title" content="Audlect" />
        <link rel="apple-touch-icon" href="/apple-icon-180.png" />
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </head>
      <body
        className={`${interFont.variable} ${montserratFont.variable} ${nunitoFont.variable} antialiase min-h-screen
					bg-white font-inter dark:bg-[#161616] selection:bg-black selection:text-white `}
      >
        {children}
      </body>
    </html>
  );
}
