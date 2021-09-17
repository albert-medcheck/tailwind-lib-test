import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return <button className={styles.button}>{label}</button>;
}

export default Button;
