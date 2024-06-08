import { Route, Routes } from "react-router";
import { Home } from "./screens/Home";

import { Login } from "./screens/Auth/Login";
import { Register } from "./screens/Auth/Register";

import { Dashboard } from "./screens/Dashboard";
import { Clima } from "./screens/Dashboard/Clima";
import { Precipitacao } from "./screens/Dashboard/Precipitacao";
import { Marcadores } from "./screens/Dashboard/Marcadores";
import { Previsoes } from "./screens/Dashboard/Previsoes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/clima" element={<Clima />} />
      <Route path="/dashboard/precipitacao" element={<Precipitacao />} />
      <Route path="/dashboard/marcadores" element={<Marcadores />} />
      <Route path="/dashboard/previsoes" element={<Previsoes />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
