'use client';
import { useEffect, useState } from 'react';
import { LikeProps } from './Like.props';
import cn from 'classnames';
import LikeIcon from '@/public/icons/like.svg';
import styles from './Like.module.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const changeLikeOnServer = async (itemId: string, likes: number) => {
  try {
    const res = await fetch(`${BASE_URL}/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ likes }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const Like = ({ itemId, likes }: LikeProps): JSX.Element => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    changeLikeOnServer(itemId, likes);
  }, [likes]);

  const handleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className={styles.tagLike}>
      <span className={styles.likesAmount}>
        {isLiked ? likes + 1 : isLiked}
      </span>
      <LikeIcon
        className={cn({
          [styles.filled]: isLiked,
        })}
        onClick={handleLike}
      />
    </div>
  );
};
