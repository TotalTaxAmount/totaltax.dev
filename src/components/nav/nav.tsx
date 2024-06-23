import styles from "./nav.module.css";
import Link from "next/link";
import DiscordIcon from "../../../public/discord-mark.svg";
import GitHubIcon from "../../../public/github-mark-white.svg";

export default function Nav() {

    const NAV_LINKS = [{
            path: "/",
            display: "Home" },
        {
            path: "/#about",
            display: "About" },
        {
            path: "/projects",
            display: "Projects"},
        {
            path: "/other",
            display: "Other"
        },
        
   ];


    return (
        <nav className={styles.nav_menu}>
            {NAV_LINKS.map((item, index) => (
                <Link className={styles.nav_item} href={item.path} key={index}>{item.display}</Link>
            ))}
            <div className={styles.socials}>
                <Link target="_blank" href="https://discordapp.com/users/715258506005053491"> <DiscordIcon fill="#fff"/> </Link>
                <Link target="_blank" href="https://github.com/TotalTaxAmount"><GitHubIcon fill="#fff"/></Link>
            </div>
        </nav>
    )
}