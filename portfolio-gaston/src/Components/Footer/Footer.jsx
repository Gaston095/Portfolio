import SocialNetworks from "../SocialNetworks/SocialNetworks";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.socialContainer}>
          <SocialNetworks />
        </div>
      </div>
    </>
  );
}
