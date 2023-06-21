import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
const ShippingPolicy = () => {
  return (
    <>
     <Meta title={"Politica de envio"} />
      <BreadCrum title='Politica de envio' />
    </>
   
  )
}

export default ShippingPolicy