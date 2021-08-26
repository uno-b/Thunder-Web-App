import React from 'react';

import Carousel from '../../components/Carousel';
import styles from './HomeScreen.module.scss';

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <Carousel />
    </div>
  );
};

export default HomeScreen;
