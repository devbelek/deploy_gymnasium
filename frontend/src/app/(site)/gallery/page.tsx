import GalleryPage from "@/appPages/site/components/pages/GalleryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея | N3 Экспериментальная гимназия",
  description: "Биздин гимназиянын жашоосунан фото жана видео материалдар.",
  openGraph: {
    title: "Галерея N3 Экспериментальной гимназии",
    description: "Яркие моменты школьной жизни в фотографиях и видео",
  },
  alternates: {
    canonical: "https://3-gymnasium.kg/gallery/",
  },
};

const page = () => <GalleryPage />;

export default page;
