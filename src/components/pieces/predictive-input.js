import React from 'react';
import firebase from 'firebase';

// eslint-disable-next-line import/prefer-default-export
export class CampoProducto extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
    <form>
    <label>Producto o Marca:</label><br />
    <input className="input-generic" placeholder="Ejem: Coca-Cola" list="list"/>
    <ListProducto data={['Product A', 'Producto B']} />
    </form>
    );
  }
}
const ListProducto = (props) => {
  firebase.firestore().collection('plans').get()
    .then((es) => {
      es.forEach((post) => {
        console.log(post.id, post.data().schedule, post.data());
      });
    });
  // fff();
  // eslint-disable-next-line react/prop-types
  const listProduct = props.data.map((product, i) => <option key={i} value={product}/>);
  return (
    <datalist id="list">{listProduct}</datalist>
  );
};
