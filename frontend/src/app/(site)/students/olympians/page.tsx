import OlympaidsSelection from "@/appPages/site/components/pages/students/olympaidsSelection/olympaidsSelection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Окуучулар | N3 Экспериментальная гимназия",
  description: "Биздин окуучулар - алардын жетишкендиктери жана таланттары.",
  openGraph: {
    title: "Ученики N3 Экспериментальной гимназии",
    description: "Наши талантливые и целеустремленные ученики",
  },
  alternates: {
    canonical: "https://3-gymnasium.kg/studens/olympians/",
  },
};

const page = () => <OlympaidsSelection />;

export default page;
