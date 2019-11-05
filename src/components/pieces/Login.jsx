import React, {useState} from 'react';
import firebase from 'firebase';

const Login =({ history })=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  console.log('history ', history);

  const FEmail = (e) => {
    setEmail(e.target.value);
  };
  const FPassword = (e) => {
    setPassword(e.target.value);
  };
  
  const btnLogin = () => {
	firebase.auth().signInWithEmailAndPassword(email, password)
	.then((resp)=>{
		
	})
	.catch();
};


	
	return(
		<div>
			<form onSubmit={(e) => {
          e.preventDefault();
          if (!email || !password) {
            setErr('Debes colocar email y password');
            return false;
          }
          firebase.auth().signInWithEmailAndPassword().then((res) => {
            console.log(res);
            history.replace('/Home');
          }).catch((error) => {
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
				<br/>
				<button type="submit" >Login</button>
			</form>
		</div>
	);
};

export default Login;