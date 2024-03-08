import styles from "./NotFound.module.css";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textBlock}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          We can`t seem to find the page you`re looking for. Please check the
          URL.
        </p>
        <nav className={styles.nav}>
          <NavLink className={styles.link} to="/">
            Go to Homepage
          </NavLink>
        </nav>
      </div>
      <div>
        <img
          className={styles.img}
          src="https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg"
          alt="NotFoundImg"
        />
      </div>
    </div>
  );
}
