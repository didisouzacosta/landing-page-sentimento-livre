import styles from './../styles/Home.module.css'
import StoreButton from './components/home/store-buttons'

const Index = () => {
  return <div>
    <h1 className={styles.title}>Página inicial</h1>
    <p>Projeto Sentimento Livre</p>
    <p>Aprendendo como construir páginas</p>
    <StoreButton />
  </div>
}

export default Index