import ExperienceCard from '../ExperienceCard/ExperienceCard'
import styles from './Experience.module.css'
import data from '../../Data/experience.json'
export default function Experience() {
    return (
        <>
            <h1 className={styles.nameSection}>Experiencia</h1>

            {data.map((exp)=> {
                return <ExperienceCard key={exp.id} title={exp.title} date={exp.date} description={exp.description} responsibility={exp.responsibility} tags={exp.tags}/>
            })}
        </>
    )
}