import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/styles/components/Globales.scss';
import '../assets/styles/components/Modales.scss';
import useGetData from '../hooks/useGetData';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Layout from '../components/Layout';
import ProductsContext from '../utils/ProductsContexts';

const App = () => {
  const API = 'http://localhost:3000/data';

  const getData = useGetData(API);
  const initialState = { getData, cart: [] };

  return (
    <ProductsContext.Provider value={initialState}>
      <Router>
        <div className='App'>
          <Layout>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/cart' component={Cart} />
            </Switch>
          </Layout>
        </div>
      </Router>
    </ProductsContext.Provider>
  );
};

export default App;
