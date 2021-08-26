import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Loader from '../../components/Loader';
import { client } from '../../client';
import styles from './AboutScreen.module.scss';

const AboutScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'aboutPage',
      })
      .then((response) => {
        setData(response.items[0].fields);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <h1>
          {data.title} <span>{data.miniTitle}</span>
        </h1>
      )}
      <div>{!loading && documentToReactComponents(data.body)}</div>
      {loading ? (
        ''
      ) : (
        <form action='https://formspree.io/f/mayawqrz' method='POST'>
          <div className={styles.formGroup}>
            <input
              type='email'
              name={data.box1}
              placeholder={data.box1}
              className={styles.formControl}
            />
            <input
              type='text'
              name={data.box2}
              placeholder={data.box2}
              className={styles.formControl}
            />

            <textarea
              name={data.box3}
              rows='5'
              placeholder={data.box3}
              className={styles.formControl}
            ></textarea>
          </div>
          <button type='submit'>{data.buttonText}</button>
        </form>
      )}
    </div>
  );
};

export default AboutScreen;
