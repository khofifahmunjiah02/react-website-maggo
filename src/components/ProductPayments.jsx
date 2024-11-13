import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Collapse, Tab, Nav } from 'react-bootstrap';
import qris from '../assets/img/produk/qris.png'
import sp from '../assets/img/produk/sp.png'
import ovo from '../assets/img/produk/ovo.png'
import gopay from '../assets/img/produk/gopay.png'
import dana from '../assets/img/produk/dana.png'
import bni from '../assets/img/produk/bni.png'
import mandiri from '../assets/img/produk/mandiri.png'
import bca from '../assets/img/produk/bca.png'

function PaymentMethods() {
  const [activeTab, setActiveTab] = useState('emoney');
  const [openOption, setOpenOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');

  // Calculate deadline (24 hours from now)
  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = deadline - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft('Expired');
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${hours}j ${minutes}m ${seconds}d`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const paymentOptions = {
    emoney: [
      { id: 1, image:qris, name: 'QRIS', details: 'QRIS details here' },
      { id: 2, image:gopay, name: 'Gopay', details: 'Gopay details here' },
      { id: 3, image:dana, name: 'DANA', details: 'DANA details here' },
      { id: 4, image:sp, name: 'ShopeePay', details: 'ShopeePay details here' },
      { id: 5, image:ovo, name: 'OVO', details: 'OVO details here' },
    ],
    va: [
      { id: 6, image:bca, name: 'BCA', details: 'BCA VA details here' },
      { id: 7, image:mandiri, name: 'Mandiri', details: 'Mandiri VA details here' },
      { id: 8, image:bni, name: 'BNI', details: 'BNI VA details here' },
      // Add more banks as needed
    ],
  };

  return (
    <Row style={{ backgroundColor: '#FFF', padding: '16px', borderRadius: '8px', marginBottom: '24px' }}>
      {/* Section Title */}
      <Row style={{ paddingBottom: '16px' }}>
        <div className="benefit_title" style={{ padding: '0px' }}>
          <div className="line_1"></div>
          Metode Pembayaran
        </div>
      </Row>
      
      {/* Countdown Timer */}
      <Row className="mb-3">
        <Col xs={12} className="text-center">
          <div
            style={{
              backgroundColor: '#FF8800',
              color: '#FFF',
              padding: '8px 16px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '12px'
            }}
          >
            Mohon selesaikan pemesanan sebelum:  {timeLeft}
          </div>
        </Col>
      </Row>

      {/* Tabs for Payment Methods */}
      <Row style={{ paddingBottom: '16px' }}>
        <Nav variant="tabs" defaultActiveKey="emoney" className='payment-nav justify-content-around'>
          <Nav.Item >
            <Nav.Link
              eventKey="emoney"
              onClick={() => setActiveTab('emoney')}
              style={{ 
                marginLeft: '20px',
                fontWeight: activeTab === 'emoney' ? 'bold' : 'normal', 
                color:  activeTab === 'emoney' ? '#0C70FF' : '#777',
                borderBottom: activeTab == 'emoney' ? '4px solid #0C70FF' :  'none' }}
            >
              Uang Elektronik
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="va"
              onClick={() => setActiveTab('va')}
              style={{ 
                fontWeight: activeTab === 'va' ? 'bold' : 'normal', 
                color: activeTab === 'va' ? '#0C70FF' : '#777',
                borderBottom: activeTab == 'va' ? '4px solid #0C70FF' :  'none' }}
            >
              Virtual Account
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>

      {/* Payment Options */}
      <Row>
        {paymentOptions[activeTab].map((option) => (
          <Col key={option.id} xs={12} className="mb-2">
            <Button
              variant="light"
              onClick={() => setOpenOption(openOption === option.id ? null : option.id)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                border: '1px solid #ddd',
                padding: '12px',
                backgroundColor: '#fff'
              }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={option.image}
                    alt='img_here'
                    style={{ width: '100%', height: '30px', marginRight: '8px' }}
                />
                <span>{option.name}</span>
                </div>
                <span>&gt;</span>
            </Button>
            <Collapse in={openOption === option.id}>
              <div style={{ padding: '10px',  backgroundColor: '#fff' }}>
                {option.details}
              </div>
            </Collapse>
          </Col>
        ))}
        <Row style={{paddingTop:'16px '}}>
            <Col xs={4} className='align-items-center' style={{padding:'0px 20px 0px 16px'}}>
                <Button variant="light" style={{backgroundColor:'#fff', border:'none'}}>
                    <p className='m-0 ' style={{padding:'8px 8px', color:'#0C70FF'}}>Kembali</p>
                </Button>
            </Col>
            <Col xs={8} className='align-items-center'>
                <Button variant="primary">
                    <p className='m-0 ' style={{padding:'8px 8px', fontWeight:'bold'}}>Konfirmasi Pembayaran</p>
                </Button>
            </Col>
        </Row>
      </Row>

      
    </Row>
  );
}

export default PaymentMethods;
