import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterJJ() {
  return (
      <footer className='footer text-white py-4 bg-info'>
        <div className="logos">
          <a href="https://cifpsancristobal.org">
            <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
          </a>
          <a href="https://www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/">
            <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" />
          </a>
          <a href="https://www.sabiosguiasinterpretes.com">
            <img src="/img/LogoSabiosGuias.png" alt="Sabios Guías Intérpretes" />
          </a>
        </div>
      </footer>
  );
}