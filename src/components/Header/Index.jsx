
import React from 'react';
import styles from './Style.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search for courses, colleges..." />
        <button>Q</button>
      </div>
      <div className={styles.userMenu}>
        <div className={styles.notificationIcon}></div>
        <div className={styles.userIcon}></div>
        <span>User</span>
      </div>
    </header>
  );
};

export default Header;
