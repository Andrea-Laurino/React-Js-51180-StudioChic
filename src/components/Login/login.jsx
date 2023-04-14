import 'firebase/auth';
import { useState } from 'react';
import './login.css'
import Btn from '../Btn/button'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import auth from '../../../db/auth-config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
 
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [isSingIn, setIsSingIn] = useState(false);

  const handleModeChange = () => {
    setIsSingIn(!isSingIn);
  }

 
  const submitHandler = (e) => {
    e.preventDefault();
    const correo = email
    const contraseña = password
    console.log(correo, contraseña)
    const validar = getAuth();
    createUserWithEmailAndPassword(auth, correo, contraseña)
    .then((usuarioFirebase) =>{
      alert("Bienvenido " + email, usuarioFirebase);
      props.setUsuario(usuarioFirebase);
    })
      .then((userCredential) => {
      const user = userCredential.user;
    })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
    
    });
  }

  return (
    <>
      <div className='resumen'>
        <Form className='container-fluid singIn'
        onSubmit={submitHandler}>
          <h3>{ isSingIn ? "Regístrate" : "Iniciar Sesión"} </h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='email'>Email </Form.Label>
            <Form.Control type="email" className='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='contraseña'>Contraseña</Form.Label>
            <Form.Control className='contraseña' type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Btn type="submit" texto={isSingIn ? "Regístrate" : "Iniciar Sesión"} />
        </Form>
        <div className='handleSingIn'>
        <Button onClick={handleModeChange} className='btnSingIn'>{isSingIn ? "¿Ya Tienes Cuenta? Iniciar Sesión" : "¿No Tienes Cuenta? Regístrate!"}</Button>
        </div>
      </div>
    </>
  )
}

export default Login
