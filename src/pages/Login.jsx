import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Custominput from '../components/Custominput';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/products/userSlice';

const loginSchema = yup.object({
    email: yup.string().email("Email tiene que ser valido").required("El mail es necesario"),
    password:yup.string().required("La contraseña es requerida")
  });
  


const Login = () => {
    const authState = useSelector(state=>state.auth)
    const navigate= useNavigate()
    const dispatch = useDispatch();


    const formik = useFormik({
      initialValues: {
        email: '',
        password:"",
      },
      validationSchema: loginSchema,
      onSubmit: value => {
        dispatch(loginUser(value))
      
            console.log(authState.isSucces)
            
                navigate('/')
          
      },
    });



    return (
        <>
            <Meta title={"Login"} />
            <BreadCrum title='Login' />
            <Container class1="login-wrapper home-wrapper 2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column' style={{ gap: '15px' }}>
                                    <Custominput 
                                    type="email" 
                                    name='email' 
                                    placeholder="email" 
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    value={formik.values.email}
                                    />
                                    <div className="error">
                                        {formik.touched.email && formik.errors.email}
                                    </div>
                                    <Custominput  type="password" name='password' placeholder='Contraseña' className="mt-1" 
                                    
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                    value={formik.values.password}
                                    />
                                    <div className="error">
                                        {formik.touched.password && formik.errors.password}
                                    </div>
                                    
                                    <div className=''>
                                        <Link to='/forgot-password'>Olvide la contraseña</Link>
                                        <div className="mt-3 d-flex justify-content-center align-items-center" style={{ gap: '10px' }}>
                                            <button className="button border-0" type='submit'>Entrar</button>
                                            <Link to='/signup' className='button signup'>Registrate</Link>
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

export default Login