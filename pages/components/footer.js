import Link from 'next/link'

import styles from '../../styles/Footer.module.css'

const Footer = () => {
    return <>
        <footer className={styles.container}>
            <div className={styles.content}>
                <div>
                    <p>Logo</p>
                    <p>Sentimento Livre fornece sessões de terapia gratuitas a todos os profissionais que estão no combate à COVID-19.</p>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Whatsapp</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Instagram</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Facebook</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Sou especialista</h4>
                    <p>
                        <Link href="/voluntary">
                            <a>Como posso me cadastrar?</a>
                        </Link>
                    </p>
                </div>

                <div>
                    <h4>Contribuir</h4>
                    <p>
                        <Link href="/voluntary">
                            <a>Como posso apoiar?</a>
                        </Link>
                    </p>
                </div>

                <div>
                    <h4>Suporte</h4>
                    <p>
                        <Link href="mailto: info@sentimentolivre.com.br">
                            <a>info@sentimentolivre.com.br</a>
                        </Link>
                    </p>
                </div>

                <div>
                    <h4>Imprensa</h4>
                    <p>
                        <Link href="mailto: press@sentimentolivre.com.br">
                            <a>press@sentimentolivre.com.br</a>
                        </Link>
                    </p>
                </div>

                <div>
                    <h4>Ajuda</h4>
                    <p>
                        <Link href="/principal-questions">
                            <a>Perguntas frequentes</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/privacity-policy">
                            <a>Politica de privacidade</a>
                        </Link>
                    </p>
                    <p>
                        <Link href="/use-terms">
                            <a>Termos de uso</a>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    </>
}

export default Footer