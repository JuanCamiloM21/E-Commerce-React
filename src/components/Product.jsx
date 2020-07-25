import React, { useContext } from 'react';
import ProductsContext from '../utils/ProductsContexts';
import Cargando from '../assets/img/cargando.gif';

const Product = () => {
  const datos = useContext(ProductsContext);
  const { getData } = datos;

  return (
    <>
      {getData !== undefined ? (
        getData.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.imagen} alt='producto' />
            <h2>{item.nombre}</h2>
            <p>
              $<span>{item.precio.toFixed(3)}</span>
            </p>
            <a href='/' className='item_btn agregar-carrito'>
              Comprar
            </a>
          </div>
        ))
      ) : (
        <div className='item' id='lista-productos'>
          <img src={Cargando} width='40' height='40' alt='' />
        </div>
      )}
    </>
  );
};
export default Product;
