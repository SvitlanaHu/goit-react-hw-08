import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from './ContactForm.module.css';
import Button from "../Button/Button";
import { addContacts } from "../../redux/operations";
import { useDispatch } from "react-redux";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("This is a required field")
    .min(3, "Name must be at least 3 symbols long")
    .max(50, "Name must be at less 50 symbols long")
    .test(
      "is-not-empty",
      "Name cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
  number: Yup.string()
    .required("This is a required field")
    .min(3, "Phone must be at least 3 symbols long")
    .max(50, "Phone must be at less 50 symbols long")
    .matches(/^\+?[0-9\s-]+$/, "Invalid phone number"),
});

const ContactForm = () => {
  const nameField = useId();
  const numberField = useId();
  const dispatch = useDispatch();
  const handleAddContact = (values, { setSubmitting, resetForm }) => {
    dispatch(addContacts(values));
    setSubmitting(false);
    resetForm();
  };

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                  name: "",
                  number: "",
                }}
                validationSchema={userSchema}
                onSubmit={handleAddContact}
            >
                <Form className={styles.form} autoComplete="off">
                    <div className={styles.box}>
                        <label htmlFor={nameField}>Name:</label>
                        <Field
                            className={styles.label}
                            type="text"
                            name="name"
                            placeholder="Name Surname"
                            id={nameField}
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className={styles.error}
                        />
                    </div>
                    
                    <div className={styles.box}>
                        <label htmlFor={numberField}>Phone:</label>
                        <Field
                            className={styles.label}
                            name="number"
                            placeholder="Number"          
                            id={numberField}
                        />
                        <ErrorMessage
                           name="number"
                           component="span"
                           className={styles.error}
                        />
                    </div>
                    
                    <Button type="submit" className={styles.button}>Add contact</Button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
