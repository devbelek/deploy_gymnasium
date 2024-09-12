"use client";
import { useGetGalleryQuery } from "@/redux/api/gallery";
import scss from "./GalleryMainContent.module.scss";
import Image from "next/image";

const GalleryMainContent = () => {
  const { data } = useGetGalleryQuery();

  return (
    <section className={scss.GalleryMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.galleryHead}>
            <h1>Фотогалерея</h1>
            <hr />
          </div>
          <div className={scss.gallery_card}>
            {data?.map((item) => (
              <div key={item.id!} className={scss.galleryItem}>
                <Image
                  src={item.image}
                  alt="img"
                  width={700}
                  height={500}
                  priority
                  quality={70}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryMainContent;
