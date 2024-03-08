import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import styles from "./Navigation.module.css";
import Button from "../Button/Button";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          <Button variant="contained">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
