import Image from "next/image";
import scss from "./GraduatesContent.module.scss";
import graduate from "../../../../../../assets/images/Group 1000001472.png";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const GraduatesContent = () => {
  return (
    <section className={scss.content}>
      <div className="container">
        <h1>Выпускники</h1>
        <hr />
        <div className={scss.graduateContent}>
          <div className={scss.title}>
            <p>
              Дорогая школа, <br />
              Благодарю вас за все знания и поддержку, <br /> которые я получил
              здесь. Благодаря <br /> вашему образованию я смог поступить в{" "}
              <br />
              престижный университет и добиться <br /> успехов в карьере. Ваш
              вклад в мое <br /> будущее неоценим.
            </p>
            <span>
              Керимбаева Айдай <br /> Выпускница 2022 года
            </span>
            <div className={scss.wrapper}>
              <GrLinkPrevious />
              <GrLinkNext />
            </div>
          </div>
          <div className={scss.image}>
            <Image src={graduate} alt="graduates" className={scss.graduates} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduatesContent;