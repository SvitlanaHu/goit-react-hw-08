import styles from "./Phonebook.module.css";
import { selectError, selectIsLoading } from "../../redux/Contacts/selector";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";
import { ContactForm } from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import { ContactList } from "../ContactList/ContactList";

export default function Phonebook() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div className={styles.box}>
      <div className={styles.form}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
}
