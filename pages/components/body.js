import styles from '../../styles/Body.module.css'

const Body = ({ children }) => {
    return <>
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
    </>
}

export default Body