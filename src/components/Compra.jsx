import React from 'react';
import Cargando from '../assets/img/cargando.gif';

const Compra = ({ children }) => {
  return (
    <>
      {children}
      <main>
        <div className='container'>
          <div className='compra'>
            <h2 className='compra__titulo'>Realizar Compra</h2>
            <form id='procesar-pago' className='form' action='#' method='post'>
              <div className='form__cliente'>
                <label htmlFor='cliente'>Cliente :</label>
                <input
                  type='text'
                  id='cliente'
                  placeholder='Ingresa nombre cliente'
                  name='destinatario'
                />
              </div>
              <div className='form__email'>
                <label htmlFor='email'>Correo :</label>
                <input
                  type='text'
                  id='correo'
                  placeholder='Ingresa tu correo'
                  name='cc_to'
                />
              </div>

              <div id='carrito' className='compra__tabla'>
                <table className='compra__tabla--tabla' id='lista-compra'>
                  <thead>
                    <tr>
                      <th scope='col'>Imagen</th>
                      <th scope='col'>Nombre</th>
                      <th scope='col'>Precio</th>
                      <th scope='col'>Cantidad</th>
                      <th scope='col'>Sub Total</th>
                      {/* <!-- <th scope="col">Eliminar</th> --> */}
                    </tr>
                  </thead>
                  <tbody />
                  {/* <!-- <tr>
                  <th colspan="4" scope="col" >SUB TOTAL :</th>
                  <th scope="col">
                    <p id="subtotal"></p>
                  </th>
                </tr> --> */}
                  {/* <!-- <tr>
                  <th colspan="4" scope="col">IVA :</th>
                  <th scope="col">
                    <p id="igv"></p>
                  </th>
                </tr> --> */}
                  <tr>
                    <th colSpan='4' scope='col'>
                      TOTAL :
                    </th>
                    <th scope='col'>
                      {/* <!-- <input id="total" name="monto" class="font-weight-bold border-0" readonly style="background-color: white;"></input> --> */}
                      <p id='total' />
                    </th>
                    {/* <!-- <th scope="col"></th> --> */}
                  </tr>
                </table>
              </div>

              <div id='loaders'>
                <img id='cargando' src={Cargando} width='220' alt='img' />
              </div>

              <div className='form__btn'>
                <div className='form__btn--volver'>
                  <a href='index.html'>Seguir comprando</a>
                </div>
                <div className='form__btn--comprar'>
                  <button href='#' id='procesar-compra' type='button'>
                    Realizar compra
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      {children}
    </>
  );
};

export default Compra;
