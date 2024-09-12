"use client";
import { useParams } from "next/navigation";
import scss from "./NewsDetailContent.module.scss";
import { useGetDetNewsQuery } from "@/redux/api/news";
import Image from "next/image";

const NewsDetailContent = () => {
  const { newsDetail } = useParams();
  const { data } = useGetDetNewsQuery(String(newsDetail));
  // console.log(data, "data");

  return (
    <div className={scss.NewsDetailContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>Новости</h1>
            <hr />
          </div>
          <div className={scss.newsContent}>
            <h1>{data?.description}</h1>
            <Image
              src={data?.image!}
              alt="img"
              width={700}
              height={500}
              quality={70}
              property="img"
            />
            <p>{data?.content}</p>
            {/* <p>{data?.content.slice(0, 558)}</p>
            <p>{data?.content.slice(558)}</p> */}
            <hr />
          </div>
          <div className={scss.newsComments}>
            <h2>Комментарии пользователей :</h2>
            <div className={scss.comment}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;
