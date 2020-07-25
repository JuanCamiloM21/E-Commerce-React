import React from 'react';
import '../assets/styles/components/Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className='footer'>
    <div className='footer__contact'>
      <h4>CONTACTO</h4>
      <ul className='footer_contact--menu'>
        <li>
          <a href=''>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Calle 48C # 66-07 Oficina 205 Edificio Sausalito - Medellin -Colombia
          </a>
        </li>
        <li>
          <a href=''>
            <FontAwesomeIcon icon={faPhone} /> (4)436-09-60 - (+57) 316-329-3151
          </a>
        </li>
        <li>
          <a href=''>
            <FontAwesomeIcon icon={faEnvelope} /> mercarepuestos@yahoo.com
          </a>
        </li>
      </ul>
    </div>

    <div className='footer_tienda'>
      <h4>TIENDA</h4>
      <ul className='footer_tienda--menu'>
        <li>
          <a href=''>Inicio</a>
        </li>
        <li>
          <a href=''>Productos</a>
        </li>
        <li>
          <a href=''>Contacto</a>
        </li>
        <li>
          <a href=''>Carrito</a>
        </li>
      </ul>
    </div>
    <div className='footer__social'>
      <h4>SIGUENOS</h4>
      <ul className='footer__social--menu'>
        <li>
          <a href=''>
            <FontAwesomeIcon icon={faFacebook} />
            Facebook
          </a>
        </li>
        <li>
          <a href=''>
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </a>
        </li>
      </ul>
    </div>
    <a href='https://github.com/JuanCamilo21' target='_blanc' className='footer__by'>
      By Juan Camilo Moreno ⚽
    </a>
  </footer>
);

export default Footer;
