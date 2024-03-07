// import { useDispatch } from "react-redux";
// import { logIn } from "../../redux/auth/operations";
// import styles from "./LoginForm.module.css";
// import * as Yup from "yup";
// import { Field, Formik, Form, ErrorMessage } from "formik";
// import { useId } from "react";
// import toast from "react-hot-toast";

// const userSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Email is required")
//     .min(3, "Minimum 3 characters")
//     .max(50, "Maximum 50 characters"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(8, "Minimum 8 symbols")
//     .max(50, "Maximum 50 characters"),
// });

// export const LoginForm = () => {
//   const emailField = useId();
//   const passwordField = useId();

//   const dispatch = useDispatch();

//   const handleLogin = (userData) => {
//     dispatch(logIn(userData))
//       .unwrap()
//       .then(() => {
//         toast.success("Login Success");
//       })
//       .catch(() => {
//         toast.error("Invalid password or email");
//       });
//   };

//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         password: "",
//       }}
//       validationSchema={userSchema}
//       onSubmit={(values, actions) => {
//         const userData = {
//           email: values.email,
//           password: values.password,
//         };
//         handleLogin(userData);
//         actions.resetForm();
//       }}
//     >
//       <Form className={styles.form} autoComplete="on">
//         <div className={styles.formGroup}>
//           <label htmlFor={emailField} className={styles.label}>
//             Email
//           </label>
//           <Field
//             className={styles.formFiled}
//             type="email"
//             name="email"
//             id={emailField}
//           />
//           <ErrorMessage className={styles.error} name="name" component="span" />
//         </div>
//         <div className={styles.formGroup}>
//           <label className={styles.label} htmlFor={passwordField}>
//             Password
//           </label>
//           <Field
//             className={styles.formFiled}
//             type="password"
//             name="password"
//             id={passwordField}
//           />
//           <ErrorMessage className={styles.error} name="number" component="span" />
//         </div>
//         <div className={styles.btnGroup}>
//           <button className={styles.btn} type="submit">
//             Log In
//           </button>
//         </div>
//       </Form>
//     </Formik>
//   );
// };
