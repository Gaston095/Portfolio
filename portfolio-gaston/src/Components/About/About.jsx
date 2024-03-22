import styles from './About.module.css'
import imgPerfil from '../../assets/imgAbout/imgPerfilGaston.jpeg'

export default function About() {
    return (
        <>
            <h1 className={styles.nameSection}>About</h1>
            <div className={styles.container}>
                <div>
                    <img className={styles.imgPerfil} src={imgPerfil} alt='imagen de perfil'/>
                </div>
                <div className={styles.infoContainer}>
                    <h2 className={styles.titleInfo}>Sobre mi</h2>
                    <p className={styles.txtInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Quaerat iste voluptatem illum quia natus amet modi repellat? 
                       Corporis veritatis iste esse consequuntur natus aut? Ab voluptas commodi esse ut iste?</p>
                </div>
            </div>
        </>
    )
}