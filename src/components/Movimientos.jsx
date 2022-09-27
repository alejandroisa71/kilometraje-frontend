import { useEffect } from "react";
//redux
import {
    fetchOneVehiculo,
  } from "../features/vehiculos/vehiculoSlice";
  import { useDispatch, useSelector } from "react-redux";

  import { useNavigate, useParams } from "react-router-dom";




export const Movimientos = () => {
    const dispatch = useDispatch();
    const { list: vehiculos } = useSelector((state) => state.vehiculos);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        dispatch(fetchOneVehiculo());
      }, [dispatch]);

  return (
    <div>Movimientos</div>
  )
}
