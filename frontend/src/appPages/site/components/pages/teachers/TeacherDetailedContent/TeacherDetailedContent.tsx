"use client";
import { useParams } from "next/navigation";
import scss from "./TeacherDetailedContent.module.scss";
import { useGetDetTeacherQuery } from "@/redux/api/teachers";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";

const TeacherDetailedContent = () => {
  const { teacher } = useParams();

  const { data, isLoading, error } = useGetDetTeacherQuery(String(teacher));
  console.log(data, "data");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <section className={scss.content}>
      <div className="container">
        <div className={scss.contentDetail}>
          <div className={scss.detail}>
            {/* <Zoom> */}
            <Image
              src={data?.image!}
              alt="img"
              width={700}
              height={500}
              quality={70}
              priority
            />
            {/* </Zoom> */}
            <div className={scss.detailText}>
              <h1>
                {data?.surname} {data?.name} {data?.last_name}
              </h1>
              <div className={scss.oput}>
                <h3>Учитель: {data?.subject}</h3>
                <h3>Опыт: {data?.experience}</h3>
              </div>
              <div className={scss.education}>
                <h3>Оброзование:</h3>
                <p>{data?.education}</p>
              </div>
              <div className={scss.share}>
                <h3>Поделиться:</h3>
                <div className={scss.shareIcon}>
                  <a className={scss.facebook}>
                    <FaFacebook />
                  </a>
                  <a className={scss.telegram}>
                    <FaTelegram />
                  </a>
                  <a className={scss.vk}>
                    <FaVk />
                  </a>
                  <a className={scss.instagram}>
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.success}>
            <h3>Успехи:</h3>
            <p>{data?.successes}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetailedContent;
