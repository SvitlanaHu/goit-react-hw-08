import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks";
import css from "./Navigation.module.css";
import Button from "@mui/material/Button";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <Button variant="contained">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <Button variant="contained">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
