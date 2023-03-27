import './button.css'


const Button = ({texto}) => {
  return (
    <div className="btn-login">
        <button className="login">{texto}</button>
    </div>

  )
}

export default Button
