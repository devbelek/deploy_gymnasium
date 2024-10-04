"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useGetGalleryQuery } from "@/redux/api/gallery";
import { useGetVideosQuery } from "@/redux/api/videos";
import scss from "./GalleryMainContent.module.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";

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
          quality={100}
          priority
        />
        <button
          className={`${scss.navButton} ${scss.prevButton}`}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <BiChevronLeft />
        </button>
        <button
          className={`${scss.navButton} ${scss.nextButton}`}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <BiChevronRight />
        </button>
        <button
          className={scss.closeButton}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className={scss.imageCaption}>{currentImage.content}</div>
    </div>
  );
};

const getImageUrl = (imageUrl: string) => {
  const cleanUrl = imageUrl.replace(/^https?:\/\/[^/]+\/media/, "");
  return `${process.env.NEXT_PUBLIC_API}/media${cleanUrl}`;
};

const GalleryMainContent: React.FC = () => {
  const { data: galleryData } = useGetGalleryQuery();
  const { data: videosData } = useGetVideosQuery();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const [currentTab, setCurrentTab] = useState<"photos" | "videos">("photos");
  const [selectedVideo, setSelectedVideo] = useState<VIDEO.IVideo | null>(null);

  const handleTabClick = (tab: "photos" | "videos") => {
    setCurrentTab(tab);
    setCurrentImageIndex(null);
    setSelectedVideo(null);
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleCloseZoom = () => {
    setCurrentImageIndex(null);
  };

  const handlePrevImage = () => {
    if (galleryData && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === null) {
          return galleryData.length - 1;
        }
        return prevIndex > 0 ? prevIndex - 1 : galleryData.length - 1;
      });
    }
  };

  const handleNextImage = () => {
    if (galleryData && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) => {
        if (prevIndex === null) {
          return 0;
        }
        return prevIndex < galleryData.length - 1 ? prevIndex + 1 : 0;
      });
    }
  };

  const handleVideoClick = (video: VIDEO.IVideo) => {
    setSelectedVideo(video);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className={scss.GalleryMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.galleryHead}>
            <h1>Галерея</h1>
            <hr />
            <div className={scss.tabs}>
              <button
                className={currentTab === "photos" ? scss.activeTab : ""}
                onClick={() => handleTabClick("photos")}
              >
                Фотогалерея
              </button>
              <button
                className={currentTab === "videos" ? scss.activeTab : ""}
                onClick={() => handleTabClick("videos")}
              >
                Видео-галерея
              </button>
            </div>
          </div>
          {currentTab === "photos" && (
            <div className={scss.galleryGrid}>
              {galleryData?.map((item: GALLERY.IGallery, index: number) => (
                <div
                  key={index}
                  className={scss.galleryItem}
                  onClick={() => handleImageClick(index)}
                >
                  <div className={scss.imageWrapper}>
                    <Image
                      src={getImageUrl(item.image)}
                      alt={item.content}
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                    />
                  </div>
                  <div className={scss.overlay}>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {currentTab === "videos" && (
            <div className={scss.galleryGrid}>
              {videosData?.map((video) => (
                <div
                  key={video.id}
                  className={scss.galleryItem}
                  onClick={() => handleVideoClick(video)}
                >
                  <div className={scss.imageWrapper}>
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`}
                      alt={video.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={scss.overlay}>
                    <p>{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Модальное окно для просмотра изображения */}
      {currentImageIndex !== null && currentTab === "photos" && galleryData && (
        <div className={scss.modalOverlay} onClick={handleCloseZoom}>
          <div
            className={scss.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={scss.closeButton} onClick={handleCloseZoom}>
              <AiOutlineClose />
            </button>
            <Image
              src={getImageUrl(galleryData[currentImageIndex].image)}
              alt={galleryData[currentImageIndex].content}
              layout="fill"
              objectFit="contain"
            />
            <h2>{galleryData[currentImageIndex].title}</h2>
            <p>{galleryData[currentImageIndex].content}</p>
            <button
              className={`${scss.navButton} ${scss.prevButton}`}
              onClick={handlePrevImage}
            >
              <BiChevronLeft />
            </button>
            <button
              className={`${scss.navButton} ${scss.nextButton}`}
              onClick={handleNextImage}
            >
              <BiChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* Модальное окно для воспроизведения видео */}
      {selectedVideo && currentTab === "videos" && (
        <div className={scss.modalOverlay} onClick={handleCloseVideo}>
          <div
            className={scss.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={scss.closeButton} onClick={handleCloseVideo}>
              <AiOutlineClose />
            </button>
            <div className={scss.videoWrapper}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${selectedVideo.youtube_id}`}
                controls
                width="100%"
                height="100%"
              />
            </div>
            <h2>{selectedVideo.title}</h2>
            <p>{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryMainContent;
