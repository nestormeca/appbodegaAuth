import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Registro from "./routes/Registro";

import RequiereAuth from "./components/RequiereAuth";

const App = () => {
  return (
    <Routes className="App">
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/"
        element={
          <RequiereAuth>
            <Home />
          </RequiereAuth>
        }
      ></Route>
      <Route path="/registro" element={<Registro />}></Route>
    </Routes>
  );
};

export default App;
