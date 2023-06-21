import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import Container from '../components/Container';
import Custominput from '../components/Custominput';
const Resetpassword = () => {
    return (
        <>
            <Meta title={"Reset password"} />
            <BreadCrum title='Reset password' />

            <Container class1="login-wrapper home-wrapper 2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reestablecer contraseña</h3>
                            <form action="" className='d-flex flex-column' style={{ gap: '15px' }}>
                                <Custominput type="password" name='password' placeholder="Contraseña" className="form-control" />
                                <Custominput type="password" name='confpassword' placeholder='Confirme su contraseña' className="form-control" />



                                <div className=''>
                                    <div className="mt-3 d-flex justify-content-center align-items-center" style={{ gap: '10px' }}>
                                        <button className="button border-0">Reestablecer</button>
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

export default Resetpassword