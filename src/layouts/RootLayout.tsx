import { Link, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <nav className={styles["root-layout"]}>
        <Link to="/">Home</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/aslkdfjlaskjefdlk">Test "Not Found"</Link>
      </nav>
      <Outlet />
    </>
  );
}
