import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
const RefundPolicy = () => {
  return (
    <>
     <Meta title={"Politica de reembolso"} />
      <BreadCrum title='Politica de reembolso' />
    </>
  )
}

export default RefundPolicy