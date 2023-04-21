//import 'firebase/auth';
import { useState } from 'react';
import './login.css'
import Btn from '../Btn/button'
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import  Alert from '../Alert/alert.jsx';

export default function Login() {
   const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, resetPassword } = useAuth();
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async  (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
      toast.success(`👌 Sesion Iniciada! ${user.email}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
    } catch (error) {
      if (error.code === "auth/user-not-found"){
        setError("Usuario no Registrado");
      } else if (error.code === "auth/wrong-password") {
        setError("Contraseña menor a 6 caracteres");
      }
    };
  }
  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
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
            <Form.Control className='email' type="email" name="email" placeholder="Email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='contraseña'>Contraseña</Form.Label>
            <Form.Control className='contraseña' type="password" name="password"  placeholder="*************" onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
         
        
        <div className='handleSingIn'>
          <Btn type="submit" texto={"Iniciar Sesión"} />
          <a className=" mb-3"
            href="#!"
            onClick={handleResetPassword}>
            Olvidaste tu Contraseña?</a>
        </div>
       </Form>
       <div className="my-4 px-3">
       <p className="">
        Don't have an account?
        <Link to="/register" className= "ml-4" >
          Register
        </Link>
      </p>
       </div>
      </div>
      
    </>
  )
}


