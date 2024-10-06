import data from "../../data.json"; 
import styles from "../../page.module.css"; 
import ArticleTextDisplay from "../../components/ArticleTextDisplay";

export default function Article({ params }) {
  const slug = params.slug;

  // Find the article using the slug
  const articleData = data.find((article) => slug === article.id);

  return (
    <main className={styles.pageWrapper}>
      <div
        className={styles.articlePageHeaderWrapper}
        style={{
          backgroundImage: articleData.image?.url
            ? `url(${articleData.image.url})`
            : "none", 
          backgroundSize: "cover",
          padding: "60px 20px",
          color: "#fff",
        }}
      >
        <div className={styles.pageHeaderText}>
          {/* Title */}
          <h1 className={styles.articleTitle}>{articleData.title}</h1>

          {/* Date */}
          <p className={styles.articleDate}>
            {new Date(articleData.publishedDate).toDateString()}
          </p>
          {/* Blurb */}
          <p className={styles.articleBlurb}>{articleData.blurb}</p>
        </div>
      </div>

      {/* Article Body */}
      <div className={styles.articleBody}>
        {articleData.articleText?.map((text, i) => (
          <ArticleTextDisplay key={i} data={text.data} type={text.type} />
        ))}
      </div>
    </main>
  );
}
