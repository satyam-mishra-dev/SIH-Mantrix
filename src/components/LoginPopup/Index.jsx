import React, { useState } from 'react';
import styles from './Style.module.css';

const LoginPopup = ({ onClose, onSwitchToSignup, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration purposes, using hardcoded credentials
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.leftPanel}>
          <p className={styles.largestImageSource}>LARGEST IMAGE SOURCE</p>
          <h1 className={styles.poweredBy}>POWERED BY<br/>CREATORS<br/>AROUND<br/>THE WORLD.</h1>
          <div className={styles.createAccountSection}>
            <p>Don't have an account?</p>
            <a href="#" onClick={onSwitchToSignup}>Create account &rarr;</a>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
            </div>
            <div className={`${styles.formGroup} ${styles.extraOptions}`}>
              <label className={styles.rememberMe}>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className={styles.forgotPassword}>Forgot your password?</a>
            </div>
            <button type="submit" className={styles.submitButton}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
