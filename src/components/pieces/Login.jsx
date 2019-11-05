import React, {useState} from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const Login =({ history })=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');


  const FEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const FPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  
	
	return(
		<div>
			<form onSubmit={(e) => {
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
				<div>
					<input type="text" name="email" value={email} onChange={FEmail} placeholder="email"/>
				</div>
				<br />
				<div>
					<input type="text" name="password" value={password} onChange={FPassword} placeholder="pasword"/>
				</div>
				<button type="submit" value="btn">Login</button>
                {err && <p data-testid="mensajeError" >{err}</p>}
			</form>
		</div>
	);
};
Login.propTypes = {
    history: PropTypes.object.isRequired,
  };
export default Login;