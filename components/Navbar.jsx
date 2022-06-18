import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {

    const router = useRouter();

    const handleHome = async () => {
        router.push('/');
    }
    const handleContacts = async () => {
        router.push('/Contacts');
    }

    const [open, setOpen] = useState(false);

    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.logo}>
                    <Image src="/img/logo.png" fill="" width="265" height="50" className={styles.logoImg}/>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem} onClick={handleHome}> Home </li>
                    <li className={styles.listItem}>Business Lines</li>
                    <li className={styles.listItem} onClick={handleContacts}>Contact Us</li>
                </ul>
            </div>
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <div className={styles.line}/>
                <div className={styles.line}/>
                <div className={styles.line}/>
            </div>
            <ul onClick={() => setOpen(false)} className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
                <li className={styles.menuItem} onClick={handleHome}> Home </li>
                <li className={styles.menuItem}>Business Lines</li>
                <li className={styles.menuItem} onClick={handleContacts}>Contact Us</li>
            </ul>
        </div>

    )
}

export default Navbar