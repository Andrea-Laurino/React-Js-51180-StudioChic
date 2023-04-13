
import  'bootstrap/dist/css/bootstrap.min.css' ;
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './footer.css'

export default function footer(){
return(
  <footer className="footer-bg">
      <div className="container-fluid">
          <div className=" row p-3 ">
  
              <div className="col-xs-12 col-m-6 col-lg-3">
              <img className="footer-img" src="src/assets/logoFOOTERStudioChic.png" alt="StudioChic"/>
                  <h5 className="text-lg mt-0 mb-2 text-center mt-3">
                     Redes Sociales
                  </h5>
                  <div className="mt-6 lg:mb-0 mb-6">
                      <div className="flex text-center mt-3">
                          <a href="https://www.facebook.com/" className=" mx-2 link "><FacebookOutlinedIcon type="button"/></a>
                          <a href="https://www.instagram.com/" className="mx-2 link "><InstagramIcon  type="button"/></a>
                          <a href="https://web.whatsapp.com/" className="mx-2 link "><WhatsAppIcon  type="button"/></a>
                      </div>
                  </div>
              </div>
               <div className="col-xs-12 col-m-6 col-lg-3">
                  <h5 className="text-lg mt-4 mb-2 text-center">
                     Contactanos
                  </h5>
                  <ul className="contact-info p-0 ml-0 mt-0 text-left list-unstyled">
                      <li className="contact-item list-unstyled"><a href="https://web.whatsapp.com/" className="list-unstyled link">54 9 11 8765-4321</a></li>
                      <li className="contact-item list-unstyled link"> 1234-5678</li>
                      <li className="contact-item list-unstyled"><a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1442551895%3A1681332054115927&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=AQMjQ7QAMJvjn47kIwIXrdp4kcvtzESiqiP36UiEHSqrTM4XM2I4ypiDKhWT1o_gvgc4BmjvGwzI&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"  className="list-unstyled link">info@studiochic.com</a></li>
                      <li className="contact-item list-unstyled"> Showroom Ubicado Scalabrini Ortiz 1234 Palermo - CABA</li>
                </ul>
              </div>
             
              <div className="col-xs-12 col-m-6 col-lg-3">
                      <div className="w-full lg:w-4/12 px-4">
                          <h6 className="block uppercase text-sm font-semibold mt-4">Otros Recursos</h6>
                          <ul className="list-unstyled">
                              <li>
                                  <a className="link" >Terminos &amp; Condiciones</a>
                              </li>
                              <li>
                                  <a className="link" >Politicas de Privacidad</a>
                              </li>
                              <li>
                                  <a className="link" >Contactanos</a>
                              </li>
                          </ul>
                      </div>
              </div>
          </div>
          <hr className="my-6 border-blueGray-300"/>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © <span id="anio-actual">{`${(new Date).getFullYear()}`}</span><a href="#" target="_blank"/> STUDIO CHIC by
                  <a href="#" className='link'> Andrea Laurino</a>.
                  </div>
              </div>
          </div>
      </div>
  </footer>
)
}