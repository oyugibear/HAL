import Image from "next/image"
import styles from "../styles/Contacts.module.css"

const Contacts = () => {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <span className={styles.wImage}>
                        <Image src="/img/logo.png" width="431"height="134" />
                    </span>
                    <div className={styles.message}>
                        Have an inquiry, feel free to contact us
                        through:

                        <h3 className={styles.number}>
                            +254 722 869 033
                        </h3>                    
                        <h3 className={styles.email}>
                            inquiries@halgroup.com
                        </h3>                    
                    </div>

                </div>

                <div className={styles.itemTwo}>
                    <span className={styles.globeImg}>
                        <Image src="/img/africaimg.png" width="400" height="400" />
                    </span>
                </div>

            </div>        
        </div>
    )
}

export default Contacts