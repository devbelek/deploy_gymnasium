import FondPage from "@/appPages/site/components/pages/FondPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фонд | N3 Экспериментальная гимназия",
  description:
    "Гимназиянын фонду - окуучуларга колдоо көрсөтүү жана билим берүү сапатын жогорулатуу үчүн.",
  openGraph: {
    title: "Фонд N3 Экспериментальной гимназии",
    description: "Поддержка талантливых учеников и развитие образования",
  },
  alternates: {
    canonical: "https://3-gymnasium.kg/fond/",
  },
};

const page = () => <FondPage />;

export default page;
