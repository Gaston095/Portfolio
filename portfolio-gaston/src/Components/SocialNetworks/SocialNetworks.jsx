import styles from './SocialNetworks.module.css'
import IconLinkedin from '../icons/IconLinkedin';
import IconGithub from '../icons/IconGithub';
import IconWhatsapp from '../icons/IconWhatsapp';

export default function SocialNetworks() {

  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="https://www.linkedin.com/in/gastonsalas095/" target="_blank"><IconLinkedin/></a>
        </li>
        <li className={styles.li}>
          <a href="https://github.com/Gaston095" target="_blank">
            <IconGithub />
          </a>
        </li>
        <li className={styles.li}>
          <a href="https://wa.link/zp9cmd" target="_blank">
            <IconWhatsapp />
          </a>
        </li>
      </ul>
    </>
  );
}
