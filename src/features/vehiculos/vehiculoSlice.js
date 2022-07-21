import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URI = " http://localhost:9000/api";

export const vehiculoSlice = createSlice({
  name: "vehiculos",
  initialState: {
    list: [],
  },
  reducers: {
    setVehiculoList: (state, action) => {
      state.list = action.payload;
    },
    addVehiculo: (state, action) => {
      state.list.push(action.payload);
    },
    editVehiculo: (state, action) => {
      const { id } = action.payload;
      const foundVehiculo = state.list.find(
        (vehiculo) => vehiculo.id === action.payload
      );
      if (foundVehiculo) {
        console.log(id);
      }
    },
    deleteVehiculo: (state, action) => {
      const vehiculoFound = state.list.find(
        (vehiculo) => vehiculo.id === action.payload
      );
      if (vehiculoFound) {
        state.list.splice(state.list.indexOf(vehiculoFound), 1);
      }
    },
  },
});

export const { setVehiculoList, addVehiculo, deleteVehiculo, editVehiculo } =
  vehiculoSlice.actions;

export default vehiculoSlice.reducer;

export const fetchAllVehiculos = () => async (dispatch) => {
  await axios
    .get(`${URI}`)
    .then((response) => {
      dispatch(setVehiculoList(response.data));
    })
    .catch((error) => console.log(error));
};

export const fetchOneVehiculo = (data) => async (dispatch) => {
  try {
    const response = await axios.get(`${URI}/${data}`);
    dispatch(setVehiculoList(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const addOneVehiculo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(URI, data);
    dispatch(addVehiculo(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const updateOneVehiculo = (data) => async (dispatch) => {
  try {
    await axios.put(`${URI}/${data.id}`, data);
    dispatch(editVehiculo(data));
    // dispatch(fetchAllVehiculos());
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteOneVehiculo = (data) => async (dispatch) => {
  try {
    const response = await axios.delete(`${URI}/${data}`);
    dispatch(deleteVehiculo(response.data));
    dispatch(fetchAllVehiculos());
  } catch (err) {
    throw new Error(err);
  }
};
