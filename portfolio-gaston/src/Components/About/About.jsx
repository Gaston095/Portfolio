import styles from "./About.module.css";
import svgPc from "../../assets/svgAboutPc.svg";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTxt}>
          <label className={styles.labelGreeting}>Hola, mi nombre es</label>
          <h1 className={styles.titleName}><label className={styles.titleNameLabel}>Gaston</label> Salas</h1>
          <label className={styles.titleProfession}>Soy Frontend Development</label>
        </div>

        <div>
          <img className={styles.imgAbout} src={svgPc} />
        </div>

        <SocialNetworks />
      </div>
    </>
  );
}
