import Link from "next/link";
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={${styles.header} "fixed top-0 left-0 w-full h-20 bg-black/90 text-white py-4 px-8 z-50 flex justify-between items-center"}>
            <h1 className="text-2xl font-bold">Sobre o Projeto</h1>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/api" className={styles.navLink}>API</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/perfil" className={styles.navLink}>Sobre a Autora</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/sobre" className={styles.navLink}>Sobre o Projeto</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}