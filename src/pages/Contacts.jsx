import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/Contacts/operations";
import DocumentTitle from "../Components/DocumentTitle";
import PhoneBook from "../Components/PhoneBook/PhoneBook";

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
