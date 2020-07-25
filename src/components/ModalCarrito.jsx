import React from 'react';
import '../assets/styles/components/Modales.scss';

const ModalCarrito = () => (
  <div className='overlay overlay-carrito' id='overlay-carrito'>
    <div className='modal modal-carrito' id='modal-carrito'>
      <a href='#' className='cerrar fas fa-times-circle' id='cerrar'></a>
      <h1>El carrito esta vacio</h1>
      <p>Agrega algun producto para continuar</p>
      <button className='btn' id='btn'>
        Aceptar
      </button>
    </div>
  </div>
);

export default ModalCarrito;
