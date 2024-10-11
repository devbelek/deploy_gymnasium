import OlympaidTable from "@/appPages/site/components/pages/students/OlympaidTable/OlympaidTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Окуучулар | N3 Экспериментальная гимназия",
  description: "Биздин окуучулар - алардын жетишкендиктери жана таланттары.",
  openGraph: {
    title: "Ученики N3 Экспериментальной гимназии",
    description: "Наши талантливые и целеустремленные ученики",
  },
  canonical: "https://3-gymnasium.kg/studens/olympaidtable/",
};

const page = () => <OlympaidTable />;

export default page;
