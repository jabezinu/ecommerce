import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home.jsx';
import {Collection} from './pages/Collection.jsx';
import {Contact} from './pages/Contact.jsx';
import {About} from './pages/About.jsx';
import {Product} from './pages/Products.jsx'
import {Cart} from './pages/Cart.jsx'
import {Login} from './pages/Login.jsx';
import {PlaceOrder} from './pages/PlaceOrder.jsx';
import {Order} from './pages/Order.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/order' element={<Order />} />
      </Routes>
      
    </div>
  )
}

export default App
