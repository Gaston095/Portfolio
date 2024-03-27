import styles from './About.module.css'
import imgPerfil from '../../assets/imgAbout/imgPerfilGaston.jpeg'
import data from '../../Data/data.json'

export default function About() {
    return (
        <>
            <h1 className={styles.nameSection}>About</h1>
            <div className={styles.container}>
                <div className={styles.imgPerfilContainer}>
                    <img className={styles.imgPerfil} src={imgPerfil} alt='imagen de perfil'/>
                </div>
                <div className={styles.infoContainer}>
                    <h2 className={styles.titleInfo}>Sobre mi</h2>
                    <p className={styles.txtInfo}>{data[0].aboutMe}</p>
                </div>
            </div>
        </>
    )
}