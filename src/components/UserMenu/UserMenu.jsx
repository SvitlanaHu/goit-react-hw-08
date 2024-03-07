import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks";
import styles from "./UserMenu.module.css";
import Button from "@mui/material/Button";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Welcome, {user.name}</p>
      <Button
        type="button"
        variant="contained"
        size="medium"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </div>
  );
};
