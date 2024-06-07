import { Route, Routes } from "react-router";
import { Home } from "./screens/Home";
import { Dashboard } from "./screens/Dashboard";
import { Login } from "./screens/Auth/Login";
import { Register } from "./screens/Auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
