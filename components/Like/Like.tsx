import React from 'react';
import LikeIcon from './like.svg';
import styles from './Like.module.css';

export const Like = () => {
  return (
    <div className={styles.tagLike}>
      <p className={styles.tagTime}>4</p>
      <LikeIcon color='white' />
    </div>
  );
};
