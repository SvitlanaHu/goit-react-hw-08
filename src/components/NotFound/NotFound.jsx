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
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*QOZm9X5er1Y0r5-t"
          alt="NotFoundImg"
        />
      </div>
    </div>
  );
}
