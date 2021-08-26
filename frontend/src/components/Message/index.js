import React from 'react';

import styles from './Message.module.scss';

const index = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default index;
