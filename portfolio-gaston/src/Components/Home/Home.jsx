import styles from "./Home.module.css";
import svgPc from "../../assets/svgAboutPc.svg";
import SocialNetworks from "../SocialNetworks/SocialNetworks";
import data from "../../Data/data.json";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTxt}>
          <label className={styles.labelGreeting}>Hola, mi nombre es</label>
          <h1 translate="no" className={styles.titleName}>
            <label className={styles.titleNameLabel}>{data[0].name}</label>{" "}
            {data[0].lastname}
          </h1>
          <label translate="no" className={styles.titleProfession}>
            Soy {data[0].rol}
          </label>
          <a href="./gaston-salas-cv.docx" className={styles.downloadBtn} download>
            Descargar CV
          </a>
        </div>

        <div>
          <img className={styles.imgAbout} src={svgPc} />
        </div>
      </div>
      <div className={styles.socialContainer}>
        <SocialNetworks />
      </div>
    </>
  );
}
