"use client";

import React, { useEffect, useState } from "react";
import scss from "./StudentsPage.module.scss";
import StudentsMainContent from "./students/studentMainContent/StudentsMainContent";
import StudentsOlympiad from "./students/StudentsOlympiad/StudentsOlympiad";
import StudentsParliament from "./students/StudentsParliament/StudentsParliament";

const StudentsPage = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <section className={scss.StudentsPage}>
            <div className="container">
                <div className={scss.content}>
                    <h1 className={scss.Title}>Все ученики</h1>
                    <div className={scss.heroContent}>
                        <div
                            className={`${scss.StudentsMainContent} ${
                                showContent ? scss.visible : ""
                            }`}
                        >
                            <StudentsMainContent />
                        </div>
                        <div
                            className={`${scss.blocks} ${
                                showContent ? scss.visible : ""
                            }`}
                        >
                            <StudentsOlympiad />
                            <StudentsParliament />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentsPage;
