import GraduatesPage from "@/appPages/site/components/pages/GraduatesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Выпускники | N3 Экспериментальная гимназия",
  description:
    "Биздин гимназиянын бүтүрүүчүлөрү - алардын ийгиликтери жана жетишкендиктери.",
  openGraph: {
    title: "Выпускники N3 Экспериментальной гимназии",
    description: "Истории успеха наших выпускников",
  },
  canonical: "https://3-gymnasium.kg/graduates/",
};

const page = () => <GraduatesPage />;
export default page;
