"use client";
import { useGetFondQuery } from "@/redux/api/fond";
import scss from "./FondContent.module.scss";
import Link from "next/link";

const FondContent = () => {
  const { data } = useGetFondQuery();
  console.log(data, "Donation");
  return (
    <div className={scss.FondContent}>
      <div className="container">
        <div className={scss.content}>
          <h1>Фонд</h1>
          <hr />
          {data?.map((item) => (
            <div key={item.id}>
              <h1>Отправитель: {item?.user}</h1>
              <h3>{item.amount} Сом</h3>
              <p>{item.comment}</p>
            </div>
          )) || <p>No donations found.</p>}

          <Link href={"/fond/donation"}>
            <button>Акча салуу</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FondContent;
