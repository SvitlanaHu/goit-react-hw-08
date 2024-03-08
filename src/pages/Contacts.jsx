import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
import PhoneBook from "../components/Phonebook/Phonebook";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Contacts</DocumentTitle>
      <PhoneBook />
    </>
  );
}
