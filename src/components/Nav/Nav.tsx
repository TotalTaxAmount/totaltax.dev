import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {

    const NAV_LINKS = [
        {
            path: "/",
            display: "Home"
        },
        {
            path: "/#about",
            display: "About"
        },
        {
            path: "/projects",
            display: "Projects"
        }
    ];

    return (
        <nav className={styles.nav_menu}>
            {NAV_LINKS.map((item, index) => (
                <b><Link className={styles.nav_item} href={item.path} key={index}>{item.display}</Link></b>
            ))}
        </nav>
    )
}