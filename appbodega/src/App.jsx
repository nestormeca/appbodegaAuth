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
        <Route path="/stockrepuestos/equipos" element={<Gruas />} />
        <Route path="/compuestosCaucho" element={<DirectorioCompuestos />} />
        <Route path="/compuestosCaucho/v62" element={<V62 />} />
        <Route path="/compuestosCaucho/v63" element={<V63 />} />
        <Route path="/compuestosCaucho/v1v63" element={<V1V63 />} />
        <Route path="/compuestosCaucho/v65" element={<V65 />} />
        <Route path="/compuestosCaucho/v064" element={<V064 />} />
        <Route path="/compuestosCaucho/v066" element={<V066 />} />
        <Route path="/compuestosCaucho/v057" element={<V057 />} />
        <Route path="/compuestosCaucho/pr2" element={<PR2 />} />
      </Routes>
    </>
  );
};

export default App;
