import React from 'react';
import { GoComment, GoCommentDiscussion } from 'react-icons/go';
import { FaPencilAlt, FaRegLightbulb } from 'react-icons/fa';

import user from '../../images/user.svg';
import styles from './BoardScreen.module.scss';

const index = () => {
  return (
    <div className={styles.mainBoard}>
      <div className={styles.header}>
        <div className={styles.row1}>
          <FaPencilAlt style={{ marginRight: '0.5rem' }} /> Main Boards
        </div>
        <div className={styles.row2}>
          <FaRegLightbulb style={{ marginRight: '0.5rem' }} />
          Topics
        </div>
        <div className={styles.row3}>
          <GoCommentDiscussion style={{ marginRight: '0.5rem' }} />
          Posts
        </div>
        <div className={styles.row4}>
          <GoComment style={{ marginRight: '0.5rem' }} />
          Last Post
        </div>
      </div>

      <div className={styles.board}>
        <GoComment style={{ marginRight: '0.5rem' }} />
        <div className={styles.row1}>
          <a href='/'>Universities</a>
          <p>Learn more about individual universities</p>
        </div>
        <div className={styles.row2}>1</div>
        <div className={styles.row3}>1</div>
        <div className={styles.row4}>
          <img src={user} alt='User' />
          <div>
            <p>Uno</p>
            <p>May 03, 2021</p>
          </div>
        </div>
      </div>

      <div className={styles.board}>
        <GoComment style={{ marginRight: '0.5rem' }} />
        <div className={styles.row1}>
          <a href='/'>Questions</a>
          <p>Ask anything!</p>
        </div>
        <div className={styles.row2}>1</div>
        <div className={styles.row3}>1</div>
        <div className={styles.row4}>
          <img src={user} alt='User' />
          <div>
            <p>Uno</p>
            <p>May 03, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
