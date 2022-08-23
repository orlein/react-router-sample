import { Route, Routes } from "react-router-dom";
import HomePage from ".";
import RootLayout from "../layouts/RootLayout";
import CatsRoutes from "./cats/_routes";
import DogsRoutes from "./dogs/_routes";
import NotFoundPage from "./not-found";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />;
        <Route path="/dogs/*" element={<DogsRoutes />} />
        <Route path="/cats/*" element={<CatsRoutes />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
