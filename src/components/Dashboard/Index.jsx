import React from 'react';
import styles from './Style.module.css';
import Header from '../Header/Index';
import RecommendedPath from '../RecommendedPath/Index';
import CareerPaths from '../CareerPaths/Index';
import InterestMapping from '../InterestMapping/Index';
import NewCareerPaths from '../NewCareerPaths/Index';
import ScheduleSession from '../ScheduleSession/Index';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Header />
      <main className={styles.main}>
        <RecommendedPath />
        <CareerPaths />
        <InterestMapping />
        <NewCareerPaths />
        <ScheduleSession />
      </main>
    </div>
  );
};

export default Dashboard;
