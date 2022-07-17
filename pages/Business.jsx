import Image from 'next/image'
import React from 'react'
import styles from '../styles/Business.module.css'

const Business = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.itemTwo}>
          <div className={styles.text}>
            <h1>Business Lines</h1>
            <hr align="left" className={styles.line}/>
            <p>Click the links below to view our different business lines</p>
            <div className={styles.urlList}>
                <h3 className={styles.url}>HAL Capital <hr align="center" className={styles.line}/></h3>
                <h3 className={styles.url}>HAL Africa  <hr align="center" className={styles.line}/></h3>
                <h3 className={styles.url}>HAL M.E.N.A <hr align="center" className={styles.line}/></h3>
            </div>
          </div>
        </div>
        <div className={styles.barrier}></div>
        <div className={styles.itemOne}>
          <div className={styles.text}>
            <h1>Capabilities</h1>
            <hr align="left" className={styles.line}/>
            <div className={styles.list}>
              <div className={styles.listWrapper}>
                <h4 className={styles.listItem}><li>Technology and Fintech</li></h4>
                <h4 className={styles.listItem}><li>Islamic Finance</li></h4>
              </div>
              <div className={styles.listWrapper}>
                <h4 className={styles.listItem}><li>Value Management and Transformation</li></h4>
                <h4 className={styles.listItem}><li>Financial Inclusion</li></h4>
              </div>
              <div className={styles.listWrapper}>
                <h4 className={styles.listItem}><li>Cross Border Payments</li></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business