import GalleryMainContent from "./gallery/GalleryMainContent/GalleryMainContent";
import scss from "./GalleryPage.module.scss";
const GalleryPage = () => {
  return (
    <>
      <div className={scss.content}>
        <GalleryMainContent />
      </div>
    </>
  );
};

export default GalleryPage;
