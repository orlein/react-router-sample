import { Link, Outlet } from "react-router-dom";

export default function DogsLayout() {
  return (
    <>
      <nav>
        <Link to="/dogs/jindo">진돗개</Link>
        <Link to="/dogs/siberian-husky">시베리안 허스키</Link>
        <Link to="/dogs/welsh-corgi">웰시코기</Link>
      </nav>
      <Outlet />
    </>
  );
}
