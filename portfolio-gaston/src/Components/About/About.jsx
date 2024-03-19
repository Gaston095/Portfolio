import styles from "./About.module.css";
import svgPc from "../../assets/svgAboutPc.svg";

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTxt}>
          <label className={styles.labelGreeting}>Hola, mi nombre es</label>
          <h1 className={styles.titleName}>Gaston Salas</h1>
          <label className={styles.titleProfession}>Soy Frontend Development</label>
          <p>Algo sobre mi</p>
        </div>

        <div>
          <img className={styles.imgAbout} src={svgPc} />
        </div>
      </div>
    </>
  );
}
