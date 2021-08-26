import React, { useState, useEffect } from 'react';

import { client } from '../../client';
import NewsPost from '../../components/NewsPost';
import Loader from '../../components/Loader';
import styles from './NewsScreen.module.scss';

const NewsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.getEntries({
        content_type: 'newsPost',
      });

      setItems(data.items);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.postList}>
          {items.map((item) => {
            return <NewsPost data={item.fields} />;
          })}
        </div>
      )}
    </div>
  );
};

export default NewsScreen;
