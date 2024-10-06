import styles from "./page.module.css";
import data from "./data.json";
import ArticleCard from "./components/articleCard";

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.heading}>Articles</h1>

      {data.map((article) => (
        <ArticleCard
          key={article.id}
          blurb={article.blurb}
          title={article.title}
          id={article.id}
          date={article.date}
          publishedDate={article.publishedDate}
          image={article.image}
          description={article.description}
          link={article.link}
        />
      ))}
    </main>
  );
}
