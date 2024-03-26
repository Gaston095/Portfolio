import ExperienceCard from '../ExperienceCard/ExperienceCard'
import styles from './Experience.module.css'

export default function Experience() {
    return (
        <>
            <h1 className={styles.nameSection}>Experiencia</h1>

            <ExperienceCard />
        </>
    )
}