import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Stack } from "react-bootstrap";
//redux
import {
  fetchAllVehiculos,
  deleteOneVehiculo,
} from "../features/vehiculos/vehiculoSlice";
import { useDispatch, useSelector } from "react-redux";

export function VehiculosList() {
  const dispatch = useDispatch();

  const { list: vehiculos } = useSelector((state) => state.vehiculos);

  useEffect(() => {
    dispatch(fetchAllVehiculos());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteOneVehiculo(id));
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          {/* <div onClick={() => handleAdd()} className="btn btn-primary">
          +
        </div> */}
          <div className="text-center m-2">
            <Link
              to="/create-vehiculo"
              className="btn btn-primary btn-xs mt-2 mb-2 "
            >
              <i className="fa-solid fa-plus"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          {vehiculos.map((vehiculo) => (
            <Card className="m-3" style={{ width: "18rem" }} key={vehiculo.id}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>{vehiculo.patente}</Card.Title>
                <Card.Text>{vehiculo.modelo}</Card.Text>
                <Stack direction="horizontal" gap={3}>
                  <Link to="/jkdfw" className="btn btn-primary btn-xs ">
                    Mas...
                  </Link>
                  <Link
                    to={`/edit-vehiculo/${vehiculo.id}`}
                    className="btn btn-success btn-xs "
                  >
                    Edit
                  </Link>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(vehiculo.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </Card.Body>
            </Card>
          ))}
        </div>
        {/* <table className="table">
          <thead>
            <tr>
              <th>Patente</th>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((vehiculo) => (
              <tr key={vehiculo.id}>
                <td>{vehiculo.patente}</td>
                <td>{vehiculo.modelo}</td>
                <td>
                  <div className="mb-3">
                    <div
                      onClick={() => handleDelete(vehiculo.id)}
                      className="btn btn-danger"
                    >
                      D
                    </div>
                  </div>
                </td>
                <td>
                  <div className="mb-3">
                    <div
                      onClick={() => handleUpdate(vehiculo.id)}
                      className="btn btn-dark"
                    >
                      U
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
  );
}
