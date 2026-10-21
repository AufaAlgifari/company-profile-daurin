import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DaurIn - Platform Ekosistem Daur Ulang Inovatif",
  description:
    "DaurIn adalah platform aplikasi mobile yang menghubungkan pengguna dengan kolektor sampah lokal dalam satu sistem digital. Pilah Sampahmu, Mulai dari DaurIn!",
  icons: {
    icon: [
      { url: "/assets/daurin_icon.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/assets/daurin_icon.png",
    apple: "/assets/daurin_icon.png",
  },
  keywords: [
    "DaurIn",
    "daur ulang",
    "sampah anorganik",
    "kolektor sampah",
    "platform daur ulang",
    "ekonomi sirkular",
    "UNSOED",
    "e-wallet",
    "poin sampah",
    "ESG",
    "EPR",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-daurin-cream text-daurin-dark selection:bg-daurin-lime selection:text-white">
        {children}
      </body>
    </html>
  );
}
