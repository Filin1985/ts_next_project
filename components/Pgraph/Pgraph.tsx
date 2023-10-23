import classNames from 'classnames';
import styles from './Pgraph.module.css';
import {ParagraphProps} from './Pgraph.props';
import cn from 'classnames';

export const Pgraph = ({
  size = 'm',
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
