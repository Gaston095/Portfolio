import styles from './ProjectCard.module.css'
import imgCard from '../../assets/imgCard.jpg'


export default function ProjectCard({title, description}) {
    return (
        <>
            <article className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={imgCard} className={styles.imgCard}/>
                </div>
                <div className={styles.txtContainer}>
                    <h1 className={styles.titleCard}>{title}</h1>
                    <p className={styles.paragraphCard}>{description}</p>
                    <button className={styles.button}>Go Anywhere</button>
                </div>
            </article>
        </>
    )
}