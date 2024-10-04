"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGetGalleryQuery } from "@/redux/api/gallery";
import { useGetVideosQuery } from "@/redux/api/videos";
import scss from "./GalleryMainContent.module.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";

namespace GALLERY {
  export interface IGallery {
    id: number;
    image: string;
    title: string;
    content: string;
  }

  export type GetGalleryResponse = IGallery[];
  export type GetGalleryRequest = void;
}

namespace VIDEO {
  export interface IVideo {
    id: number;
    title: string;
    description: string;
    youtube_id: string;
  }

  export type GetVideosResponse = IVideo[];
  export type GetVideosRequest = void;
}

const getImageUrl = (imageUrl: string) => {
  const cleanUrl = imageUrl.replace(/^https?:\/\/[^/]+\/media/, "");
  return `${process.env.NEXT_PUBLIC_API}/media${cleanUrl}`;
};

const GalleryMainContent: React.FC = () => {
  const { data: galleryData } = useGetGalleryQuery();
  const { data: videosData } = useGetVideosQuery();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);
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
      const newIndex = currentImageIndex === 0 ? galleryData.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
    }
  };

  const handleNextImage = () => {
    if (galleryData && currentImageIndex !== null) {
      const newIndex = currentImageIndex < galleryData.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
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
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      quality={75}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
          {currentTab === "videos" && (
            <div className={scss.galleryGrid}>
              {videosData?.map((video: VIDEO.IVideo) => (
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
                      quality={75}
                    />
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
          <div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={scss.closeButton} onClick={handleCloseZoom}>
              <AiOutlineClose />
            </button>
            <div className={scss.imageContainer}>
              <Image
                src={getImageUrl(galleryData[currentImageIndex].image)}
                alt={galleryData[currentImageIndex].title}
                layout="fill"
                objectFit="contain"
              />
            </div>
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
          <div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
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
