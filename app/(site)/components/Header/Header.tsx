import React from 'react';
import Image from 'next/image';
import { HeaderProps } from './Header.props';
import GitHubIcon from '@/public/icons/github.svg';
import styles from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.container} {...props}>
      <h1 className={styles.title}>.my_blog</h1>
      <GitHubIcon />
    </div>
  );
};
