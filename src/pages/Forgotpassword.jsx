import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Custominput from '../components/Custominput';
const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Olvide la contraseña"} />
      <BreadCrum title='Olvide la contraseña' />
      <Container class1="login-wrapper home-wrapper 2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Olvide la contraseña</h3>
                <p className='text-center mt-2 mb-3'>Te enviaremos un mail para reestablecer la contraseña</p>
                <form action="" className='d-flex flex-column' style={{ gap: '15px' }}>
                  <Custominput type="email" name='email' placeholder="email" className="form-control" />
                 

                  <div className=''>
                    <div className="mt-3 d-flex flex-column justify-content-center align-items-center" style={{ gap: '10px' }}>
                      <button className="button border-0" type='submit'>Enviar</button>
                      <Link to="/login" className='button signup'>Cancelar</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Forgotpassword