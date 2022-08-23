import { Route, Routes } from "react-router-dom";
import DogsPage from ".";
import DogsLayout from "../../layouts/DogsLayout";
import JindoPage from "./jindo";
import SiberianHuskyPage from "./siberian-husky";
import WelshCorgiPage from "./welsh-corgi";

export default function DogsRoutes() {
  return (
    <Routes>
      <Route element={<DogsLayout />}>
        <Route path="/" element={<DogsPage />} />
        <Route path="/jindo" element={<JindoPage />} />
        <Route path="/siberian-husky" element={<SiberianHuskyPage />} />
        <Route path="/welsh-corgi" element={<WelshCorgiPage />} />
      </Route>
    </Routes>
  );
}
