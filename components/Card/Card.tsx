import React, { useState } from 'react';
import { CardProps } from './Card.props';
import { Tag, Pgraph, Htag } from '..';
import { Like } from '../Like/Like';
import ArrowIcon from './arrow.svg';
import Image from 'next/image';
import screenPicture from '../../images/screen.png';
import styles from './Card.module.css';

export const Card = ({ title, tag, text }: CardProps): JSX.Element => {
  const [totalLikes, setTotalLikes] = useState<number>(0);

  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src={screenPicture} alt="Picture" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.tagContainer}>
          <div className={styles.tagName}>
            <Tag size="s">{tag}</Tag>
            <p className={styles.tagTime}>1 месяц назад</p>
          </div>
          <Like itemId="1" likes={totalLikes} setLikes={setTotalLikes} />
        </div>
        <div>
          <Htag className={styles.title} tag="h3">
            {title}
          </Htag>
          <Pgraph size="s">{text}</Pgraph>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <p className={styles.tagTime}>4 минуты</p>
        <div className={styles.linkContainer}>
          <p className={styles.tagTime}>Читать</p>
          <ArrowIcon />
        </div>
      </div>
    </article>
  );
};
