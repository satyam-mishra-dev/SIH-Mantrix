import React from 'react';
import styles from './Style.module.css';

const InterestMapping = () => {
  return (
    <div className={`${styles.card} ${styles.interestMapping}`}>
      <h2>Interest Based Mapping</h2>
      <div className={styles.mapping}>
        <div className={`${styles.mapItem} ${styles.logical}`}>Logical</div>
        <div className={`${styles.mapItem} ${styles.creative}`}>Creative</div>
        <div className={`${styles.mapItem} ${styles.enterprising}`}>Enterprising</div>
        <div className={`${styles.mapItem} ${styles.investigative}`}>Investigative</div>
        <div className={`${styles.mapItem} ${styles.analytical}`}>Analytical</div>
        <div className={`${styles.mapItem} ${styles.social}`}>Social</div>
        <div className={styles.mapCenter}></div>
      </div>
      <p>Your profile aligns strongly with Analytical, Creative, and Logical fields.</p>
    </div>
  );
};

export default InterestMapping;
