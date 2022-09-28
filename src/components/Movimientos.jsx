import {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//redux
import {
  addOneVehiculo,
  updateOneVehiculo,
  fetchAllVehiculos,
  } from "../features/vehiculos/vehiculoSlice";

  import { useNavigate, useParams } from "react-router-dom";




export const Movimientos = () => {

   const [vehiculo, setVehiculo] = useState({
    patente: "",
    modelo: "",
    promedio: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const vehiculos = useSelector((state) => state.vehiculos);
  // const handleChange = (e) => {
  //   setVehiculo({
  //     ...vehiculo,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // let { patente, modelo, promedio } = vehiculo;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // promedio = parseInt(promedio, 10);

  //   // validacion de los datos
  //   if (patente === "" || modelo === "" || promedio <= 0) {
  //     alert("Todos los campos son Obligatorios");
  //     return;
  //   }

  //   if (params.id) {
  //     dispatch(updateOneVehiculo(vehiculo));
  //   } else {
  //     dispatch(addOneVehiculo(vehiculo));
  //   }
  //   dispatch(fetchAllVehiculos());
  //   navigate("/");
  // };
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
    console.log(vehiculo)
  
    // const [vehiculo, setVehiculo] = useState({});
    // const dispatch = useDispatch();
    // const { list: vehiculos } = useSelector((state) => state.vehiculos);
    // const params = useParams();
    // // const {id}=params;
    // // console.log(id +1)
    // // console.log(params);
    // // console.log(vehiculo);

    // if (params.id) {
    //   dispatch(fetchOneVehiculo(params));
    // }

    // useEffect(() => {
    //   if (params.id) {
    //     setVehiculo(
    //       vehiculos.list.find(
    //         (vehiculo) => vehiculo.id === parseInt(params.id, 10)
    //       )
    //     );
    //   }
    // }, [params.id, vehiculos.list]);

  return (
    <div>{vehiculo}</div>
  )
}
