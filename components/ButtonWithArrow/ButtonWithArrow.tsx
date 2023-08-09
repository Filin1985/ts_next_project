import styles from './ButtonWithArrow.module.css';
import {ButtonWithArrowProps} from './ButtonWithArrow.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const ButtonWithArrow = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...props
}: ButtonWithArrowProps): JSX.Element => {
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
