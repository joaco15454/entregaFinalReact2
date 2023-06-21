import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Forgotpassword from './pages/Forgotpassword'
import Signup from './pages/Signup'
import Resetpassword from './pages/Resetpassword'
import SingleBlog from './pages/SingleBlog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermAndConditiont from './pages/TermAndConditiont'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { PrivateRoutes } from './routing/PrivateRoutes'
import { OpenRoutes } from './routing/OpenRoutes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}  />
          <Route path="contact" element={<Contact/>}  />
          <Route path="product" element={<Store/>}  />

          <Route  path='product/:id' element={<SingleProduct/>} />
          <Route path="blogs" element={<Blog/>}  />
          <Route path="blogs/:id" element={<SingleBlog/>}  />
          <Route path="cart" element={<PrivateRoutes> <Cart/> </PrivateRoutes>}  />

          <Route path="checkout" element={<PrivateRoutes> <Checkout/> </PrivateRoutes>}  />

          <Route path="compare-product" element={<CompareProduct/>}  />
         
          <Route path="login" element={<OpenRoutes><Login/></OpenRoutes>}  />
          <Route path="forgot-password" element={<Forgotpassword/>}  />

          <Route path="signup" element={<OpenRoutes><Signup/></OpenRoutes>}  />
          <Route path="reset-password" element={<Resetpassword/>}  />

          <Route path="privacy-policy" element={<PrivacyPolicy/>}  />
          <Route path="refund-policy" element={<RefundPolicy/>}  />
          <Route path="shipping-policy" element={<ShippingPolicy/>}  />
          <Route path="term-conditions" element={<TermAndConditiont/>}  />
        </Route>
       </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
