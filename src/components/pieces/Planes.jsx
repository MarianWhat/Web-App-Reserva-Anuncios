import React, {useState, useEffect } from 'react';
import firebase from 'firebase';

const ListPlans = () => {

	const [arrPlan, setArrPlan] = useState([]);
	const [arrProd, setArrProd] = useState([]);
	const [arrPrecie, setArrPrecie]=useState([]);


		const userCurrent = () => firebase.auth().currentUser;
		const user = userCurrent();
		
		  if (user) {
			console.log(user.email);
			firebase.firestore().collection('user').where('id', '==', userCurrent().uid).get()
			  .then((result) => {
				let arr=[];
				result.forEach((doc) => {
				 arr = doc.data().products;
				});
				setArrProd(arr);
			  });
			}


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
				// precio: arrPrecie.precio,
      };
			arr.push(obj);
		});
		console.log(arr);
    setArrPlan(arr);
	});

	const Precios = () => firebase.firestore().collection('list-price').get()
.then((resp)=>{
    const arr =[];
    resp.forEach((elem)=>{
        const obj={
            precio:elem.data().ad_price,
            producto:elem.data().name_product,
        };
        arr.push(obj);
    });
    setArrPrecie(arr);
});

  useEffect(() => {
	Planes();
	}, []);

	Precios();

	return(
		<div>
			<div><p>Bienvenido {userCurrent()}</p></div>
			<div>
				<p>Elige el producto</p>
				<select >
					{arrProd.map((producto) => <option key={producto.id}>{producto}</option>)}
				</select>
			</div>
			<div>
				<p>Elige el plan</p>
				{arrPlan.map((plan) => <div key={plan.id}>
				<button >
				{plan.title} {plan.id} {plan.horario} {plan.recargo}
				{arrPrecie.map((precio)=><div>
					<p>{precio.precio}</p>
				</div>)}
				</button>
				</div>
				)}
			</div>
		</div>  
	);
};

export default ListPlans;
