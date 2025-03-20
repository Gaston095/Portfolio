import NameSection from "../NameSection/NameSection";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import data from "../../Data/project.json";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <NameSection>Proyectos</NameSection>

      <section className={styles.section}>
        {data.map((project) => {
          return (
            <Link
              key={project.id}
              className={styles.decorationNone}
              to={`/project/${project.id}`}
            >
              <ProjectCard
                imgCard={project.imgCard}
                title={project.title}
                description={project.description}
                alternativeDesciption={project.alternativeDesciption}
                urlWebSite={project.urlWebSite}
                urlRepository={project.urlRepository}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
}
