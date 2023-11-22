// import './App.css'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Carrito from "./views/Carrito";
import Detalle from "./views/Detalle";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pizza/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
