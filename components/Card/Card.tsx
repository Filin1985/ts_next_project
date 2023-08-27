import { CardProps } from './Card.props';
import { Tag, Pgraph, Htag } from '..';
import { Like } from '../Like/Like';
import ArrowIcon from '@/public/icons/arrow.svg';
import Image from 'next/image';
import screenPicture from '@/public/images/screen.png';
import styles from './Card.module.css';

export const Card = ({ title, tag, text }: CardProps): JSX.Element => {

  return (
    <article className={styles.container}>
      <Image className={styles.img} src={screenPicture} alt="Picture" />
      <div className={styles.textContainer}>
        <div className={styles.tagContainer}>
          <div className={styles.tagName}>
            <Tag size="s">{tag}</Tag>
            <p className={styles.tagTime}>1 месяц назад</p>
          </div>
          <Like itemId="1" />
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
          <a href='#' className={styles.tagTime}>Читать</a>
          <ArrowIcon />
        </div>
      </div>
    </article>
  );
};
