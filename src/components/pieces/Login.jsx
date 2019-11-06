import React, {useState} from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import logoBlanco from '../../logo.svg';
import Header from '../pieces/Header.jsx';

const Login =({ history })=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  // const [arrProd, setArrProd] = useState([]);


  const FEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const FPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };


	
	return(
		<div className="cont-formulario">   
			<form className="form-login" onSubmit={(e) => {
         e.preventDefault();
         if (!email || !password) {
           console.log('Debes colocar email y password');
           setErr('Debes colocar email y password');
           return false;
         }
         firebase.auth().signInWithEmailAndPassword(email,password).then((res) => {
           console.log(res);
           console.log('autentificado');
           history.replace('/Home');
         }).catch((error) => {
           console.error(error.message);
           setErr(error.message);
         });
       }}>
         <div className="cont-logo">
         <img src={logoBlanco} />
         <p>América Comercial</p>
         </div>
				<div>
          <input type="text" name="email" value={email} onChange={FEmail} placeholder="email"/>
				</div>
				<div>
					<input type="password" name="password" value={password} onChange={FPassword} placeholder="pasword"/>
				</div>
				<button className="btn" type="submit" value="btn">Login</button>
                {err && <p data-testid="mensajeError" >{err}</p>}
			</form>
		</div>
	);
};
Login.propTypes = {
    history: PropTypes.object.isRequired,
  };
export default Login;