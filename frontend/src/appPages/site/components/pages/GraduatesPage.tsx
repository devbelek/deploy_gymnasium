import GraduatesFirstTab from "./graduates/GraduatesFirstTab/GraduatesFirstTab";
import GraduatesMainContent from "./graduates/GraduatesMainContent/GraduatesMainContent";

import scss from "./GraduatesPage.module.scss";
const GraduatesPage = () => {
    return (
        <>
            <div className={scss.content}>
                <GraduatesMainContent />
                <div className={scss.graduatesTable}>
                    <GraduatesFirstTab />
                </div>
            </div>
        </>
    );
};

export default GraduatesPage;
