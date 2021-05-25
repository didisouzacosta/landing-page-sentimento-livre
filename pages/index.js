import styles from './../styles/Home.module.css'
import StoreButton from './components/home/store-buttons'
import QuemNosApoio from "./components/home/quem-nos-apoia"

const Index = () => {
  return <div>
    <h1 className={styles.title}>Página inicial</h1>
    <QuemNosApoio />
    <StoreButton />
  </div>
}

export default Index