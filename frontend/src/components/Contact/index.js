import React from 'react';
import vr from '../../images/vr.png';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import youtube from '../../images/youtube.png';
import twitter from '../../images/twitter.png';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.trapezium}></div>
      <ul>
        <li>
          <a href='https://www.vr.com' rel='noreferrer' target='_blank'>
            <img src={vr} alt='VR' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com' rel='noreferrer' target='_blank'>
            <img src={instagram} alt='Instagram' />
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com' rel='noreferrer' target='_blank'>
            <img src={facebook} alt='Facebook' />
          </a>
        </li>
        <li>
          <a href='https://www.youtube.com' rel='noreferrer' target='_blank'>
            <img src={youtube} alt='Youtube' />
          </a>
        </li>
        <li>
          <a href='https://www.twitter.com' rel='noreferrer' target='_blank'>
            <img src={twitter} alt='Twitter' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
