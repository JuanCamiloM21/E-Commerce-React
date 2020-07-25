import React from 'react';
import '../assets/styles/components/Modales.scss';

const ModalProducto = () => (
  <div className='overlay overlay-producto' id='overlay-producto'>
    <div className='modal modal-producto' id='modal-producto'>
      <a href='#' className='cerrar fas fa-times-circle' id='cerrar'></a>
      <h1>El Producto ya fue agregado</h1>
      <p>Procesa la compra para aumentar la cantidad</p>
      <button className='btn' id='btn'>
        Aceptar
      </button>
    </div>
  </div>
);

export default ModalProducto;
