"use client";
import { useGetTeachersQuery } from "@/redux/api/teachers";
import scss from "./TeachersMainContent.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Snowfall } from "react-snowfall";

const TeachersMainContent = () => {
  const { data, isLoading, error } = useGetTeachersQuery();
  console.log("🚀 ~ TeachersMainContent ~ data:", data);
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <section className={scss.TeachersMainContent}>
      <div className="container">
        ,
        <div className={scss.content}>
          <div className={scss.head}>
            <h1>Все учителя</h1>
            <hr />
          </div>
          <div className={scss.teacher_cards}>
            {data?.map((teacher) => (
              <div key={teacher.id!} className={scss.teacher}>
                <Image
                  onClick={() => router.push(`/teachers/${teacher.id}`)}
                  src={teacher?.image}
                  alt="img"
                  width={700}
                  height={500}
                  priority
                  quality={70}
                />
                <h1>
                  {teacher.surname} {teacher.name}
                  <br />
                  {teacher.last_name}
                </h1>
                <hr />
                <p style={{ width: "100%", maxWidth: "230px" }}>
                  {teacher.subject}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersMainContent;
