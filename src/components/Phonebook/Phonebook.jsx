import { lazy, Suspense } from "react";
import { Loader } from "../Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './Phonebook.module.css';
import { selectError, selectIsLoading } from "../../redux/selector";
import { fetchContacts } from "../../redux/operations";

const ContactForm = lazy(() => import("../ContactForm/ContactForm"));
const ContactList = lazy(() => import("../ContactList/ContactList"));
const SearchBox = lazy(() => import("../SearchBox/SearchBox"));

export function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div className={styles.container}>
        <Suspense fallback={<Loader />}>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
          {isLoading && !error && <Loader />}
        </Suspense>
      </div>
    </>
  );
}