import styles from './ContactList.module.css';
import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/selector";
import { deleteContacts } from "../../redux/operations";

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);
    const handleDelete = (id) => {
        dispatch(deleteContacts(id));
    };

    return (
        <div className={styles.container}>
            <ul className={styles.contact}>
                {filteredContacts.map(({ id, name, number }) => (
                    <Contact
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDelete={() => handleDelete(id)}
                    />
                ))}
            </ul>
        </div>
    );
};
export default ContactList;