import styles from "./Home.module.css";
import svgPc from "../../assets/svgAboutPc.svg";
import SocialNetworks from "../SocialNetworks/SocialNetworks";


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTxt}>
          <label className={styles.labelGreeting}>Hola, mi nombre es</label>
          <h1 className={styles.titleName}>
            <label className={styles.titleNameLabel}>Gastón</label> Salas
          </h1>
          <label className={styles.titleProfession}>
            Soy Frontend Development
          </label>
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
