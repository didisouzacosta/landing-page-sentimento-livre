import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

const Header = () => {
    return <>
        <Head>
            <title>Sentimento Livre</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className={styles.container}>
            <div className={styles.content}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Logo</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/schedule-session">
                            <a>Agendar sessão</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/who-support-us">
                            <a>Quem nos apoia</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sign-up">
                            <a>Cadastro</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    </>
}

export default Header