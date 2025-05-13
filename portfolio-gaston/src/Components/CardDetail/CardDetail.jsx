import { Link } from "react-router-dom";
import data from "../../Data/project.json";
import styles from "./CardDetail.module.css";
import { useParams } from "react-router-dom";
import IconGithub from "../icons/IconGithub";
import IconDesktop from "../icons/IconDesktop";
import IconMovile from "../icons/IconMovile";
import { useState } from "react";
import IconReturn from "../icons/IconReturn";

export default function CarDetail() {
  const params = useParams();
  const dataProject = data[params.id];

  const [imgSelected, setImgSelected] = useState(true);
  return (
    <>
      <div className={styles.NavbtnReturn}>
        <Link to={"/"} className={styles.btnReturn}>
          Volver
          <IconReturn />
        </Link>
      </div>
      <section className={styles.container}>
        <div className={styles.imgContainer}>
          <div>
            <div className={styles.iconContainer}>
              <button
                className={styles.btnResponsive}
                onClick={() => {
                  setImgSelected(true);
                }}
              >
                <IconDesktop />
              </button>
              <button
                className={styles.btnResponsive}
                onClick={() => {
                  setImgSelected(false);
                }}
              >
                <IconMovile />
              </button>
            </div>
          </div>
          <img
            className={styles.img}
            src={imgSelected ? dataProject.imgDesktop : dataProject.imgMobile}
          />
        </div>
        <div className={styles.textContainer}>
          <h1>{dataProject.title}</h1>
          <p>{dataProject.fullDescription}</p>
          <p>{dataProject.optionalDescription}</p>

          {dataProject.personalPRoject ? (
            <h2>Objetivo</h2>
          ) : (
            <h2>Responsabilidades</h2>
          )}
          <p>{dataProject.responsibilities}</p>

          <div className={styles.buttonContainer}>
            <a
              href={dataProject.urlWebSite}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Ver Sitio Web
            </a>
            {dataProject.urlRepository !== "" && (
              <div className={styles.githubButton}>
                <a
                  href={dataProject.urlRepository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconGithub />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
