import { useRouter } from 'next/router';
import NewsCommentsContent from "./news/NewsCommentsContent/NewsCommentsContent";
import NewsMainContent from "./news/NewsMainContent/NewsMainContent";
import scss from "./NewsPage.module.scss";

const NewsPage = () => {
  const router = useRouter();
  const { newsId } = router.query;

  const parsedNewsId = typeof newsId === 'string' ? parseInt(newsId, 10) : null;

  if (parsedNewsId === null || isNaN(parsedNewsId)) {
    return <div>Неверный идентификатор новости</div>;
  }

  return (
    <div className={scss.content}>
      <NewsMainContent newsId={parsedNewsId} />
      <NewsCommentsContent newsId={parsedNewsId} />
    </div>
  );
};

export default NewsPage;