import styles from "./ProjectCard.module.css";
import IconGithub from "../icons/IconGithub";
import IconPlus from "../icons/iconPlus"

export default function ProjectCard({ imgCard, title, description, urlWebSite, urlRepository }) {
  return (
    <>
      <article className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={imgCard} className={styles.imgCard} />
        </div>
        <div className={styles.txtContainer}>
          <h1 className={styles.titleCard}>{title}</h1>
          <p className={styles.paragraphCard}>{description}</p>
          <div className={styles.buttonContainer}>
            <a href={urlWebSite} target="_blank" className={styles.button}>
              Ver Sitio Web
            </a>
            <div className={styles.githubButton}>
              <a href={urlRepository} target="_blank">
                <IconGithub />
              </a>
            </div>
            <div className={styles.githubButton}>
              <a href="https://github.com/Gaston095" target="_blank">
                <IconPlus />
              </a> 
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
