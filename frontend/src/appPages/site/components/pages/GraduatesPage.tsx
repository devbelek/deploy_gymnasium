import Link from "next/link";

import scss from "./GraduatesPage.module.scss";
const GraduatesPage = () => {
    return (
        <>
            <div className={scss.content}>
                <div className="container">
                    <div className={scss.graduatesTable}>
                        <Link
                            className={scss.Block}
                            href={"/graduates/best_graduates"}
                        >
                            Гордость гимназии
                        </Link>
                        <Link
                            className={scss.Block}
                            href={"/graduates/graduates_table"}
                        >
                            Список выпускников
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GraduatesPage;
