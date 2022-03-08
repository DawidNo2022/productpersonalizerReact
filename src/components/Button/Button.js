import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ className, children, ...rest }) => {
  //operator restowy
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
