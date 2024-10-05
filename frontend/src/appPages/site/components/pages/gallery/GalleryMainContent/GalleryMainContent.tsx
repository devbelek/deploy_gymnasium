"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGetGalleryQuery } from "@/redux/api/gallery";
import { useGetVideosQuery } from "@/redux/api/videos";
import scss from "./GalleryMainContent.module.scss";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ReactPlayer from "react-player";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const getImageUrl = (imageUrl: string) => {
  const cleanUrl = imageUrl.replace(/^https?:\/\/[^/]+\/media/, "");
  return `${process.env.NEXT_PUBLIC_API}/media${cleanUrl}`;
};

const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
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
      setCurrentImageIndex((prevIndex) =>
        prevIndex === null ? galleryData.length - 1 :
        prevIndex > 0 ? prevIndex - 1 : galleryData.length - 1
      );
    }
  };

  const handleNextImage = () => {
    if (galleryData && currentImageIndex !== null) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === null ? 0 :
        prevIndex < galleryData.length - 1 ? prevIndex + 1 : 0
      );
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
                </div>
              ))}
            </div>
          )}
          {currentTab === "videos" && (
            <div className={scss.galleryGrid}>
              {videosData?.map((video) => {
                const youtubeId = getYoutubeId(video.youtube_id);
                return (
                  <div
                    key={video.id}
                    className={scss.galleryItem}
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className={scss.imageWrapper}>
                      {youtubeId && (
                        <Image
                          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                      <div className={scss.playButton}>
                        <FaPlay />
                      </div>
                    </div>
                    <div className={scss.videoTitle}>{video.title}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {currentImageIndex !== null && currentTab === "photos" && galleryData && (
        <div className={scss.modalOverlay} onClick={handleCloseZoom}>
          <div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={scss.closeButton} onClick={handleCloseZoom}>
              <AiOutlineClose />
            </button>
            <div className={scss.imageContainer}>
              <Image
                src={getImageUrl(galleryData[currentImageIndex].image)}
                alt={galleryData[currentImageIndex].content}
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

      {selectedVideo && currentTab === "videos" && (
        <div className={scss.modalOverlay} onClick={handleCloseVideo}>
          <div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={scss.closeButton} onClick={handleCloseVideo}>
              <AiOutlineClose />
            </button>
            <div className={scss.videoWrapper}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${getYoutubeId(selectedVideo.youtube_id)}`}
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryMainContent;