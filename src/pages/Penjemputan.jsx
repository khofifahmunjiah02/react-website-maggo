import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import gimiheader from '../assets/img/jemput/gimi_jemput.png';
import { useNavigate } from "react-router-dom";
import ColorBlock from '../components/MapComponen';
// import './style.css'; // Import the CSS file

const Penjemputan = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/penjemputan2");
  };

  return (
    <div>
      {/* Header */}
      <Container className="top_produkpembelian d-flex align-items-center">
        <div className="produk_pembelian">
          <header className="produk_pembelian_header w-100 d-flex align-items-center">
            <Container className="produk_pembelian_container">
              <Row className="align-items-center">
                <Col xs={8}>
                  <div>
                    <div className="benefit_title">
                      <div className="line_1"></div>
                      <p className="header_subtitle">Form Penjemputan Sampah</p>
                    </div>
                  </div>
                  <h1 className="header_title">Yuk Lengkapi Data Berikut!</h1>
                </Col>
                <Col>
                  <img src={gimiheader} alt="Illustration" className="header_image" />
                </Col>
              </Row>
            </Container>
          </header>
        </div>
      </Container> 

      {/* Form Section */}
      <section className="pembelian_data">
  <Container fluid>
    <section className="pembelian_data_diri_fullwidth">
      <Form>
        <div className="benefit_title mb-4">
          <div className="blue-line"></div> {/* Add this line */}
          <p className="form_section_title">Form 1 - Data Diri</p>
        </div>

              {/* Nama Anda */}
              <Form.Group controlId="formName" className="mb-3 position-relative form_group">
                <Form.Label>Nama Anda</Form.Label>
                <Form.Control type="text" placeholder="Contoh: John Doe" className="form_input" />
              </Form.Group>

              {/* Jenis Kelamin */}
              <Form.Group controlId="formGender" className="mb-3 form_group">
                <Form.Label>Jenis Kelamin</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="radio"
                    id="pria"
                    label="Pria"
                    name="gender"
                    className="me-3"
                  />
                  <Form.Check
                    type="radio"
                    id="wanita"
                    label="Wanita"
                    name="gender"
                  />
                </div>
              </Form.Group>

              {/* Nomor Telepon */}
              <Form.Group controlId="formPhone" className="mb-3 position-relative form_group">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control type="tel" placeholder="Contoh: (+62) 812-1234-5678" className="form_input" />
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="formEmail" className="mb-3 position-relative form_group">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndoe@gmail.com" className="form_input" />
              </Form.Group>

              {/* Alamat Lengkap */}
              <Form.Group controlId="formAddress" className="mb-3 position-relative form_group">
                <Form.Label>Alamat Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Contoh: Jalan Betutu No. 12" className="form_input" />
              </Form.Group>

              {/* Titik Koordinat */}
              <Form.Group controlId="formCoordinates" className="mb-4 form_group">
                <Form.Label>Titik Koordinat</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="-- Pilih Melalui Maps --" className="form_textarea" />
              </Form.Group>

              <Row>
                <ColorBlock/>
              
              </Row>


              {/* Action Buttons */}
              <Row>
  <Col className="d-flex justify-content-start">
    <Button variant="light" href="/jasa" className="form_button button-kembali">Kembali</Button>
    <Button variant="primary" type="button" onClick={handleNavigation} className="form_button button-selanjutnya">Selanjutnya</Button>
  </Col>
</Row>

            </Form>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default Penjemputan;
