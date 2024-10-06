import Link from 'next/link';
import styles from '../page.module.css'; 

export default function ArticleCard({ title, date, blurb, id }) {
    return (
      <div className={styles.articleCard}>
        <div className={styles.articleImage}>
          {/* Image placeholder */}
        </div>
        <div className={styles.articleContent}>
          <h2 className={styles.articleTitle}>{title}</h2>
          <p className={styles.articleDate}>
            {new Date(date).toDateString() !== "Invalid Date" ? new Date(date).toDateString() : "Date not available"}
          </p>
          <p className={styles.articleBlurb}>{blurb}</p>
          <Link href={`/article/${id}`} className={styles.articleLink}>
            Read More
          </Link>
        </div>
      </div>
    );
  }