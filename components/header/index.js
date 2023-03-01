import styles from './header.module.css'
import Link from 'next/link'

export default function Header(){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.navigation}>
                    <div className={styles.navContentRow}>
                        <ul className={styles.navigationList}>
                            <li className={styles.navigationItem}><Link href='/about'>Home</Link></li>
                            <li className={styles.navigationItem}><Link href='/about'>About</Link></li>
                            <li className={styles.navigationItem}><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.headerContent}>
                    <h2 className={styles.headerTitle}>Shamim Khan</h2>
                    <p className={styles.headerDesc}>Software Developer</p>
                    <a href="" className={styles.headerLink}>See Git hub</a>
                </div>
            </header>
        </>
    )
}