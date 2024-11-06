import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import panah from '../assets/img/footer/arrow.png'
import headimg from '../assets/img/produk/produk_header.png'
import ProductBox from '../components/ProductComponents';
import productsData from '../data/produkData';

const Produk = () => {
  return (
    <Container fluid="md" className="top_produk d-flex justify-content-center align-items-center mb-4 ">
      <div className="produk">
        <header className="produk_header w-100  d-flex align-items-center">
          <Container className='produk_container'>
            <Row className='justify-content-center'>
              <img src={headimg} alt="img_header"  />
            </Row>
            <Row>
              <div className="produk_header_text">
                <h1 style={{fontSize:'48px', fontWeight:'bold', marginTop:'44px'}}>
                  Produk Kami
                </h1>
                <p style={{fontSize:'18px', color:'#828282', width:'772px', margin:'0'}}>
                Kami menawarkan berbagai produk maggot langsung dari petani. <br />
                Produk-produk ini diproduksi secara berkelanjutan melalui budidaya maggot. <br />
                Dukung petani lokal sambil mendapatkan solusi ramah lingkungan
                </p>
              </div>
            </Row>
            <Row className="justify-content-end">
              <div className="input-group" style={{ maxWidth: '405px', height: '51px', marginTop:'40px' }}>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Cari Produk" 
                  aria-label="Cari Produk" 
                  aria-describedby="button-addon2" 
                  style={{backgroundColor: '#f4f4f4', border:'none'}}
                />
                <button 
                  className="btn" 
                  type="button" 
                  id="button-addon2"
                  style={{ backgroundColor: '#f4f4f4', borderRadius: '0 10px 10px 0' }}
                >
                  <img src={panah} alt="Send Icon" style={{ width: '20px', height: '20px' }} />
                </button>
              </div>
            </Row>
            <Container className='produk_list'>
              <Row className=''>
                {productsData.map((product, index) => (
                  <ProductBox
                    key={index}
                    image={product.image}
                    name={product.name}
                    stok={product.stok}
                    desc_title={product.desc_title}
                    description={product.description}
                    price={product.price}
                  />
                ))}
              </Row>
            </Container>
            <Row style={{marginTop:'35px'}}>
              <Col className='product_total d-flex flex-row justify-content-start align-content-center'>
                <div className='product_total d-flex flex-row align-items-center'>
                  <p className='mb-0'>Subtotal Belanja</p>                
                </div>
              </Col>
              <Col>
                <div className="product_total_tombol d-flex flex-row justify-content-end align-items-center">
                  <h1 style={{fontSize:'32px', fontWeight:'bold', marginBottom:'0', paddingRight:'5px'}}>0</h1>
                  <Button variant="secondary" style={{fontWeight:'bold', maxWidth:'312px', width:'100%'}} disabled>
                    Bayar
                  </Button>
                </div>
              </Col>
            </Row>

          </Container>
          
        </header>
      </div>
    </Container>
  )
}

export default Produk