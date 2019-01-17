import React from 'react';
import { GallacticLogo } from 'res/Icons';
import './style.scss';

const Footer = () => (
  <footer>
    <section style={{ paddingLeft: 20 }}>
      <div>
        <img src={GallacticLogo} className="gallactic-logo" alt="logo" />

        <div className="gallactic-title">
          © GALLACTIC @ 2018 Finterra Pte Ltd, 58. Republic Plaza, 9, Raffles
          Place, Singapore 048619
        </div>
        <div>
          <a className="gallactic-title link">support@gallactic.io</a> |{' '}
          <a className="gallactic-title link">Privacy Policy</a> |{' '}
          <a className="gallactic-title link">Terms of Use</a> |{' '}
          <a className="gallactic-title link">Security Policy</a> |{' '}
          <a className="gallactic-title link">Data Protection Notice</a>
        </div>
      </div>
    </section>
    <section style={{ paddingRight: 20 }}>
      <div>
        Powered by <a href="http://finterra.org/">Finterra</a>
        <div className="gallactic-title">
          This project is licensed under the MIT license.
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
