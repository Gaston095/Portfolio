import styles from "../Navbar/Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={styles.navbar}>
        <h1 className={styles.titleNavbar}>Gaston Salas</h1>

        <button onClick={()=> setOpen(true)} className={styles.btnNavbar}>
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

        <Sidebar open={open} setOpen={setOpen}/>
      </div>
    </>
  );
}
