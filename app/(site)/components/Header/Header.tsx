import React from 'react';
import { HeaderProps } from './Header.props';
import GithubIcon from './github.svg'
import styles from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <div className={styles.container} {...props}>
            <h1 className={styles.title}>.my_blog</h1>
            <GithubIcon />
        </div>
    );
};