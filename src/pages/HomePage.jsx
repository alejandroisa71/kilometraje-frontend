import { VehiculosList } from "../components/VehiculosList";

export function HomePage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{ textAlign: "center" }}>Vehiculos</h2>
          </div>
          <VehiculosList />
        </div>
      </div>
    </div>
  );
}
