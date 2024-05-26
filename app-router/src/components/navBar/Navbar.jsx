import Link from 'next/link';
import styles from './navBar.module.scss'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

export default function Navbar() {
    console.log('client')
    const links = [
        {
            id: 1,
            title: "Home",
            url: "/",
        },
        {
            id: 2,
            title: "Portfolio",
            url: "/portfolio",
        },
        {
            id: 3,
            title: "Blog",
            url: "/blog",
        },
        {
            id: 4,
            title: "About",
            url: "/about",
        },
        {
            id: 5,
            title: "Contact",
            url: "/contact",
        },
        {
            id: 6,
            title: "Dashboard",
            url: "/dashboard",
        },
    ];
    return (
        <div className={styles.container}>

            <Link href='home' className={styles.logo}>Avantika.</Link>
            <div className={styles.links}>
                <DarkModeToggle/>
                {links.map((link) => <Link href={link.url} key={link.id}>{link.title}</Link>)}
                <button className={styles.logout}>
                    Logout
                </button>
            </div>

        </div>
    )
}
