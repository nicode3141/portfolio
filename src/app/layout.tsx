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
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
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
					bg-white font-inter dark:bg-[#161616] selection:bg-neutral-800 selection:text-white `}
      >
        {children}
      </body>
    </html>
  );
}
