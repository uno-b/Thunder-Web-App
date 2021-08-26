import React from 'react';

import styles from './NewsPost.module.scss';

const NewsPost = ({ data }) => {
  const { title, image, publicationDate, shortDescription } = data;
  console.log(publicationDate.fields);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={image.fields.file.url} alt={image.fields.title.url} />
        <div className={styles.info}>
          <a href='/'>{title}</a>
          <p>{publicationDate}</p>
          <p>{shortDescription}</p>
        </div>
      </div>
      <div className={styles.underline} />
    </div>
  );
};

export default NewsPost;
