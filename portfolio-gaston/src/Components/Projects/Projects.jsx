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
                    return <ProjectCard key={project.id} imgCard={project.imgCard} title={project.title} description={project.description} alternativeDesciption={project.alternativeDesciption} urlWebSite={project.urlWebSite} urlRepository={project.urlRepository}/>
                })}
            </section>
        </>
    )
}