import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import Container from '../components/Container';
import * as yup from 'yup'
import {useFormik} from 'formik'


const contactSchema = yup.object({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().nullable().email("El mail tiene que ser valido").required("Email es requerido"),
  tel: yup.string().default('').nullable().required("Numero de telefono es requerido"),
 
  
});


const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
      email: '',
    },
    validationSchema:contactSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <>
      <Meta title={"Contactacnos"} />
      <BreadCrum title='Contactanos' />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.2554575292083!2d-58.73417648787519!3d-34.54708685439828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd64a78e6151%3A0xfff020898b1954d5!2sInt.%20Juan%20Irigoin%202645%2C%20B1663%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1686149007246!5m2!1ses-419!2sar"
                width="600" height="450" className='border-0 w-100'
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column' style={{ gap: '15px' }}>
                    <div>
                      <input type="text" 
                      className="form-control" 
                      placeholder='Nombre'
                      name='name' 
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur('name')}
                      value={formik.values.name}
                      />
                      <div className="error">
                        {
                          formik.touched.name && formik.errors.name
                        }
                      </div>
                    </div>
                    <div>
                      <input type="email" 
                      className="form-control" 
                      placeholder='Email'
                      
                      name='email' 
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur('email')}
                      value={formik.values.email}
                      />
                      <div className="error">
                        {
                          formik.touched.email && formik.errors.email
                        }
                      </div>
                    </div>
                    <div>
                      <input type="tel" 
                      className="form-control" 
                      placeholder="Numero de telofono"
                      
                      name='tel' 
                      onChange={formik.handleChange("tel")}
                      onBlur={formik.handleBlur('tel')}
                      value={formik.values.tel}
                      />
                      <div className="error">
                        {
                          formik.touched.tel && formik.errors.tel
                        }
                      </div>
                    </div>
                    <div>
                      <textarea cols="30" rows="4" placeholder='Comentarios' className="w-100 form-control" />
                    </div>
                    <div>
                      <button className="button border-0" type='submit'>Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Este en contacto con nosotros</h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-3 d-flex align-items-center' style={{gap:'15px'}}>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Calle falsa123, San miguel, Buenos Aires</address>
                      </li  >
                      <li className='mb-3 d-flex align-items-center' style={{gap:'15px'}}>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel:+54 123456789">+54 123456789</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center' style={{gap:'15px'}}>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto: mailfalso123@gmail.com">mailfalso123@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center' style={{gap:'15px'}}>
                        <AiOutlineInfoCircle className='fs-5' />
                        <p className="mb-0">Lunes-Viernes 12pm-17pm</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact