import React, { useContext } from 'react';
import { ProductsContext } from '../utils/ProductsContexts';
import Cargando from '../assets/img/cargando.gif';

const Product = () => {
  const datos = useContext(ProductsContext);
  const { getData } = datos;
  const { addCart } = datos;
  const { deleteCart } = datos;
  const { cart } = datos;

  const handleAdd = (id) => {
    getData.forEach((item) => {
      if (id === item.id) {
        addCart(item);
      }
    });
  };

  const handleRemove = (id) => {
    cart.forEach((item, i) => {
      if (id === item.id) {
        cart.splice(i, 1);
      }
      deleteCart(...cart);
    });
  };

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
            <button
              type='button'
              className='item_btn agregar-carrito'
              onClick={() => handleRemove(item.id)}
            >
              eliminar
            </button>
            <button
              type='button'
              className='item_btn agregar-carrito'
              onClick={() => handleAdd(item.id)}
            >
              Comprar
            </button>
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
