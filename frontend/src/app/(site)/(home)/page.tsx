import HomePage from "@/appPages/site/components/pages/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  canonical: "https://3-gymnasium.kg/",
  title: "Башкы бет",
  description:
    "N3 Экспериментальная гимназия имени Гапыра Мадаминова - инновационное образование для будущих лидеров Кыргызстана",
  openGraph: {
    title: "Башкы бет | N3 Экспериментальная гимназия",
    description:
      "Добро пожаловать в N3 Экспериментальную гимназию имени Гапыра Мадаминова - лидера инновационного образования в Кыргызстане",
  },
};

const page = () => <HomePage />;
export default page;
