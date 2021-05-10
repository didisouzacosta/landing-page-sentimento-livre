import Head from 'next/head'
import styles from '../../styles/Header.module.css'

const Header = () => {
    return <>
        <Head>
            <title>Sentimento Livre</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className={styles.container}>
            <div className={styles.content}>Header</div>
        </header>
    </>
}

export default Header