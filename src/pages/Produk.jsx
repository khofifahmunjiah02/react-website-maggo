import { Container, Row, Col, Accordion } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import panah from '../assets/img/footer/arrow.png'
import headimg from '../assets/img/produk/produk_header.png'
import ProductBox from '../components/ProductComponents';
import productsData from '../data/produkData';
import { useNavigate } from "react-router-dom";
import gimifaq from "../assets/img/jasa/gimifaq.png";
import styles from '../css/jasa.module.css';
import FaqComponents from '../components/FaqComponents';
import { useState } from 'react';


const Produk = () => {

  const navigate = useNavigate();
  const handleNavigation = () => {
      navigate("/produk-pembelian"); 
  };

  // State to track the subtotal of all selected products
  const [subtotal, setSubtotal] = useState(0);
  
  // State to track the quantity of each product by productId
  const [quantities, setQuantities] = useState({});

  // Function to update the quantity and subtotal
  const handleQuantityChange = (productId, quantityChange, price) => {
    setQuantities((prevQuantities) => {
      // Get the current quantity for the product or set it to 0
      const currentQuantity = prevQuantities[productId] || 0;
      const newQuantity = currentQuantity + quantityChange;
  
      // Ensure quantity is not negative
      if (newQuantity < 0) return prevQuantities;
  
      // Update subtotal by calculating the difference only for the quantity change
      const priceDifference = quantityChange * price;
      setSubtotal((prevSubtotal) => prevSubtotal + priceDifference);
  
      // Update quantities state with new quantity
      return {
        ...prevQuantities,
        [productId]: newQuantity,
      };
    });
  };
  

  return (
    <>
      <Container fluid="md" className="top_produk d-flex justify-content-center align-items-center mb-4 ">
        <div className="produk d-flex" style={{width:'100%'}}>
          <header className="produk_header w-100  d-flex align-items-center">
            <Container className='produk_container'>
              <Row className='row-1 justify-content-center'>
                <img src={headimg} alt="img_header"  />
              </Row>
              <Row>
                <div className="produk_header_text">
                  <h1 style={{fontSize:'48px', fontWeight:'bold', marginTop:'44px'}}>
                    Produk Kami
                  </h1>
                  <p style={{fontSize:'18px', color:'#828282', margin:'0'}}>
                  Kami menawarkan berbagai produk maggot langsung dari petani. <br />
                  Produk-produk ini diproduksi secara berkelanjutan melalui budidaya maggot. <br />
                  Dukung petani lokal sambil mendapatkan solusi ramah lingkungan
                  </p>
                </div>
              </Row>
            </Container>
          </header>
        </div>
      </Container>

      <section>
        <Container style={{width:'100%'}}>

          <Row className="justify-content-end" style={{width:'100%'}}>
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
        </Container>
      </section>
           
      <section>
        <Container className='produk_list'>
        <Row>
            {productsData.map((product) => (
              <ProductBox
                key={product.id}
                productId={product.id}
                image={product.image}
                name={product.name}
                stok={product.stok}
                desc_title={product.desc_title}
                description={product.description}
                price={parseInt(product.price)}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row style={{ marginTop: '35px', marginBottom: '40px' }}>
            <Col className='product_total d-flex flex-row justify-content-start align-content-center'>
              <div className='product_total d-flex flex-row align-items-center'>
                <p className='mb-0'>Subtotal Belanja</p>                
              </div>
            </Col>
            <Col>
              <div className="product_total_tombol d-flex flex-row justify-content-end align-items-center">
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '0', paddingRight: '5px' }}>
                  Rp {subtotal.toLocaleString('id-ID')}
                </h1>
                <Button 
                  variant="success" 
                  style={{ fontWeight: 'bold', maxWidth: '312px', width: '100%' }} 
                  onClick={handleNavigation}
                >
                  Bayar
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="d-flex align-content-center justify-content-center" style={{paddingTop:'64px'}}>
            <FaqComponents/>
        </Container>

      </section>         
    </>
        
  )
}

export default Produk