import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
import Button from "@mui/material/Button";

export const AuthNav = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.link} to="/register">
        <Button variant="contained">Register</Button>
      </NavLink>
      <NavLink className={styles.link} to="/login">
        <Button
          variant="contained"
          size="small
		  "
        >
          Log In
        </Button>
      </NavLink>
    </div>
  );
};
