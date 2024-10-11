import Search from "@/appPages/site/components/pages/search/Search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Издөө | N3 Экспериментальная гимназия",
  description: "Гимназиянын сайтынан маалымат издөө.",
  openGraph: {
    title: "Поиск по сайту гимназии",
    description: "Быстрый доступ к нужной информации",
  },
  alternates: {
    canonical: "https://3-gymnasium.kg/search/",
  },
};

const page = () => <Search />;

export default page;
