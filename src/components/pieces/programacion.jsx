import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export class CalendarioSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickDia = this.handleClickDia.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleClickDia(e) {
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    this.setState({ dia: (dias[e.target.valueAsDate.getDay()]) });// <-Nos da el dia
  }

  render() {
    return (
			<React.Fragment>
				<input id ="date" type="date" name="" onChange={this.handleClickDia}/>
				<p>Dia seleccionado es: {this.state.dia}</p>
			</React.Fragment>
    );
  }
}
