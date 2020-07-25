import React from 'react';
import '../assets/styles/components/Content.scss';
import { Link } from 'react-router-dom';

const Content = ({ children }) => (
  <main className='content'>
    <section className='menu'>
      <h3>Categorias</h3>
      <ul>
        <li>
          <a href='/'>Kobelco</a>
        </li>
        <li>
          <a href='/'>Caterpillar</a>
        </li>
        <li>
          <a href='/'>Volvo </a>
        </li>
        <li>
          <Link to='/cart'>CART</Link>
        </li>
      </ul>
    </section>
    <section className='products' id='lista-productos'>
      <div className='products__items' id='products__items'>
        {/* <!-- IMPRESION PRODUCTOS --> */}
        {children}
      </div>
    </section>
  </main>
);

export default Content;
