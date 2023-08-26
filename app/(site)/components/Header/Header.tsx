import React from 'react';
import Image from 'next/image';
import { HeaderProps } from './Header.props';
import gitHubIcon from '@/public/icons/github.svg?url';
import styles from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.container} {...props}>
      <h1 className={styles.title}>.my_blog</h1>
      <Image src={gitHubIcon} alt='Github'/>
    </div>
  );
};
