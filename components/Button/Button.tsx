import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = cn(styles.button, className, {
    [styles.primary]: appearance === 'primary',
    [styles.ghost]: appearance === 'ghost',
  });

  return (
    <button {...props} className={classes}>
      {children}
      {arrow !== 'none' && (
        <ArrowIcon
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        />
      )}
    </button>
  );
};
