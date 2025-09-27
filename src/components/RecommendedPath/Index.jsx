
import React from 'react';
import styles from './Style.module.css';

const RecommendedPath = () => {
  return (
    <div className={`${styles.card} ${styles.recommendedPath}`}>
      <div className={styles.pathHeader}>
        <h2>Your Recommended Path</h2>
        <span className={styles.matchPercentage}>92% Match</span>
      </div>
      <h3>B.A. Economics (Hons)</h3>
      <p>Based on your interest in problem-solving and analytics, this path offers a strong foundation in quantitative analysis and critical thinking. It opens doors to careers in finance, data science, and public policy.</p>
      <p><strong>Tailored Insights:</strong> Strong in Logic & Analytics, Prefers Structured Learning</p>
      <p><strong>Aligned with:</strong> Career path in data analysis and research</p>
      <p><strong>Subjects you'll enjoy:</strong> Microeconomics, Statics, Economics</p>
      <button className={styles.exploreButton}>Explore Path →</button>
    </div>
  );
};

export default RecommendedPath;
