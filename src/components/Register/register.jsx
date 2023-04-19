//import 'firebase/auth';
import { useState } from 'react';
import './register.css'
import Btn from '../Btn/button'
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Alert  from '../Alert/alert.jsx';

export default function Register() {
    const { signup } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/home");
      toast.success(`😉 Bienvenido ${user.email} Gracias por Registrarte`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      if (error.code === "auth/internal-error") {
        setError("Correo Invalido");
      } else if (error.code === "auth/weak-password") {
        setError("Contraseña menor a 6 caracteres");
      }
    }
  };
 
  

  return (
    <>
    <div className='resumen'>
        <Form className='container-fluid singIn'
        onSubmit={handleSubmit}>
            {error && <Alert message={error}  />}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='email' >Email </Form.Label>
              <Form.Control className='email' type="email" name="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='contraseña'>Contraseña</Form.Label>
              <Form.Control className='contraseña' type="password" name="password"  placeholder="*************" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <div className='handleSingIn'>
              <Btn type="submit" texto={'Regístrate'} />
            </div>
       </Form>
       <p className="my-4 text-sm flex justify-between px-3">
        Already have an Account?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
        
    </div>
      
    </>
  )
}


