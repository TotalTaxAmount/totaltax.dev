import Image from "next/image";
import styles from "./page.module.css"

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Image className={styles.profile} src="https://avatars.githubusercontent.com/u/64336456?v=4" alt="profile pic" width="400" height="400" />
        </div>
        <div className={styles.column}>
          <div id="#about" className={styles.about}>
            <h2>Hello!</h2>
            <p>I am TotalTaxAmount, currently I am in High School, I love to climb and also work with computers. 
            I have experience with Java, Kotlin, Python, and Nix. I also know a decent bit of Javascript/Typescript and web development. 
            Currently I am learning Rust and C. I am interested in low level programming, hardware reverse engineering, networking, robotics, 
            and anything related to computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
