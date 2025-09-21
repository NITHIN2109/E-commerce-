import './App.css'
import HomePage from './pages/Homepage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/Loginpage'
import RegisterPage from './pages/RegisterPage'
import ProductListPage from './pages/ProductListPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProtectedRoutesComponents from './components/ProtectedRoutesComponents'
import UserOrderDetailsPage from './pages/User/UserOrderDetailsPage'
import UserOrdersPage from './pages/User/UserOrdersPage'
import UserProfilePage from './pages/User/UserProfilePage'
import UserCartDetailsPage from './pages/User/UserCartDetailsPage'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes >

          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/product-list' element={<ProductListPage />} />
          <Route path='/product-details' element={<ProductDetailsPage />} />
          <Route path='/*' element={<h1> 404 page doesot exists</h1>} />


          <Route element={<ProtectedRoutesComponents />} >
            <Route path='/user' element={<UserProfilePage />} />
            <Route path='/user/my-orders' element={<UserOrdersPage />} />
            <Route path='/user/order-details' element={<UserOrderDetailsPage />} />
            <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
