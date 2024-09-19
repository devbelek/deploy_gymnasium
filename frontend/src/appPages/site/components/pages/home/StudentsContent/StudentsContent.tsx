"use client";
import Image from "next/image";
import scss from "./StudentsContent.module.scss";
import student from "../../../../../../assets/images/image 6.png";
import circle from "../../../../../../assets/images/Ellipse 19.png";
import { useRouter } from "next/navigation";

const StudentsContent = () => {
  const router = useRouter();
  return (
    <section id={scss.content}>
      <div className="container">
        <h1>Наши ученики</h1>
        <div className={scss.content}>
          <div className={scss.imageWrapper}>
            <Image
              src={circle}
              alt="background circle"
              className={scss.circle}
            />
            <Image src={student} alt="student" className={scss.student} />
          </div>
          <button
            className={scss.button}
            onClick={() => router.push("/students")}
          >
            Все ученики
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentsContent;
