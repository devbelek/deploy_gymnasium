import DonationContent from "@/appPages/site/components/pages/fond/DonationContent/DonationContent";
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
    canonical: "https://3-gymnasium.kg/fond/donation/",
  },
};

const page = () => <DonationContent />;
export default page;
