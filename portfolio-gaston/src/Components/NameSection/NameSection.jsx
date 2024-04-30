import styles from './NameSection.module.css'

export default function NameSection({children}) {
    return <h1 id={children} className={styles.nameSection}>{children}</h1>
}