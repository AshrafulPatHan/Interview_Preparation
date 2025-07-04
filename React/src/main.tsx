import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
// import MainProps from "./components/props/MainProps";
import Data from "./components/props/Data";
import Login from "./page/auth/sql/Login";
import Registration from "./page/auth/sql/registration";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/props" element={<Data />} />
      <Route path="/sql/login" element={<Login />} />
      <Route path="/sql/registration" element={<Registration />} />
    </Routes>
  </BrowserRouter>
);
