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
        //   src="https://www.dreamhost.com/blog/wp-content/uploads/2022/10/404-Error-Message.jpg"
          src="./notFound.png"
          alt="NotFoundImg"
          width={360}
          height={360}
        />
      </div>
    </div>
  );
}
