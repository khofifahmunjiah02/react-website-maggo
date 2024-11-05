import React, { useState, useRef, useLayoutEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'
import gimiheader from '../assets/img/produk/gimi_kelengkapan.png'
import panah from '../assets/img/footer/arrow.png'
import ColorBlock from '../components/MapComponen';
import FormField from '../components/ProductFormField';
import PaymentMethods from '../components/ProductPayments';




const ProdukPembelian = () => {
  return (
        <>
        {/* Header */}
        <Container className="top_produkpembelian d-flex  align-items-center ">
          <div className="produk_pembelian">
            <header className="produk_pembelian_header w-100 d-flex align-items-center">
              <Container className='produk_pembelian_container'>
                <Row className='align-items-center'>
                  <Col xs={8}>
                    <div >
                      <div className="benefit_title">
                          <div className="line_1"></div>
                          <p style={{margin:'0', fontSize:'20px'}}>
                            Yuk lakukan pembayaran!
                          </p>
                      </div>
                    </div>
                    <h1 style={{fontWeight:'bold', paddingTop:'8px'}}>
                      Isi Data Kelengkapan Belanja mu
                    </h1>
                  </Col>
                  <Col className=''>
                    <img src={gimiheader} alt="" />
                  </Col>
                </Row>
              </Container>
              
            </header>
          </div>
        </Container>

        <section className='pembelian_data ' style={{backgroundColor:'#f4f4f4', width:'100%'}}>
          <Container className='d-flex  align-items-center '>
            <section className='pembelian_data_diri'>
              <Row className="justify-content-md-between" style={{marginTop:'24px'}}>

                {/* Data Diri */}
                <Col xs lg="7" style={{backgroundColor:'#FFF', padding:'16px 16px', borderRadius:'8px', marginBottom:'40px', maxHeight:'1050px', overflow:'clip'}}>
                  <Row style={{paddingBottom:'16px'}}>
                    <div className="benefit_title">
                        <div className="line_1"></div>
                        Data Diri
                    </div>
                  </Row>
                    <FormField 
                    label="Nama Anda"
                    placeholder="Contoh: John Doe"
                    ariaLabel="nama"
                    />
                    <FormField
                    label="Nomor Telepon"
                    placeholder="Contoh: (+62) 8712 - 1234 - 5678"
                    ariaLabel="no_telp"
                  />
                  <FormField
                    label="E-mail"
                    placeholder="Contoh: johndoe@gmail.com"
                    ariaLabel="email"
                  />
                  <FormField
                    label="Alamat Lengkap"
                    placeholder="Contoh: Jalan Betutu No. 12"
                    ariaLabel="alamat"
                  />
                  <FormField
                    label="Titik Koordinat"
                    placeholder="-- Pilih Melalui Maps --"
                    ariaLabel="koordinat"
                    disabled
                  />
                  <ColorBlock color="#ccc" width="100%" height="175px"/>
                  <Row>
                    <p>
                      Saya setuju untuk menerima notifikasi terkait pengiriman melalui nomor Whatsapp saya.
                    </p>
                    <Form>
                    {['radio'].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Ya, Setuju"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Tidak, Terima Kasih"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </Form>
                  </Row>
                  <Row>
                    <div style={{borderTop:'2px solid #f2f2f2', margin:'0px 16px', width:'100%'}}></div>
                  <Form style={{paddingTop:'16px'}}>
                    {['checkbox'].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          inline
                          label="Dengan mengklik “Lanjut”, kamu menyetujui Syarat dan Ketentuan."
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                      </div>
                    ))}
                  </Form>
                  </Row>

                  
                </Col>
                {/* Gap */}
                <Col md='auto'></Col>

                {/* Pemesanan */}
                <Col xs lg="4.5" style={{marginBottom:'40px'}}>

                  {/* Total Pesanan */}
                  <Row style={{backgroundColor:'#FFF', padding:'16px 16px', borderRadius:'8px', marginBottom:'24px'}}>
                    {/* Title */}
                    <Row style={{paddingBottom:'16px'}}>
                      <div className="benefit_title" style={{padding:'0px'}}>
                          <div className="line_1"></div>
                          Total Pesanan Anda
                      </div>
                    </Row>
                    {/* Daftar Pesanan */}
                    <Row style={{padding:'0px', margin:'0px'}}>
                      <Col style={{padding:'0px'}}>
                        <p style={{fontSize:'20px', fontWeight:'bold'}}>Nama Pesanan</p>
                      </Col>
                      <Col className='text-end' style={{padding:'0px'}}>
                        <p style={{fontSize:'20px' }}>Rp0,-</p>
                      </Col>
                    </Row>
                    <Row style={{padding:'0px', margin:'0px'}}>
                      <div style={{borderTop:'2px solid #f2f2f2', width:'100%'}}></div>
                    </Row>
                    {/* Total Bayar */}
                    <Row className='total_bayar_wrap' style={{paddingLeft:'0px', paddingRight:'0px', paddingTop:'24px', margin:'0px'}}>
                      <Row style={{padding:'0px', margin:'0px'}}>
                        <Col style={{padding:'0px'}}><p style={{fontSize:'18px', color:'#828282'}}>Subtotal:</p></Col>
                        <Col className='text-end p-0' style={{fontSize:'20px' }}>
                        Rp0,-
                        </Col>
                      </Row>
                      <Row style={{padding:'0px', margin:'0px'}}>
                        <Col style={{padding:'0px'}}><p style={{fontSize:'18px', color:'#828282'}}>Biaya Layanan:</p></Col>
                        <Col className='text-end p-0' style={{fontSize:'20px' }}>
                        Rp0,-
                        </Col>
                      </Row>
                      <Row style={{padding:'0px', margin:'0px'}}>
                        <Col style={{padding:'0px'}}><p style={{fontSize:'18px', color:'#828282'}}>Total Bayar:</p></Col>
                        <Col className='text-end p-0' >
                          <h4 style={{fontSize:'24px', fontWeight:'bold' }}>
                            Rp0,-
                          </h4>
                        </Col>
                      </Row>
                    </Row>

                  </Row>

                  {/* Metode Pembayaran */}
                  <PaymentMethods/>
                </Col>
              </Row>
            </section>
          </Container>
        </section>
      </>
  )
}

export default ProdukPembelian
