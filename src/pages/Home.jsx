import DocumentTitle from "../components/DocumentTitle/DocumentTitle";
const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "block",
    maxWidth: "1200px",
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Congratulations!
          You are on the Phonebook website.
          Sign in or register{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
