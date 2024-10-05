"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetGalleryQuery } from "@/redux/api/gallery";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import scss from "./GalleryContent.module.scss";

const GalleryContent: React.FC = () => {
  const { data } = useGetGalleryQuery();
  const { isKyrgyz, t } = useLanguageStore();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
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

  const handlePrevImage = () => {
    if (data && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex === null || prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    }
  };

  const handleNextImage = () => {
    if (data && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => (prevIndex === null || prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }
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
            {data?.slice(0, 6).map((item, index) => (
              <div key={index} className={scss.galleryItem} onClick={() => handleImageClick(index)}>
                <div className={scss.imageWrapper}>
                  <Image src={item.image} alt="img" layout="fill" objectFit="cover" quality={75} />
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

      {currentImageIndex !== null && data && (
        <div className={scss.modalOverlay} onClick={handleCloseZoom}>
          <div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={scss.closeButton} onClick={handleCloseZoom}>
              <AiOutlineClose />
            </button>
            <div className={scss.imageContainer}>
              <Image
                src={data[currentImageIndex].image}
                alt="Zoomed Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <button className={`${scss.navButton} ${scss.prevButton}`} onClick={handlePrevImage}>
              <BiChevronLeft />
            </button>
            <button className={`${scss.navButton} ${scss.nextButton}`} onClick={handleNextImage}>
              <BiChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryContent;