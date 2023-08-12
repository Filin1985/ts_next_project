'use client';
import React, { useEffect, useState } from 'react';
import { LikeProps } from './Like.props';
import cn from 'classnames';
import LikeIcon from './like.svg';
import styles from './Like.module.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const Like = ({ itemId, likes, setLikes }: LikeProps): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const changeLikeOnServer = async () => {
    try {
      const res = await fetch(`${BASE_URL}/${itemId}`, {
        method: 'PATCH',
        body: JSON.stringify(likes),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    changeLikeOnServer();
  }, [likes]);

  const handleLike = () => {
    setIsLiked(!isLiked)
    console.log(isLiked)
    if(isLiked) {
      setLikes(likes + 1)
    } else {
      setLikes(likes - 1)
    }
  };

  return (
    <div className={styles.tagLike}>
      <p className={styles.tagTime}>{likes}</p>
      <LikeIcon className={cn({
        [styles.filled]: isLiked
      })} onClick={handleLike} />
    </div>
  );
};
