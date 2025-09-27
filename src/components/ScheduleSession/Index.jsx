import React from 'react';
import styles from './Style.module.css';

const ScheduleSession = () => {
  return (
    <div className={`${styles.card} ${styles.scheduleSession}`}>
      <h2>Schedule Session with Mentors</h2>
      <ul>
        <li>
          <div className={styles.mentorInfo}>
            <div className={styles.mentorIcon}></div>
            <div>
              <p>Ms. Anjali</p>
              <span>Engineer</span>
            </div>
          </div>
          <button>Book</button>
        </li>
        <li>
          <div className={styles.mentorInfo}>
            <div className={styles.mentorIcon}></div>
            <div>
              <p>Mr. Sharma</p>
              <span>Economist</span>
            </div>
          </div>
          <button>Book</button>
        </li>
        <li>
          <div className={styles.mentorInfo}>
            <div className={styles.mentorIcon}></div>
            <div>
              <p>Dr. Khan</p>
              <span>Scientist</span>
            </div>
          </div>
          <button>Book</button>
        </li>
      </ul>
    </div>
  );
};

export default ScheduleSession;
