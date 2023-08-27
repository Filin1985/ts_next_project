import Image from 'next/image';
import { HeaderProps } from './Header.props';
import GitHubIcon from '@/public/icons/github.svg';
import gitHubIcon from './github.svg?url';
import styles from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div {...props} className={styles.container}>
      <h1 className={styles.title}>.my_blog</h1>
      <Image src={gitHubIcon} alt='Github'/>
    </div>
  );
};
