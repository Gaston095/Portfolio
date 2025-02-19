import styles from "./ProjectCard.module.css";
import IconGithub from "../icons/IconGithub";
import IconPlus from "../icons/iconPlus"
import { useState } from "react";

export default function ProjectCard({ imgCard, title, description, alternativeDesciption, urlWebSite, urlRepository }) {
    const [seeMoreInfo, setSeeMoreInfo] = useState(true)

    const handleAnchorClick = (event) => {
      event.stopPropagation();
    }
  return (
    <>
      <article className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={imgCard} className={styles.imgCard} />
        </div>
        <div className={styles.txtContainer}>
          <h1 className={styles.titleCard}>{title}</h1>
          {seeMoreInfo ? <p className={styles.paragraphCard}>{description}</p> : <p className={styles.paragraphCard}>{alternativeDesciption}</p>}
          <div className={styles.buttonContainer}>
            <a href={urlWebSite} onClick={handleAnchorClick} target="_blank" className={styles.button}>
              Ver Sitio Web
            </a>
            <div className={styles.githubButton}>
              <a href={urlRepository} onClick={handleAnchorClick} target="_blank">
                <IconGithub />
              </a>
            </div>
            <div className={styles.githubButton}>
              <button className={styles.buttomPlus} onClick={()=> {setSeeMoreInfo(!seeMoreInfo)}}><IconPlus /></button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
