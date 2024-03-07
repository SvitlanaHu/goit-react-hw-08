import styles from './Button.module.css';

const Button = ({ id, children, onClick = () => {}, type }) => {
  return (
    <button type={type} onClick={() => onClick(id)} className={styles.button}>
      {children}
    </button>
  );
};
export default Button;