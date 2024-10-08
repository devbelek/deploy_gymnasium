"use client";
import Image from "next/image";
import scss from "./GraduatesContent.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useGetSuccessfulGraduatesQuery } from "@/redux/api/successful_graduates";
import graduateFallback from "../../../../../../assets/images/Group 1000001472.png";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useRouter } from "next/navigation";

const GraduatesContent = () => {
  const { data } = useGetSuccessfulGraduatesQuery();
  const { isKyrgyz, t } = useLanguageStore();

  const graduateData = data && data.length > 0 ? data[0] : null;

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/graduates");
  };

  return (
    <div id="content" className={scss.graduatesContent}>
      <h1>{t("Бүтүрүүчүлөр", "Выпускники")}</h1>

      <div className={scss.graduateCard}>
        {graduateData ? (
          <>
            <p>{graduateData?.content}</p>
            <p>
              {graduateData?.graduate?.name} {graduateData?.graduate?.last_name}
            </p>
            <p>
              {t(
                `${graduateData?.graduate?.year} жылдын бүтүрүүчүсү`,
                `Выпускник ${graduateData?.graduate?.year} года`
              )}
            </p>
          </>
        ) : (
          <Image
            src={graduateFallback}
            alt={t("Сүрөт жок", "Изображение отсутствует")}
            width={300}
            height={200}
          />
        )}
      </div>

      <div className={scss.buttonContainer}>
        <button onClick={handleNavigate}>
          {t("Жалпы бүтүрүүчүлөр", "Все выпускники")}
        </button>
      </div>
    </div>
  );
};

export default GraduatesContent;
