import React, { createContext, useReducer } from 'react';
import useGetData from '../hooks/useGetData';
import reducer from './Reducers';
import { setCart, removeCart } from './Actions';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const API = 'http://localhost:3000/data';

  const getData = useGetData(API);

  // const [cart, setCart] = useState([]);

  const [{ cart }, dispatch] = useReducer(reducer, { cart: [] });

  const addCart = (element) => dispatch(setCart(element));

  const deleteCart = (element) => dispatch(removeCart(element));

  // const addCart = (element) => dispatch({ type: 'ADD_CART', payload: element });

  return (
    <ProductsContext.Provider value={{ getData, cart, addCart, deleteCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
