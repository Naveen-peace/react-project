import React from 'react'
import Layout from './Layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './asset/css/app.css'
import store from './redux/Store'
import { Provider } from 'react-redux';
import ProductView from './Pages/ProductView';
import Cart from './Pages/Cart';
import ThankPage from './Pages/ThankPage';
import 'react-toastify/dist/ReactToastify.css';
import ProductCartGroup from './Components/ProductCartGroup'


function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/product/:slug' element={<ProductView />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/thank-you' element={<ThankPage />} />
              <Route path='/product' element={<ProductCartGroup />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App