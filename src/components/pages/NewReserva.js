import React from 'react';
import firebase from 'firebase';
import { CampoProducto } from '../pieces/predictive-input';
import { CalendarioSelect } from '../pieces/calendario';
// import { ListProgramacion } from '../pieces/programacion';

const Planes = () => firebase.firestore().collection('plans').get()
  .then((resp) => {
    const arr = [];
    resp.forEach((elem) => {
      const obj = {
        idDocumento: elem.id,
        id: elem.data().id,
        title: elem.data().title,
        recargo: elem.data().surcharge,
        horario: elem.data().schedule,
        programaDia: elem.data().dia,
      };
      arr.push(obj);
    });
    return arr;
  });

// eslint-disable-next-line import/prefer-default-export
export class ViewNewReserva extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDay: 'Lunes',
      isPlan: '01',
      planes: Planes(),
    };
    // this.handleClickProductos = this.handleClickProductos.bind(this);
  }

  render() {
    return (
        <React.Fragment>
        <CampoProducto />
        <CalendarioSelect />
        <Planes dia={this.state.isDay} idPlan={this.state.isPlan}/>
        {/* <ListProgramacion/> */}
        </ React.Fragment>
    );
  }
}
