import GraduatesMainContent from "@/appPages/site/components/pages/graduates/GraduatesMainContent/GraduatesMainContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Выпускники | N3 Экспериментальная гимназия",
  description:
    "Биздин гимназиянын бүтүрүүчүлөрү - алардын ийгиликтери жана жетишкендиктери.",
  openGraph: {
    title: "Выпускники N3 Экспериментальной гимназии",
    description: "Истории успеха наших выпускников",
  },
  alternates: {
    canonical: "https://3-gymnasium.kg/graduates/best_graduates/",
  },
};


const page = () => <GraduatesMainContent />;

export default page;
