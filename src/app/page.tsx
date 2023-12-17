import Image from "next/image";
import styles from "./page.module.css"

export default function Home() {

  return (
    <div className={styles.about_container}>
      <Image className={styles.profile} src="https://avatars.githubusercontent.com/u/64336456?v=4" alt="profile pic" width="200" height="200" />
    </div>
  )
}
