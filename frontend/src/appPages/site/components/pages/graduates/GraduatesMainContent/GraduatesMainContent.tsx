"use client";

import React from "react";
import scss from "./GraduatesMainContent.module.scss";
import Image from "next/image";
import {} from "@/redux/api/our_achievements";
import { useGetSuccessfulGraduatesQuery } from "@/redux/api/successful_graduates";

const GraduatesMainContent = () => {
    const { data, isLoading, isError } = useGetSuccessfulGraduatesQuery();

    if (isLoading) return <div>Загрузка...</div>;
    if (isError || !data) return <div>Ошибка при загрузке данных.</div>;

    console.log(data);

    return (
        <section className={scss.GraduatesMainContent}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.titleText}>Выпускники</h1>
                    <div className={scss.mainContent}>
                        <h1 className={scss.mainContent_title}>
                            Гордость гимназии
                        </h1>
                        <div className={scss.graduates}>
                            {data?.map((item) => (
                                <div
                                    key={item.graduate.name}
                                    className={scss.mainContent_graduates}
                                >
                                    <Image
                                        quality={70}
                                        width={700}
                                        height={500}
                                        className={scss.graduates_Img}
                                        src={item.image}
                                        alt="graduates"
                                    />
                                    <div className={scss.graduateinfo}>
                                        <div className={scss.nameInfo}>
                                            <h1 className={scss.graduateName}>
                                                <div>
                                                    {item.graduate.surname}
                                                </div>
                                                <div>{item.graduate.name}</div>
                                                <div>
                                                    {item.graduate.last_name}
                                                </div>
                                            </h1>
                                            <h1 className={scss.graduateDate}>
                                                {item.year}
                                            </h1>
                                        </div>
                                        <hr className={scss.hr} />
                                        <div className={scss.biography}>
                                            <h1 className={scss.graduateBio}>
                                                {item.content}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraduatesMainContent;
