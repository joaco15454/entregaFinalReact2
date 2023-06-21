import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux'
import Container from '../components/Container';
import Custominput from '../components/Custominput';
import { registerUser } from '../features/products/userSlice';


const signUpSchema = yup.object({
  firstname: yup.string().defined("El nombre es requerido"),
  email: yup.string().email("Email tiene que ser valido").required("El mail es necesario"),
  tel:yup.string().required("Mobile es requerido"),
  password:yup.string().required("La contraseña es requerida")
});





const Signup = () => {

  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues: {
      firstname: '',
      email: '',
      tel:"",
      password:"",
    },
    validationSchema: signUpSchema,
    onSubmit: value => {
      dispatch(registerUser(value))
      console.log("HOLAAA")
    },
  });

  return (
    <>
      <Meta title={"Sign up"} />
      <BreadCrum title='Sign up' />
      <Container class1="login-wrapper home-wrapper 2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Registrate</h3>
                <form action=""  onSubmit={formik.handleSubmit}  className='d-flex flex-column' style={{ gap: '15px' }}>
                  <Custominput type="text" 
                  name="firstname" 
                  placeholder="Ingrese su nombre" 
                  className="form-control" 
                  value={formik.values.firstname} 
                  onBlur={formik.handleBlur("firstname")}  
                  onChange={formik.handleChange("firstname")}/>
                  <div className="error">
                    {
                      formik.touched.firstname && formik.errors.firstname
                    }
                  </div>
                  <Custominput type="email" name='email' placeholder="email" className="form-control" 
                  
                  value={formik.values.email} onBlur={formik.handleBlur("email")}  onChange={formik.handleChange("email")}/>
                  <div className="error">
                    {
                      formik.touched.email && formik.errors.email
                    }
                  </div>
                  
                 <Custominput type="tel" name='tel' placeholder="Ingrese su numero de telefono" className="form-control"
                 value={formik.values.tel} onBlur={formik.handleBlur("tel")}  onChange={formik.handleChange("tel")}/>
                 <div className="error">
                   {
                     formik.touched.tel && formik.errors.tel
                   }
                 </div>
                 <Custominput  
                 type="password" 
                 name='password' 
                 placeholder='Contraseña' 
                 className="mt-1" 
                 value={formik.values.password} 
                 onChange={formik.handleChange("password")}
                 onBlur={formik.handleBlur("password")}  

                 />
                 <div className="error">
                   {
                     formik.touched.password && formik.errors.password
                   }
                 </div>
                  
                  <div className=''>
                    <div className="mt-3 d-flex justify-content-center align-items-center" style={{ gap: '10px' }}>
                      <button type='submit' className='button signup'>Registrate</button>
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

export default Signup