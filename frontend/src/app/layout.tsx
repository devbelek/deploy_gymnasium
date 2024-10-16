import Script from "next/script";
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
    "Экспрементальная гимназия",
    "Гимназия Гапыр Мадаминова",
    "3 gymnasium",
    "3-гимназия Баткен",
    "образование в Кыргызстане",
    "N3 гимназия",
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
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "sWC8t61RsOMADPl4aT6U7ANIj7WhC68H6hsacwre4ZI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-7P6Z0V3Z3R`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7P6Z0V3Z3R');
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${notoSans.className}`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
