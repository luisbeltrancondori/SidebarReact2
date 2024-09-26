import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Estadisticas } from "../pages/Estadisticas";
import { Productos } from "../pages/Productos";
import { Diagramas } from "../pages/Diagramas";
import { Reportes } from "../pages/Reportes";
import { Clientes } from "../pages/Clientes";
import { Inventario } from "../pages/Inventario";
import { Compras } from "../pages/Compras";
import { Ventas } from "../pages/Ventas";

export function MyRoutes() {
  return (


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/estadisticas" element={<Estadisticas />} />
      <Route path="/diagramas" element={<Diagramas />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/inventario" element={<Inventario />} />
      <Route path="/compras" element={<Compras />} />
      <Route path="/ventas" element={<Ventas />} />
    </Routes>

  );
}
