import NewsDetailContent from "@/appPages/site/components/pages/news/NewsDetailCotnent/NewsDetailContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Жаңылыктар | N3 Экспериментальная гимназия",
  description: "Гимназиянын акыркы жаңылыктары, окуялары жана жетишкендиктери.",
  openGraph: {
    title: "Новости N3 Экспериментальной гимназии",
    description: "Актуальные события и достижения нашей гимназии",
  },
};

const page = () => <NewsDetailContent />;

export default page;
