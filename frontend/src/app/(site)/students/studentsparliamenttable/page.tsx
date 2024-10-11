import StudentsParliamentTable from "@/appPages/site/components/pages/students/StudentsParliamentTable/StudentsParliamentTable";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Окуучулар | N3 Экспериментальная гимназия",
  description: "Биздин окуучулар - алардын жетишкендиктери жана таланттары.",
  openGraph: {
    title: "Ученики N3 Экспериментальной гимназии",
    description: "Наши талантливые и целеустремленные ученики",
  },
};

const page = () => <StudentsParliamentTable />;

export default page;
