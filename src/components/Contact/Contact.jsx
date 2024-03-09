import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import styles from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/Contacts/operations";
import Button from "../Button/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";

const Contact = ({ name, number, id}) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContacts(id))
      .unwrap()
      .then(() => {
        toast.success("The contact has been deleted");
      })
      .catch(() => {
        toast.error("Deletion error ");
      });
  };

  return (
    <li className={styles.item}>
        <div className={styles.box}>
            <div className={styles.str}>
                <IoPerson className={styles.icon} /><span className={styles.name}>   {name}</span>
            </div>
            <div className={styles.str}>
                <FaPhoneAlt className={styles.icon} /><span className={styles.number}>   {number}</span>
            </div>
        </div>
      <Button 
        variant="outlined"
        size="small"
        onClick={handleDeleteContact}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  );
};
export default Contact;