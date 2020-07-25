import React, { useContext } from 'react';
import Content from '../components/Content';
import Product from '../components/Product';
import ModalCarrito from '../components/ModalCarrito';
import ModalProducto from '../components/ModalProducto';

const Home = () => {
  return (
    <div className='Home'>
      <Content>
        <Product />
      </Content>
      <ModalCarrito />
      <ModalProducto />
    </div>
  );
};

export default Home;
