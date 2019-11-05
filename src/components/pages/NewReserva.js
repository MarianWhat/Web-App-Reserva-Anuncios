import React from 'react';
import { CampoProducto } from '../pieces/predictive-input';
import { CalendarioSelect } from '../pieces/calendario';


const ViewNewReserva = () => {
  return (
    <React.Fragment>
    <CampoProducto/>
    <CalendarioSelect />
    </ React.Fragment>
  );
};

export default ViewNewReserva;
