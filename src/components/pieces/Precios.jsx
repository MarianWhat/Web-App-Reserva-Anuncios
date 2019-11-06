// import React, {useState,useEffect} from 'react';
// import firebase from 'firebase';

// const ListPrecie = () => {
// const [arrPrecie, setArrPrecie]=useState([]);

// const Precios = () => firebase.firestore().collection('list-price').get()
// .then((resp)=>{
//     const arr =[];
//     resp.forEach((elem)=>{
//         const obj={
//             precio:elem.data().ad_price,
//             producto:elem.data().name_product,
//         };
//         arr.push(obj);
//     });
//     console.log(arr);
//     setArrPrecie(arr);
// });

// return(
//     <>
//         {arrPrecie.map((precie) => {
//            <button>{precie.precio}</button>
//         }
//         )}
//     </>
// );

// };

// export default ListPrecie;