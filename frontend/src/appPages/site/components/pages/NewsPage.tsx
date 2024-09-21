import NewsCommentsContent from "./news/NewsCommentsContent/NewsCommentsContent";
import NewsMainContent from "./news/NewsMainContent/NewsMainContent";
import scss from "./NewsPage.module.scss";
const NewsPage = () => {
  return (
    <>
      <div className={scss.content}>
        <NewsMainContent />
      </div>
    </>
  );
};

export default NewsPage;
