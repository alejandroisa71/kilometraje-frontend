import { BrowserRouter, Route, Routes } from "react-router-dom";
import VehiculoForm from "./components/VehiculoForm";
// import { Navbar } from "./components/Navbar";
// import { VehiculosList } from "./components/VehiculosList";
import { InsumosPage } from "./pages/InsumosPage";
import { HomePage } from "./pages/HomePage";
import { BarraNav } from "./components/BarraNav";
//Redux
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Movimientos } from "./components/Movimientos";

export function App() {
  //const vehiculosState = useSelector((state) => state.vehiculos);
  //console.log(vehiculosState);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <BarraNav />
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/insumos" element={<InsumosPage />} />
            <Route path="/create-vehiculo" element={<VehiculoForm />} />
            <Route path="/edit-vehiculo/:id" element={<VehiculoForm />} />
            <Route path="/movimientos/:id" element={<Movimientos/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
