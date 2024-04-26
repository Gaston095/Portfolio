import Tag from "../Tag/Tag";
import styles from "./ExperienceCard.module.css";
import { useState } from "react";


export default function ExperienceCard({title, date, linkRepo, linkDeploy, description, responsibility, tags}) {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <article className={styles.container}>
        <header>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.date}>{date}</p>
          <div className={styles.contLink}>
            <a href={linkRepo} target="_blank">Hola</a>
          </div>

          {readMore && (
            <div>
              <p className={styles.p}>
                {description}
              </p>
              <h2 className={styles.subtitle}>Responsabilidades:</h2>
              <p className={styles.p}>
                {responsibility}
              </p>
            </div>
          )}
          <button className={styles.readMoreBtn} onClick={() => setReadMore(!readMore)}>
            {readMore ? "Leer menos" : "Leer mas..."}
          </button>
        </header>
        <div className={styles.tagsContainer}>
          {tags.map((tag)=> {
            return <Tag key={tag}>{tag}</Tag>
          })}
        </div>
      </article>
    </>
  );
}
