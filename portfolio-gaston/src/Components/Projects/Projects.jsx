import NameSection from '../NameSection/NameSection'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './Projects.module.css'
import data from '../../Data/project.json'

export default function Projects() {
    return (
        <>
            <NameSection>Proyectos</NameSection>

            <section className={styles.section}>
                {data.map((project) => {
                    return <ProjectCard key={project.id} title={project.title} description={project.description} urlWebSite={project.urlWebSite}/>
                })}
            </section>
        </>
    )
}