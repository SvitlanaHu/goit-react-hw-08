import { RegisterForm } from "../components/RegisterForm/RegisterForm";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
    
  },
};

export default function Register() {
  return (
    <div style={styles.container}>
      <DocumentTitle>Register</DocumentTitle>
      <div>
        <RegisterForm />
      </div>
    </div>
  );
}
