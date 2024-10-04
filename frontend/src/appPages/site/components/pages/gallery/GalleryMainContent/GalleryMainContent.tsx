"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useGetGalleryQuery } from "@/redux/api/gallery";
import scss from "./GalleryMainContent.module.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface ZoomedImageProps {
  images: GALLERY.IGallery[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ZoomedImage: React.FC<ZoomedImageProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentImage = images[currentIndex];

  return (
    <div className={scss.zoomedImageOverlay}>
      <div className={scss.zoomedImageWrapper}>
        <Image
          src={getImageUrl(currentImage.image)}
          alt={currentImage.content}
          layout="fill"
          objectFit="contain"
        />
        <button
          className={`${scss.navButton} ${scss.prevButton}`}
          onClick={onPrev}
        >
          <BiChevronLeft />
        </button>
        <button
          className={`${scss.navButton} ${scss.nextButton}`}
          onClick={onNext}
        >
          <BiChevronRight />
        </button>
        <button className={scss.closeButton} onClick={onClose}>
          X
        </button>
      </div>
      <div className={scss.imageCaption}>{currentImage.content}</div>
    </div>
  );
};

const getImageUrl = (imageUrl: string) => {
  const cleanUrl = imageUrl.replace(/^https?:\/\/[^/]+\/media/, '');
  return `${process.env.NEXT_PUBLIC_API}/media${cleanUrl}`;
};

const GalleryMainContent: React.FC = () => {
  const { data } = useGetGalleryQuery();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleCloseZoom = () => {
    setCurrentImageIndex(null);
  };

  const handlePrevImage = () => {
    if (data && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === null) {
          return data.length - 1;
        }
        return prevIndex > 0 ? prevIndex - 1 : data.length - 1;
      });
    }
  };

  const handleNextImage = () => {
    if (data && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === null) {
          return 0;
        }
        return prevIndex < data.length - 1 ? prevIndex + 1 : 0;
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNextImage();
    } else if (diff < -50) {
      handlePrevImage();
    }

    setTouchStart(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentImageIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") handleCloseZoom();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentImageIndex]);

  return (
    <section className={scss.GalleryMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.galleryHead}>
            <h1>Фотогалерея</h1>
            <hr />
          </div>
          <div className={scss.gallery_card}>
            {data?.map((item: GALLERY.IGallery, index: number) => (
              <div key={index} className={scss.galleryItem}>
                <span onClick={() => handleImageClick(index)}>
                  <Image
                    src={getImageUrl(item.image)}
                    alt={item.content}
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {currentImageIndex !== null && data && (
        <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <ZoomedImage
            images={data}
            currentIndex={currentImageIndex}
            onClose={handleCloseZoom}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryMainContent;