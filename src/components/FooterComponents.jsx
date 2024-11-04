import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Logo1Image from '../assets/img/logo1.png';
import CallImage from '../assets/img/call.png';
import InstagramImage from '../assets/img/instagram.png';
import EmailImage from '../assets/img/email.png';

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className='d-flex justify-content-between align-items-start'>
          <Col md={3} className='footer-section'>
            <img src={Logo1Image} alt="Logo" className="footer-logo" />
            <p className="footer-address">Jl. Pattimura, Sumatera Selatan, Palembang</p>
          <div md={3} className="footer-social-icons">
            <Link to="/call"><img src={CallImage} alt="Call" /></Link>
            <Link to="/instagram"><img src={InstagramImage} alt="Instagram" /></Link>
            <Link to="/email"><img src={EmailImage} alt="Email" /></Link>
          </div>
          </Col>
          <Col md={3}>
            <h3 className="footer-heading">Product</h3>
            <ul className="footer-links">
              <li><Link to="/larva-bsf-kering">Larva BSF Kering</Link></li>
              <li><Link to="/protein-bsf-larva">Protein BSF Larva</Link></li>
              <li><Link to="/bsf-larva-hidup">BSF Larva Hidup</Link></li>
              <li><Link to="/pupuk-bsf">Pupuk BSF</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/jual-sampah">Jual Sampah</Link></li>
              <li><Link to="/beli-produk">Beli Produk</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h3 className="footer-heading">Newsletter</h3>
            <p>Kirimkan pesan dan dukungan</p>
            <input type="email" placeholder="Masukkan Email..." className="footer-input" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
