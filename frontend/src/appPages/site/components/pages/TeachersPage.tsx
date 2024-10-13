import scss from "./TeachersPage.module.scss";
import TeachersMainContent from "./teachers/TeachersMainContent/TeachersMainContent";

const TeachersPage = () => {
  return (
    <>
      <div className={scss.content}>
        <TeachersMainContent />
      </div>
    </>
  );
};

export default TeachersPage;
