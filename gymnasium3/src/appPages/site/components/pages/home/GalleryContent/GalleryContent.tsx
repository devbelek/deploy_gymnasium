"use client";
import { useGetGalleryQuery } from "@/redux/api/gallery";
import scss from "./GalleryContent.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GalleryContent = () => {
  const { data } = useGetGalleryQuery();
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/gallery");
  };

  return (
    <section className={scss.GalleryMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.galleryHead}>
            <h1>Фотогалерея</h1>
            <hr />
          </div>
          <div className={scss.gallery_card}>
            {data
              ?.map((item, index) => (
                <div key={index} className={scss.galleryItem}>
                  <Image
                    src={item.image}
                    alt="img"
                    width={700}
                    height={500}
                    priority
                    quality={70}
                  />
                </div>
              ))
              .slice(0, 6)}
          </div>
          <div className={scss.buttonContainer}>
            <button className={scss.button} onClick={handleNavigate}>
              Вся галерея
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryContent;
