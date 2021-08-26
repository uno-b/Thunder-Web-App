import React from 'react';

import { FaRegChartBar } from 'react-icons/fa';

import BoardScreen from '../BoardScreen';
import styles from './ForumScreen.module.scss';

const ForumScreen = () => {
  return (
    <div className={styles.container}>
      <BoardScreen />

      <div className={styles.statistics}>
        <div className={styles.header}>
          <FaRegChartBar style={{ marginRight: '0.5rem' }} />
          Statistics
        </div>
        <div className={styles.row}>
          <div>
            <span>2</span>
            <p>Topics</p>
          </div>
          <div>
            <span>2</span>
            <p>Posts</p>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <span>2</span>
            <p>Users</p>
          </div>
          <div>
            <span>Uno</span>
            <p>
              Newest <br />
              User
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumScreen;
