import ProfilePage from "@/appPages/site/components/pages/ProfilePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Профиль | N3 Экспериментальная гимназия",
  description:
    "Окуучунун жеке профили - жетишкендиктер, баалар жана расписание.",
  openGraph: {
    title: "Личный профиль ученика",
    description: "Доступ к персональной информации и успеваемости",
  },
  canonical: "https://3-gymnasium.kg/profile/",
};

const page = () => <ProfilePage />;

export default page;
