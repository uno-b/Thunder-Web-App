import React, { useState, useEffect } from 'react';

import { client } from '../../client';
import Loader from '../../components/Loader';
import cardboardImg from '../../images/cardboard.png';
import Popup from '../../components/Popup';
import styles from './CardBoardScreen.module.scss';

const CardBoardScreen = () => {
  const [timedPopup, setTimedPopup] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Modal pops up after 3 seconds in the cardboard page
    setTimeout(() => setTimedPopup(true), 3000);

    client
      .getEntries({
        content_type: 'cardboardPage',
      })
      .then((response) => {
        setData(response.items[0].fields);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.wrapper}>
              <h1>{data.title}</h1>
              <h2>{data.subtitle}</h2>
              <p>{data.text}</p>
              <form action='https://formspree.io/f/xqkwzeov' method='POST'>
                <div className={styles.formGroup}>
                  <input
                    type='text'
                    name={data.box1Placeholder}
                    placeholder={data.box1Placeholder}
                    className={styles.formControl}
                  />
                  <input
                    type='text'
                    name={data.box2Placeholder}
                    placeholder={data.box2Placeholder}
                    className={styles.formControl}
                  />
                  <input
                    type='text'
                    name={data.box3Placeholder}
                    placeholder={data.box3Placeholder}
                    className={styles.formControl}
                  />
                  <input
                    type='text'
                    name={data.box4Placeholder}
                    placeholder={data.box4Placeholder}
                    className={styles.formControl}
                  />
                </div>
                <button type='submit' className='submit-btn btn'>
                  {data.buttonText}
                </button>
              </form>
            </div>
            <img src={cardboardImg} alt='Cardboard' />
          </>
        )}
      </div>

      {timedPopup && <Popup setTrigger={setTimedPopup} />}
    </>
  );
};

export default CardBoardScreen;
