import styles from "./IconResponsive.module.css";

export default function IconMovile() {
  return (
    <>
      <svg className={styles.styleIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z" />
      </svg>
    </>
  );
}
