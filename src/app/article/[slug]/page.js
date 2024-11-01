import data from "../../data.json";
import styles from "../../page.module.css";
import ArticleTextDisplay from "../../components/articleTextDisplay.js";
import { formatDateForArticle } from "@/app/components/utils";

export default function Article({ params }){
    const slug = params.slug;
    const articleData = data.find((article) => slug === article.id);
    return (
        <main>
            <div className={styles.articlePageHeaderWrapper}>
                <h1>{articleData.title}</h1>
                <p>{formatDateForArticle(articleData.publishedDate)}</p>
                <p className={styles.articlePageHeaderBlurb}>{articleData.blurb}</p>
            </div>
            <div className={styles.articleTextWrapper}>
                {articleData?.articleText?.map((text, i) => (
                    <ArticleTextDisplay key={i} data={text.data} type={text.type}></ArticleTextDisplay>
                ))}
            </div>
        </main>
    );
}