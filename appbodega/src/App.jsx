import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Registro from "./routes/Registro";

import ProtectedRoute from "./components/ProtectedRoute";
import StockRepuestos from "./routes/StockRepuestos";

import V1V63 from "./components/consumoCompuesto/compuestos/V1-V63";
import V62 from "./components/consumoCompuesto/compuestos/V62";
import V63 from "./components/consumoCompuesto/compuestos/V63";
import DirectorioCauchos from "./components/consumoCompuesto/DirectorioCauchos";
import Navbar from "./components/Navbar";
import Gruas from "./routes/EquiposStock/Gruas";
import V65 from "./components/consumoCompuesto/compuestos/V65";
import V064 from "./components/consumoCompuesto/compuestos/V064";
import V066 from "./components/consumoCompuesto/compuestos/V066";
import PR2 from "./components/consumoCompuesto/compuestos/PR2";
import V057 from "./components/consumoCompuesto/compuestos/V057";
import { CargaDeCaucho } from "./routes/CargaDeCaucho";
import { SolicitudDeCompuesto } from "./components/consumoCompuesto/SolicitudDeCompuesto";
import ConsumoAno from "./components/consumoCompuesto/compuestos/ConsumoAno";
import { BotonVolver } from "./components/BotonVolver";

const App = () => {
  return (
    <>
      <Navbar />
      <BotonVolver />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stockrepuestos"
          element={
            <ProtectedRoute>
              <StockRepuestos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stockrepuestos/equipos"
          element={
            <ProtectedRoute>
              <Gruas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho"
          element={
            <ProtectedRoute>
              <DirectorioCauchos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos/v62"
          element={
            <ProtectedRoute>
              <V62 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos/v63"
          element={
            <ProtectedRoute>
              <V63 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos/V1V63"
          element={
            <ProtectedRoute>
              <V1V63 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos/V65"
          element={
            <ProtectedRoute>
              <V65 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos/V064"
          element={
            <ProtectedRoute>
              <V064 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos/V066"
          element={
            <ProtectedRoute>
              <V066 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos/V057"
          element={
            <ProtectedRoute>
              <V057 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos/PR2"
          element={
            <ProtectedRoute>
              <PR2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/consumos"
          element={
            <ProtectedRoute>
              <ConsumoAno />
            </ProtectedRoute>
          }
        />

        <Route
          path="/directoriocaucho/recepcion"
          element={
            <ProtectedRoute>
              <CargaDeCaucho />
            </ProtectedRoute>
          }
        />
        <Route
          path="/directoriocaucho/solicitudcaucho"
          element={
            <ProtectedRoute>
              <SolicitudDeCompuesto />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
