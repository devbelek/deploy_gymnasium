"use client";
import Image from "next/image";
import scss from "./StudentsContent.module.scss";
import student from "../../../../../../assets/images/student.png";
import circle from "../../../../../../assets/images/Ellipse 19.png";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";

const StudentsContent = () => {
  const router = useRouter();
  const { isKyrgyz, t } = useLanguageStore();

  return (
    <section id={scss.content}>
      <div className="container">
        <h1>{t("Биздин окуучулар", "Наши ученики")}</h1>
        <div className={scss.content}>
          <div className={scss.imageWrapper}>
            <Image
              src={circle}
              alt="background circle"
              className={scss.circle}
            />
            <Image
              src={student}
              width={900}
              height={500}
              quality={70}
              priority
              alt="student"
              className={scss.student}
            />
          </div>
          <button
            className={scss.button}
            onClick={() => router.push("/students")}
          >
            {t("Бардык окуучулар", "Все ученики")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentsContent;
