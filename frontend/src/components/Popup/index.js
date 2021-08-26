import React from 'react';

import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import email from '../../images/email.png';
import kidWithVR from '../../images/VR Kid.png';
import { ImCross } from 'react-icons/im';
import styles from './Popup.module.scss';

const Popup = ({ setTrigger }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.inner}>
        <button onClick={() => setTrigger(false)}>
          <ImCross />
        </button>
        <div className={styles.content}>
          <p>Sign Up to visit Universities on VR Daigoku</p>
          <div className={styles.signup}>
            <img src={google} alt='Google' />
            <img src={facebook} alt='Facebook' />
            <img src={email} alt='Email' />
          </div>
          <img src={kidWithVR} className={styles.kid} alt='Kid with VR' />
        </div>
      </div>
    </div>
  );
};

export default Popup;
