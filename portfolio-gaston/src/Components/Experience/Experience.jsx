import ExperienceCard from '../ExperienceCard/ExperienceCard'
import styles from './Experience.module.css'
import data from '../../Data/experience.json'
import NameSection from '../NameSection/NameSection'
export default function Experience() {
    return (
        <>
            <NameSection>Experiencia</NameSection>
            <div className={styles.container}>
            {data.map((exp)=> {
                return <ExperienceCard key={exp.id} title={exp.title} date={exp.date} linkRepo={exp.linkRepo} linkDeploy={exp.linkDeploy} description={exp.description} responsibility={exp.responsibility} tags={exp.tags}/>
            })}
            </div>
        </>
    )
}