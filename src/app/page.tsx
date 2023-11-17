import Image from "next/image";
import styles from "./page.module.css"
import { useCallback } from "react";
import ParticleBg from "./components/ParticleBg";

 export default function Home() {

  return (
    <>
      <main className={styles.background}>
        <ParticleBg />
        <div className={styles.container}>
          <Image className={styles.profile} src="https://avatars.githubusercontent.com/u/64336456?v=4" alt="profile pic" width="100" height="100" />
        </div>
      </main>
    </>
  )
}
