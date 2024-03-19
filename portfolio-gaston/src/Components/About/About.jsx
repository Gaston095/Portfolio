import styles from "./About.module.css";


export default function About() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <label>Hola, mi nombre es</label>
          <h1 className={styles.title}>Gaston Salas</h1>
          <label>Soy Frontend Development</label>
          <p>Algo sobre mi</p>
        </div>
      </div>
      <div>
        <img/>
      </div>
    </>
  );
}
