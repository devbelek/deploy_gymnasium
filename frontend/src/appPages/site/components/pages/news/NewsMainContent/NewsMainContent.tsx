"use client";
import { useGetNewsQuery } from "@/redux/api/news";
import Image from "next/image";
import { LuMessagesSquare } from "react-icons/lu";
import { useRouter } from "next/navigation";
import scss from "./NewsMainContent.module.scss";
const NewsMainContent = () => {
  const { data } = useGetNewsQuery();
  console.log(data, "data");
  const router = useRouter();

  return (
    <section className={scss.NewsMainContent}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.news_head}>
            <h1>Новости</h1>
            <hr />
          </div>
          <div className={scss.news_cards}>
            {data?.map((item, index) => (
              <div key={index} className={scss.news_card}>
                <Image
                  onClick={() => router.push(`/news/${item.id}`)}
                  alt="news_img"
                  src={item.image}
                  width={700}
                  height={500}
                  priority
                  quality={70}
                />
                <h2
                  style={{ width: "100%", maxWidth: "320px", height: "90px" }}
                >
                  {item.description}
                </h2>
                <div className={scss.news_end}>
                  <p>{item.updated_at.slice(0, 10)}</p>
                  <LuMessagesSquare />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsMainContent;
