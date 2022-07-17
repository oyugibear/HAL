import React from 'react'
import styles from '../styles/Team.module.css'

const Team = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.welcomeText}>
          <h1>Our Team</h1>
          <hr align="left" className={styles.line}/>
          <p>All the members and founder of Hal Group</p>
        </div>
        <div className={styles.items}>
          <div className={styles.itemOne}>
            <div className={styles.text}>
              <h2>Mohamoud Barre Dualeh</h2>
              <h3>Co-founder and Director</h3>
              <p>
              Banking executive with verifiable year-after-year success record in 
              achieving business growth objectives within start-up, turnaround, 
              and rapid-change business environments.
              <br />
              <br />
               Over 15 years of practical experience in the UK, UAE, and Oman encompassing 
              product development,strategic client management, Islamic Banking liabilities, assets and 
              investment products, development and management of transactional banking 
              (retail and cash cum trade) banking solutions with excellent knowledge 
              in both conventional and Islamic Banking and revenue generation.
              <br />
              <br />
               Extensive experience with Blue Ocean Strategies, which requires a deep understanding
              of critical business drivers in multiple markets and industries; highly 
              successful in building relationships with all stakeholders, seizing control 
              of critical problem areas, and delivering on customer commitments. Mohamoud 
              contributed to the setup and running of two Islamic windows and one 
              full-fledged Islamic bank.
              </p>
            </div>
          </div>
          <div className={styles.barrier}></div>
          <div className={styles.itemTwo}>
            <div className={styles.text}>
            <h2>Lutfi Al Shukaili</h2>
              <h3>Co-founder and Director</h3>
              <p>
              A strategic Banker and Co-Founder with 20 years of leading industry expertise 
              in financial service, business set-up, and transformation. 
              <br />
              <br />
              A wealth of experience in formulating and delivering strategies and transformation 
              programs to drive growth and change. Proven leadership and track record in FinTech,
              Customer Experience Management, Change Management, Innovation, and Digital Transformation. 
              Worked with banking industry leaders around the globe to help them establish, run and 
              transform the business from inception to profitability. Lutfi has worked with HSBC, Canadian 
              Imperial Bank of Commence, Mashreq Bank, Dubai Islamic Bank, Dubai Bank, Ajman Bank, 
              and Alizz Islamic Bank. 
              <br />
              <br />
              Some of the projects led and delivered include Digital and Channel 
              Strategy,  Branch Transformation and Optimization. Re-engineering of Retail and Wholesale Banking 
              Assets On-boarding. Agency and Partnership Banking Project.
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Team