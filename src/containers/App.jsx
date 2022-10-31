import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../assets/styles/components/Globales.scss';
import '../assets/styles/components/Modales.scss';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Layout from '../components/Layout';
import ProductsProvider from '../utils/ProductsContexts';

const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <div className='App'>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/cart' element={<Cart />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </ProductsProvider>
  );
};

export default App;
