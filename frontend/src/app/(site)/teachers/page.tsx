import TeachersPage from "@/appPages/site/components/pages/TeachersPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мугалимдер | N3 Экспериментальная гимназия",
  description: "Биздин квалификациялуу жана тажрыйбалуу мугалимдер жамааты.",
  openGraph: {
    title: "Педагогический состав N3 Экспериментальной гимназии",
    description: "Опытные и квалифицированные преподаватели",
  },
  canonical: "https://3-gymnasium.kg/teachers/",
};

const page = () => <TeachersPage />;

export default page;
