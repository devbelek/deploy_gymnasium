import DirectorContent from "./home/DirectorContent/DirectorContent";
import GalleryContent from "./home/GalleryContent/GalleryContent";
import GraduatesContent from "./home/GraduatesContent/GraduatesContent";
import HeroContent from "./home/HeroContent/HeroContent";
import NewsContent from "./home/NewsContent/NewsContent";
import StudentsContent from "./home/StudentsContent/StudentsContent";
import TeachersContent from "./home/TeachersContent/TeachersContent";
import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <>
      <div className={scss.content}>
        <HeroContent />
        <NewsContent />
        <div className={scss.personas}>
          <StudentsContent />
          <TeachersContent />
        </div>
        <GraduatesContent />
        <GalleryContent />
        <DirectorContent />
      </div>
    </>
  );
};

export default HomePage;
