import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/cart' component={Cart} />
            </Switch>
          </Layout>
        </div>
      </Router>
    </ProductsProvider>
  );
};

export default App;
