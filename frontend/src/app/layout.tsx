"use client";
import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.scss";
import LayoutClient from "./layout.client";

const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://3-gymnasium.kg"),
  title: {
    default: "N3 Экспериментальная гимназия имени Гапыра Мадаминова",
    template: "%s | N3 Экспериментальная гимназия",
  },
  description:
    "N3 Экспериментальная гимназия имени Гапыра Мадаминова в Кыргызстане - инновационное учебное заведение, применяющее современные технологии для развития творческих и интеллектуальных способностей учеников.",
  keywords: [
    "3-гимназия",
    "экспериментальная гимназия",
    "Гапыр Мадаминов",
    "образование в Кыргызстане",
    "инновационное обучение",
  ],
  authors: [{ name: "N3 Экспериментальная гимназия" }],
  creator: "N3 Экспериментальная гимназия",
  publisher: "N3 Экспериментальная гимназия",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_KG",
    url: "https://3-gymnasium.kg",
    siteName: "N3 Экспериментальная гимназия имени Гапыра Мадаминова",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} ${notoSans.className}`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
