import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { CarPage } from "../pages/CarPage";
import { Admin } from "../pages/Admin";
import Relatorios from "../pages/Relatorios";
import { Historico } from "../pages/Historico";


const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/conversas/:id" element={<Admin />} />
        <Route path="/relatorio" element={<Relatorios />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouteApp };
