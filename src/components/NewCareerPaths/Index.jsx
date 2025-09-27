import React from 'react';
import styles from './Style.module.css';

const NewCareerPaths = () => {
  return (
    <div className={`${styles.card} ${styles.newCareerPaths}`}>
      <h2>Try New Career Paths</h2>
      <div className={styles.pathOptions}>
        <div className={styles.pathOption}>Aptitude Quizes</div>
        <div className={styles.pathOption}>Interest Finder</div>
        <div className={styles.pathOption}>Skill Challenge</div>
        <div className={styles.pathOption}></div>
        <div className={styles.pathOption}></div>
        <div className={styles.pathOption}></div>
      </div>
    </div>
  );
};

export default NewCareerPaths;
