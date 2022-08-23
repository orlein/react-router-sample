import { Link, Outlet } from "react-router-dom";

export default function CatsLayout() {
  return (
    <>
      <nav>
        <Link to="/cats/maine-coon">Maine Coon</Link>
        <Link to="/cats/russian-blue">Russian Blue</Link>
        <Link to="/cats/british-shorthair">British Shorthair</Link>
      </nav>
      <Outlet />
    </>
  );
}
