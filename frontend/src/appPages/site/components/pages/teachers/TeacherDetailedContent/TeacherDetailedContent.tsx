"use client";
import { useParams } from "next/navigation";
import scss from "./TeacherDetailedContent.module.scss";
import { useGetDetTeacherQuery } from "@/redux/api/teachers";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { useLanguageStore } from "@/stores/useLanguageStore";

const TeacherDetailedContent = () => {
  const { teacher } = useParams();
  const { data, isLoading, error } = useGetDetTeacherQuery(String(teacher));
  const { isKyrgyz, t } = useLanguageStore();

  if (isLoading) {
    return <div>{t("Жүктөлүүдө...", "Загрузка...")}</div>;
  }

  if (error) {
    return (
      <div>
        {t("Маалыматты жүктөөдө ката кетти", "Ошибка при загрузке данных")}
      </div>
    );
  }

  return (
    <section className={scss.content}>
      <div className="container">
        <div className={scss.contentDetail}>
          <div className={scss.detail}>
            <Image
              src={data?.image!}
              alt="img"
              width={700}
              height={500}
              quality={70}
              priority
            />
            <div className={scss.detailText}>
              <h1>
                {data?.surname} {data?.name} {data?.last_name}
              </h1>
              <div className={scss.oput}>
                <h3>
                  {t("Мугалим", "Учитель")}:{" "}
                  {isKyrgyz ? data?.subject_ky : data?.subject_ru}
                </h3>
                <h3>
                  {t("Тажрыйба", "Опыт")}: {data?.experience}
                </h3>
              </div>
              <div className={scss.education}>
                <h3>{t("Билими", "Образование")}:</h3>
                <p>{isKyrgyz ? data?.education_ky : data?.education_ru}</p>
              </div>
              <div className={scss.share}>
                <h3>{t("Бөлүшүү", "Поделиться")}:</h3>
                <div className={scss.shareIcon}>
                  <a className={scss.facebook}>
                    <FaFacebook />
                  </a>
                  <a className={scss.telegram}>
                    <FaTelegram />
                  </a>
                  <a className={scss.vk}>
                    <FaVk />
                  </a>
                  <a className={scss.instagram}>
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.success}>
            <h3>{t("Ийгиликтери", "Успехи")}:</h3>
            <p>{isKyrgyz ? data?.successes_ky : data?.successes_ru}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetailedContent;
