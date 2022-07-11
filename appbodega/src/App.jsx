import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Registro from "./routes/Registro";

import ProtectedRoute from "./components/ProtectedRoute";
import StockRepuestos from "./routes/StockRepuestos";

import V1V63 from "./components/consumoCompuesto/compuestos/V1-V63";
import V62 from "./components/consumoCompuesto/compuestos/V62";
import V63 from "./components/consumoCompuesto/compuestos/V63";
import DirectorioCompuestos from "./components/DirectorioCompuestos";
import Navbar from "./components/Navbar";
import Gruas from "./routes/EquiposStock/Gruas";
import V65 from "./components/consumoCompuesto/compuestos/V65";
import V064 from "./components/consumoCompuesto/compuestos/V064";
import V066 from "./components/consumoCompuesto/compuestos/V066";
import PR2 from "./components/consumoCompuesto/compuestos/PR2";
import V057 from "./components/consumoCompuesto/compuestos/V057";
import { CargaDeCaucho } from "./routes/CargaDeCaucho";
import { SolicitudDeCompuesto } from "./components/consumoCompuesto/SolicitudDeCompuesto";

const App = () => {
  return (
    <>
      <Navbar />
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
          path="/compuestosCaucho"
          element={
            <ProtectedRoute>
              <DirectorioCompuestos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/v62"
          element={
            <ProtectedRoute>
              <V62 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/v63"
          element={
            <ProtectedRoute>
              <V63 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/v1v63"
          element={
            <ProtectedRoute>
              <V1V63 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/v65"
          element={
            <ProtectedRoute>
              <V65 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/v064"
          element={
            <ProtectedRoute>
              <V064 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/v066"
          element={
            <ProtectedRoute>
              <V066 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/v057"
          element={
            <ProtectedRoute>
              <V057 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/pr2"
          element={
            <ProtectedRoute>
              <PR2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/compuestosCaucho/cargarcompuesto"
          element={
            <ProtectedRoute>
              <CargaDeCaucho />
            </ProtectedRoute>
          }
        />
        <Route
          path="/solicitudDeCompuesto"
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
