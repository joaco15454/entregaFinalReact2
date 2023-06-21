import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className='mb-0 text-white'>Registrate para recibir novedades!</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group ">
              <input type="text" className="form-control py-1" placeholder="Agrega tu direccion de mail" aria-label="Agrega tu direccion de mail" aria-describedby="basic-addon2"/>
              <span className="input-group-text p-2" id="basic-addon2"> Suscribite </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contactanos</h4>
            <div>
              <address className='text-white fs-5'>Direccion: Cabilido y Juramento, CABA.
                  <br />                 codigo postal: 1572

              </address>
              <a href="tel:+54 123456789" className="mt-4 d-block mb-1 text-white">+54 123456789</a>
              <a href="mailfalso123@gmail.com" className="mt-2 d-block mb-0 text-white">mailfalso123@gmail.com</a>
              <div className="redes_sociales d-flex align-items-center mt-5 " style={{gap:'30px'}}>
                <a href=""  className='text-white'>
                  <BsLinkedin className=' fs-4'/>
                </a>
                <a href=""  className='text-white'>
                <BsInstagram className=' fs-4'/>
                </a>
                <a href=""  className='text-white'>
                <BsGithub className=' fs-4'/>
                </a>
                <a href=""  className='text-white'>
                <BsYoutube className=' fs-4'/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Informacion</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to="/privacy-policy" className='text-white py-2 mb-1'>Politica de privacidad</Link>
              <Link to="/refund-policy" className='text-white py-2 mb-1'>Politica de reembolso</Link>
              <Link to="/shipping-policy" className='text-white py-2 mb-1'>Politica de envios</Link>
              <Link to="/term-conditions" className='text-white py-2 mb-1'>Terminos y condiciones</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Sobre nosotros</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Mas cosas</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Neetboks</Link>
              <Link className='text-white py-2 mb-1'>Auriculares</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Relojes</Link>
            </div>
          </div>

        </div>
      </div>

    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()}; Hecho por Joaco:P </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer