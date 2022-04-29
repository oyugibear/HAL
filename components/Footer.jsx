import styles from "../styles/Footer.module.css"

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.items}>
                <div className={styles.copyright}>
                    <p className={styles.text}>
                        © HAL Capital 2022
                    </p>
                </div>
            </div>
            <div className={styles.items}>
                <div className={styles.copyright}>
                    <p className={styles.text}>
                        For inquiry call: +254 774 229 443
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Footer