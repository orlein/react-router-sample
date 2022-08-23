import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./pages/_routes";
import "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
  );
}

export default App;
