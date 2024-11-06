import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "@/login";
import { Cadastro } from "@/cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
