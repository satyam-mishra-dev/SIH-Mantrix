import React, { useState } from 'react';
import styles from './Style.module.css';

const SignupPopup = ({ onClose, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle signup logic here
    console.log('Signing up with:', username, email, password);
    onClose(); // Close the popup after submission
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.leftPanel}>
          <p className={styles.largestImageSource}>LARGEST IMAGE SOURCE</p>
          <h1 className={styles.poweredBy}>POWERED BY<br/>CREATORS<br/>AROUND<br/>THE WORLD.</h1>
          <div className={styles.createAccountSection}>
            <p>Already have an account?</p>
            <a href="#" onClick={onSwitchToLogin}>Login &rarr;</a>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <h2>Create your account</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
