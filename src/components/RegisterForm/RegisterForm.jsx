import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegisterForm.module.css";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Username is required")
    .min(3, "Minimum 8 symbols")
    .max(50, "Maximum 50 characters"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Minimum 8 symbols")
    .max(50, "Maximum 50 characters"),
});

export const RegisterForm = () => {
  const userNameField = useId();
  const emailField = useId();
  const passwordField = useId();

  const dispatch = useDispatch();

  const handleRegister = (newUser) => {
    dispatch(register(newUser))
      .unwrap()
      .then(() => {
        toast.success("Account successfuly created");
      })
      .catch(() => {
        toast.error("Registration error");
      });
  };

  return (
    <div className={styles.container}>
      <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        const newUser = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        handleRegister(newUser);
        actions.resetForm();
      }}
    >
      <Form className={styles.form} autoComplete="on">
        <div className={styles.formGroup}>
          <label htmlFor={userNameField}>
            Username:
          </label>
          <Field
            className={styles.label}
            type="text"
            name="name"
            placeholder="Login"
            id={userNameField}
          />

          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={emailField}>
            Email
          </label>
          <Field
            className={styles.label}
            type="email"
            name="email"
            placeholder="Email"
            id={emailField}
          />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={passwordField}>
            Password
          </label>
          <Field
            className={styles.label}
            type="password"
            name="password"
            placeholder="Password"
            id={passwordField}
          />
          <ErrorMessage className={styles.error} name="number" component="span" />
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} type="submit">
            Register
          </button>
        </div>
      </Form>
    </Formik>
    </div>
  );
};
