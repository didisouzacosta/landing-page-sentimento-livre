import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

function Header() {
    return <>
        <Head>
            <title>Sentimento Livre</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <a className={styles.menu_item}>Página inicial</a>
                </Link>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/schedule-session">
                            <a className={styles.menu_item}>Agendar sessão</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/objective">
                            <a className={styles.menu_item}>Objetivo</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/who-support-us">
                            <a className={styles.menu_item}>Quem nos apoia</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sign-up">
                            <a className={styles.sign_up}>Cadastro</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    </>
}

export default Header