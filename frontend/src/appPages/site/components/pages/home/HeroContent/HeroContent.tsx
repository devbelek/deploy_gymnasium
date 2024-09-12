import Image from "next/image";
import scss from "./HeroContent.module.scss";
import heroImage from "../../../../../../assets/images/image 3.png";

const HeroContent = () => {
  return (
    <section id={scss.content}>
      <div className="container">
        {/* Circular Profile Image */}
        <div className={scss.content}>
          <div className={scss.profileImage}>
            <Image src={heroImage} alt="Profile" />
            <div className={scss.text}>
              <h1>№3 Экспериментальная гимназия </h1>
              <h2>Лейлекского района</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={scss.subtext}></div>
    </section>
  );
};

export default HeroContent;
