import { Route, Routes } from "react-router-dom";
import CatsPage from ".";
import CatsLayout from "../../layouts/CatsLayout";
import BritishShorthairPage from "./british-shorthair";
import MaineCoonPage from "./maine-coon";
import RussianBluePage from "./russian-blue";

export default function CatsRoutes() {
  return (
    <Routes>
      <Route element={<CatsLayout />}>
        <Route path="/" element={<CatsPage />} />
        <Route path="/british-shorthair" element={<BritishShorthairPage />} />
        <Route path="/maine-coon" element={<MaineCoonPage />} />
        <Route path="/russian-blue" element={<RussianBluePage />} />
      </Route>
    </Routes>
  );
}
