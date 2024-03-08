import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";
import Button from "../Button/Button";
import * as Yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import toast from "react-hot-toast";

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field")
    .min(3, "Email must be at least 3 symbols long")
    .max(50, "Email must be at less 50 symbols long")
    .test(
      "is-not-empty",
      "Email cannot be just spaces",
      (value) => value?.trim().length > 0
    ),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 symbols long")
    .max(50, "Password must be at less 50 symbols long"),
});

export const LoginForm = () => {
  const emailField = useId();
  const passwordField = useId();
  const dispatch = useDispatch();
  const handleLogin = (userData) => {
    dispatch(logIn(userData))
      .unwrap()
      .then(() => {
        toast.success("Login Success");
      })
      .catch(() => {
        toast.error("Invalid password or email");
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        const userData = {
          email: values.email,
          password: values.password,
        };
        handleLogin(userData);
        actions.resetForm();
      }}
    >
      <Form className={styles.form} autoComplete="on">
        <div className={styles.box}>
          <label htmlFor={emailField} className={styles.label}>
            Email
          </label>
          <Field
            className={styles.field}
            type="email"
            name="email"
            id={emailField}
          />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>
        <div className={styles.box}>
          <label className={styles.label} htmlFor={passwordField}>
            Password
          </label>
          <Field
            className={styles.field}
            type="password"
            name="password"
            id={passwordField}
          />
          <ErrorMessage className={styles.error} name="number" component="span" />
        </div>
        <div className={styles.btnGroup}>
          <Button type="submit" className={styles.button}>Log In</Button>
        </div>
      </Form>
    </Formik>
  );
};
