import NewsPage from "@/appPages/site/components/pages/NewsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Жаңылыктар | N3 Экспериментальная гимназия",
  description: "Гимназиянын акыркы жаңылыктары, окуялары жана жетишкендиктери.",
  openGraph: {
    title: "Новости N3 Экспериментальной гимназии",
    description: "Актуальные события и достижения нашей гимназии",
  },
  canonical: "https://3-gymnasium.kg/news/",
};

const page = () => <NewsPage />;

export default page;
