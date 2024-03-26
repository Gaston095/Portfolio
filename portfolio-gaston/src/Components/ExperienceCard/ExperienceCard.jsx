import styles from "./ExperienceCard.module.css";
import { useState } from "react";

export default function ExperienceCard() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <article className={styles.container}>
        <header>
          <h1 className={styles.title}>Simulación laboral en No Country</h1>
          <p className={styles.date}>Febrero 2024 — Marzo 2024</p>

          {readMore && (
            <div>
              <p>
                Desarrollamos durante 5 semanas un proyecto llamado “Give It”,
                un sitio web para realizar donaciones o poder regalar cosas que
                uno ya no utiliza. Se utilizó react y java. En un equipo
                conformado por 7 integrantes, 3 Frontend, 2 Backend, Diseñador y
                Tester.
              </p>
              <h2 className={styles.subtitle}>Responsabilidades:</h2>
              <p>
                Desarrollar el formulario para el registro del usuario y el
                logeo siguiendo prototipo del diseñador.
                Realizar la conexión con el backend de ambos formularios.
                Manejar una vista en modo logeado y modo no logeado para los
                usuarios.
              </p>
            </div>
          )}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Leer menos" : "Leer mas"}
          </button>
        </header>
        <div className={styles.tagsContainer}>
          <span className={styles.tag}>HTML 5</span>
          <span className={styles.tag}>CSS 3</span>
          <span className={styles.tag}>Javascript</span>
          <span className={styles.tag}>React 18.2.0</span>
          <span className={styles.tag}>TailwindCSS 3.4.1 </span>
        </div>
      </article>
    </>
  );
}