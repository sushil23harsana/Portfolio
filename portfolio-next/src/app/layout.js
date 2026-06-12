import "./globals.css";
import {
  Instrument_Serif,
  Space_Grotesk,
  JetBrains_Mono,
  Yellowtail,
} from "next/font/google";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk-var",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-var",
});

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script-var",
});

export const metadata = {
  metadataBase: new URL("https://sushil-harsana.vercel.app"),
  title: "Sushil Harsana — Software Developer · Backend & Generative AI",
  description:
    "Product-minded software developer building full-fledged, AI-native SaaS products end-to-end — backend architecture, distributed systems and Generative-AI infrastructure with Go, Python & Next.js.",
  authors: [{ name: "Sushil Harsana" }],
  keywords: [
    "Sushil Harsana",
    "Software Developer",
    "Backend Engineer",
    "Golang",
    "Python",
    "Next.js",
    "Generative AI",
    "SaaS",
  ],
  openGraph: {
    title: "Sushil Harsana — Software Developer",
    description:
      "Product-minded engineer building AI-native SaaS products end-to-end.",
    type: "website",
    images: ["/portrait.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushil Harsana — Software Developer",
    description:
      "Product-minded engineer building AI-native SaaS products end-to-end.",
    images: ["/portrait.png"],
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${grotesk.variable} ${mono.variable} ${yellowtail.variable}`}
    >
      <body>
        <div className="nb-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
