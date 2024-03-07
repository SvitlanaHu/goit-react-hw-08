import { Hourglass } from "react-loader-spinner";
import styles from "./RefreshingPage.module.css";

export default function RefreshingPage() {
  return (
    <div className={styles.backdrop}>
      <Hourglass
        className={styles.loader}
        visible={true}
        height="150"
        width="150"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
      <b className={styles.text}>Refreshing user...</b>
    </div>
  );
}
