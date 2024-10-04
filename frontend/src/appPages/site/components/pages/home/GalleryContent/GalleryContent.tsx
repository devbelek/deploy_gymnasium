"use client";
import { useGetGalleryQuery } from "@/redux/api/gallery";
import scss from "./GalleryContent.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const GalleryContent = () => {
  const { data } = useGetGalleryQuery();
  const { isKyrgyz, t } = useLanguageStore();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/gallery");
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleCloseZoom = () => {
    setCurrentImageIndex(null);
  };

  return (
    <section className={scss.GalleryMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.galleryHead}>
            <h1>{t("Сүрөт галереясы", "Фотогалерея")}</h1>
            <hr />
          </div>
          <div className={scss.galleryGrid}>
            {data
              ?.slice(0, 6)
              .map((item, index) => (
                <div
                  key={index}
                  className={scss.galleryItem}
                  onClick={() => handleImageClick(index)}
                >
                  <div className={scss.imageWrapper}>
                    <Image
                      src={item.image}
                      alt="img"
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                    />
                  </div>
                </div>
              ))}
          </div>
          <div className={scss.buttonContainer}>
            <button className={scss.button} onClick={handleNavigate}>
              {t("Бүтүндөй галерея", "Вся галерея")}
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно для зума изображения */}
      {currentImageIndex !== null && data && (
        <div className={scss.modalOverlay} onClick={handleCloseZoom}>
          <div
            className={scss.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={scss.closeButton} onClick={handleCloseZoom}>
              <AiOutlineClose />
            </button>
            <Image
              src={data[currentImageIndex].image}
              alt="Zoomed Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryContent;
