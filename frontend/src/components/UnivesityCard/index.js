import React from 'react';

import styles from './UniversityCard.module.scss';

const UniversityCard = ({ data }) => {
  const { name, forumSlug, website, image } = data;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={image.fields.file.url} alt={image.fields.file.title} />
        <div className={styles.fade}></div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default UniversityCard;
