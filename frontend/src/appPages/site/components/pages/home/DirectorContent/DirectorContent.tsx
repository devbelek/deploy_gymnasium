import Image from "next/image";
import scss from "./DirectorContent.module.scss";
import director from "../../../../../../assets/images/Rectangle 719.png";
const DirectorContent = () => {
  return (
    <section className={scss.content}>
      <div className="container">
        <div className={scss.directorContent}>
          <div className={scss.image}>
            <div className={scss.bg1}></div>
            <div className={scss.bg2}></div>
            <Image
              src={director}
              alt="director"
              width={356}
              height={557}
              priority
              quality={100}
            />
          </div>
          <div className={scss.title}>
            <h1>Мадаминов Гапыр Маматкулович</h1>
            <p>
              родился 17 августа 1958 года в Сулюкте, Баткенская
              <br /> область. Автор более 16 трудов. В 1996 году открыл <br />
              <span>школу-гимназию</span>
              в Лейлекском районе. Школа выросла <br />с 60 до 300 учеников,
              многие из которых добились
              <br /> успехов на олимпиадах и учатся за границей. <br /> <br /> В
              2004 году создал фонд «<span>Келечек</span>» для <br />{" "}
              старшеклассников, финансируемый из его средств, с <br />
              филиалами в нескольких городах. <br />
              Стал прототипом героя сериала «<span>Агай</span>». Гимназия <br />
              уделяет внимание инновациям и развитию учеников.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorContent;
