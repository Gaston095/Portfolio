import styles from "./Sidebar.module.css";

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      <div className={`${!open && styles.hidden} ${styles.capaSidebar}`}></div>

      <div className={`${!open && styles.w0} ${styles.sidebarContainer}`}>
        <div className={styles.btnContainer}>
          <button onClick={() => setOpen(false)} className={styles.btnSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div>
          <ul className={styles.liContainer}>
            <li>About</li>
            <li>Experiencia</li>
            <li>Proyectos</li>
            <li>Soft Skills</li>
            <li>Estudios</li>
          </ul>
        </div>
      </div>
    </>
  );
}
