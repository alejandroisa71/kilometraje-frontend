import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOneVehiculo,
  updateOneVehiculo,
  fetchAllVehiculos,
} from "../features/vehiculos/vehiculoSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function VehiculoForm() {
  const [vehiculo, setVehiculo] = useState({
    patente: "",
    modelo: "",
    promedio: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const vehiculos = useSelector((state) => state.vehiculos);
  const handleChange = (e) => {
    setVehiculo({
      ...vehiculo,
      [e.target.name]: e.target.value,
    });
  };

  let { patente, modelo, promedio } = vehiculo;
  const handleSubmit = (e) => {
    e.preventDefault();
    promedio = parseInt(promedio, 10);

    // validacion de los datos
    if (patente === "" || modelo === "" || promedio <= 0) {
      alert("Todos los campos son Obligatorios");
      return;
    }

    if (params.id) {
      dispatch(updateOneVehiculo(vehiculo));
    } else {
      dispatch(addOneVehiculo(vehiculo));
    }
    dispatch(fetchAllVehiculos());
    navigate("/");
  };
  //-----------------------------------1.24.50----------------------------------

  // // reiniciando state de vehiculo
  // setVehiculo({
  //   patente: "",
  //   modelo: "",
  //   promedio: 0,
  // });
  useEffect(() => {
    if (params.id) {
      setVehiculo(
        vehiculos.list.find(
          (vehiculo) => vehiculo.id === parseInt(params.id, 10)
        )
      );
    }
  }, [params.id, vehiculos.list]);

  return (
    // <form>
    <div className="container col-12 col-m-4 col-lg-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="patente">
            Patente
          </label>
          <input
            value={patente}
            name="patente"
            onChange={handleChange}
            id="patente"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="modelo">
            Modelo
          </label>
          <input
            value={modelo}
            name="modelo"
            onChange={handleChange}
            id="modelo"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="promedio">
            Promedio
          </label>
          <input
            value={promedio}
            name="promedio"
            onChange={handleChange}
            id="promedio"
            type="number"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}
