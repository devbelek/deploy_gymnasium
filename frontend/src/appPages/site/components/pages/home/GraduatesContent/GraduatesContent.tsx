"use client";
import Image from "next/image";
import scss from "./GraduatesContent.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useGetSuccessfulGraduatesQuery } from "@/redux/api/successful_graduates";
import graduateFallback from "../../../../../../assets/images/Group 1000001472.png";
import { useLanguageStore } from "@/stores/useLanguageStore";

const GraduatesContent = () => {
  const { data } = useGetSuccessfulGraduatesQuery();
  const { isKyrgyz, t } = useLanguageStore();

  const graduateData = data && data.length > 0 ? data[0] : null;

  return (
    <section className={scss.content}>
      <div className="container">
        <h1>{t("Бүтүрүүчүлөр", "Выпускники")}</h1>
        <hr />
        <div className={scss.graduateContent}>
          <div className={scss.title}>
            <p>{graduateData?.content}</p>
            <span>
              {graduateData?.graduate?.name} {graduateData?.graduate?.last_name}
              <br />
              {t(
                `${graduateData?.graduate?.year} жылдын бүтүрүүчүсү`,
                `Выпускник ${graduateData?.graduate?.year} года`
              )}
            </span>
            <div className={scss.wrapper}>
              <GrLinkPrevious />
              <GrLinkNext />
            </div>
          </div>
          <div className={scss.image}>
            <Image
              src={graduateData?.image || graduateFallback}
              alt="graduates"
              width={340}
              height={340}
              quality={100}
              priority
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduatesContent;
