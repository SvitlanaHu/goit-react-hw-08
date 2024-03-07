import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Button from '../Button/Button';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  
  return (
    <li className={styles.item}>
        <div className={styles.box} id={id}>
            <div className={styles.str}>
                <IoPerson className={styles.icon} /><span className={styles.name}>   {name}</span>
            </div>
            <div className={styles.str}>
                <FaPhoneAlt className={styles.icon} /><span className={styles.number}>   {number}</span>
            </div>
        </div>
      <Button type={"button"} onClick={onDelete} id={id}>
        Delete
      </Button>
    </li>
  );
};
export default Contact;