import React from 'react';
import styles from './Style.module.css';

const CareerPaths = () => {
  return (
    <div className={`${styles.card} ${styles.careerPaths}`}>
      <h2>Top Grossing Career Paths</h2>
      <ul>
        <li>
          <div className={styles.careerInfo}>
            <div className={styles.careerRank}>1</div>
            <div>
              <p>Data Scientist</p>
              <span>B.Sc./B.Tech</span>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '90%' }}></div>
          </div>
        </li>
        <li>
          <div className={styles.careerInfo}>
            <div className={styles.careerRank}>2</div>
            <div>
              <p>Financial Analyst</p>
              <span>B.Com/B.A.</span>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '80%' }}></div>
          </div>
        </li>
        <li>
          <div className={styles.careerInfo}>
            <div className={styles.careerRank}>3</div>
            <div>
              <p>Government Services</p>
              <span>Any Degree</span>
            </div>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '70%' }}></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CareerPaths;
