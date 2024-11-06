import { Container, Row, Col, Form } from 'react-bootstrap'
import gimiheader from '../assets/img/jemput/gimi_jemput.png'

const Penjemputan = () => {
  return (
    <div>
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
                            Form Penjemputan Sampah
                          </p>
                      </div>
                    </div>
                    <h1 style={{fontWeight:'bold', paddingTop:'8px'}}>
                      Yuk Lengkapi Data Berikut!
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
                <Col>
                s
                </Col>
            </section>
          </Container>
        </section>
        </>
    </div>
  )
}

export default Penjemputan