import React, { useContext } from 'react';
import '../assets/styles/components/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/MERCAREPUESTOS.jpg';
import { ProductsContext } from '../utils/ProductsContexts';

const Header = () => {
  const { cart } = useContext(ProductsContext);
  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div className='header__input'>
        <form action='' className='search' id='form'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' name='name' placeholder='Busca tu producto' />
        </form>
      </div>
      <nav className='navbar'>
        <ul className='navbar__menu'>
          {/*<li><a href="">Inicio</a></li> */}
          <li>
            <Link to=''>Productos</Link>
          </li>
          {/* <li><a to="">Contacto</a></li>*/}
          <li>
            <Link to='/cart' id='mostrar-carrito'>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='cartCount' />
              {cart.length}
            </Link>

            {/* CARRITO  */}

            <div id='carrito' className='carrito'>
              <table id='lista-carrito' className='table'>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody />
              </table>
              <div className='carrito__footer'>
                <Link
                  to='#'
                  id='vaciar-carrito'
                  className='btn btn-primary btn-block'
                >
                  Vaciar Carrito
                </Link>
                <Link
                  to='#'
                  id='procesar-pedido'
                  className='btn btn-danger btn-block'
                >
                  Procesar Compra
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
