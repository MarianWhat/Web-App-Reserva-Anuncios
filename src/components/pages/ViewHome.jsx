import React from 'react';
import Header from '../pieces/Header.jsx';
// import Planes from '../pieces/Planes.jsx';
import ListPlans from '../pieces/Planes.jsx';
// import ListPrecie from '../pieces/Precios.jsx';

const ViewHome = () => {
  return (
    <>
  	  <Header/>
      <ListPlans/>
      {/* <ListPrecie/> */}
    </>
  );
};

export default ViewHome;
