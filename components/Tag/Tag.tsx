import React from 'react';
import {TagProps} from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
  size = 'm',
  children,
  color = 'ghost',
  href,
  ...props
}: TagProps): JSX.Element => {
  const className = cn(styles.tag, props.className, {
    [styles.s]: size === 's',
    [styles.m]: size === 'm',
    [styles.ghost]: color === 'ghost',
    [styles.red]: color === 'red',
    [styles.gray]: color === 'gray',
    [styles.green]: color === 'green',
    [styles.primary]: color === 'primary',
  });

  const propsWithClass = {...props, className};

  if (href) {
    return <a {...propsWithClass}>{children}</a>;
  }

  if (props.onClick) {
    return <button {...propsWithClass}>{children}</button>;
  }

  return <span {...propsWithClass}>{children}</span>;
};
