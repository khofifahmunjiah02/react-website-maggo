import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import gimiheader from '../assets/img/jemput/gimi_jemput.png';
import { useNavigate } from "react-router-dom";
 
const Penjemputan2 = () => {
  const navigate = useNavigate();

  const handleNavigateToKonfirmasi = () => {
    navigate("/Konfirpembayaran"); // Pastikan path ini benar
  };

  const handleNavigateToPenjemputan = () => {
    navigate("/penjemputan");
  };

  return (
    <div>
      <Container className="top_produkpembelian d-flex align-items-center">
        <div className="produk_pembelian">
          <header className="produk_pembelian_header w-100 d-flex align-items-center">
            <Container className="produk_pembelian_container">
              <Row className="align-items-center">
                <Col xs={8}>
                  <div>
                    <div className="benefit_title mb-4">
                      <div className="line_1"></div>
                      <p className="header_subtitle">Form Penjemputan Sampah</p>
                    </div>
                  </div>
                  <h1 className="header_title">Lengkapi Data Berikut!</h1>
                </Col>
                <Col>
                  <img src={gimiheader} alt="Illustration" className="header_image" />
                </Col>
              </Row>
            </Container>
          </header>
        </div>
      </Container>

      <section className="pembelian_data">
        <Container fluid>
          <section className="pembelian_data_diri_fullwidth">
            <Form>
              <div className="benefit_title mb-4">
                <div className="blue-line"></div>
                <p className="form_section_title">Form 2 - Penjemputan Sampah</p>
              </div>

              {/* Jenis Sampah Organik */}
              <Form.Group controlId="formJenisSampah" className="mb-3 position-relative form_group">
                <Form.Label>Jenis Sampah Organik</Form.Label>
                <Form.Control type="text" placeholder="Contoh: Sayur Mayur" className="form_input" />
              </Form.Group>

              {/* Perkiraan Volume Sampah */}
              <Form.Group controlId="formVolumeSampah" className="mb-3 position-relative form_group">
                <Form.Label>Perkiraan Volume Sampah</Form.Label>
                <Form.Control type="text" placeholder="Contoh: 3 Kilogram" className="form_input" />
              </Form.Group>

              {/* Tanggal Penjemputan */}
              <Form.Group controlId="formTanggalPenjemputan" className="mb-3 position-relative form_group">
                <Form.Label>Tanggal Penjemputan</Form.Label>
                <Form.Control type="text" placeholder="DD/MM/YY" className="form_input" />
              </Form.Group>

              {/* Jam Penjemputan */}
              <Form.Group controlId="formJamPenjemputan" className="mb-3 form_group">
                <Form.Label>Jam Penjemputan</Form.Label>
                <div className="d-flex flex-column">
                  <Form.Check type="radio" label="08.00 - 10.00 WIB" name="jamPenjemputan" className="mb-2" />
                  <Form.Check type="radio" label="11.00 - 13.00 WIB" name="jamPenjemputan" className="mb-2" />
                  <Form.Check type="radio" label="14.00 - 17.00 WIB" name="jamPenjemputan" className="mb-2" />
                </div>
              </Form.Group>

              {/* Metode Insentif Penjualan Sampah */}
              <Form.Group controlId="formMetodeInsentif" className="mb-3 position-relative form_group">
                <Form.Label>Metode Insentif Penjualan Sampah</Form.Label>
                <Form.Control as="select" className="form_input">
                  <option>--Pilih Metode Insentif--</option>
                  <option>Transfer Bank</option>
                  <option>Dompet Digital</option>
                </Form.Control>
              </Form.Group>

              {/* Nomor Rekening / Virtual Account */}
              <Form.Group controlId="formNoRekening" className="mb-3 position-relative form_group">
                <Form.Label>Nomor Rekening / Virtual Account</Form.Label>
                <Form.Control type="text" placeholder="Contoh: John Doe / BCA 1231XXXX" className="form_input" />
              </Form.Group>

              {/* Notifikasi via WhatsApp */}
              <Form.Group controlId="formNotifikasi" className="mb-3 form_group">
                <Form.Label>Saya setuju untuk menerima notifikasi terkait pengiriman melalui nomor Whatsapp saya</Form.Label>
                <div className="d-flex">
                  <Form.Check type="radio" label="Ya, Setuju" name="notifikasi" className="me-3" />
                  <Form.Check type="radio" label="Tidak, Terima kasih" name="notifikasi" />
                </div>
              </Form.Group>

              {/* Terms and Conditions */}
              <Form.Group controlId="formTerms" className="mb-4 form_group">
                <Form.Check type="checkbox" label="Dengan mengklik 'Lanjut', kamu menyetujui Syarat dan Ketentuan." />
              </Form.Group>

              {/* Action Buttons */}
              <Row>
                <Col className="d-flex justify-content-start">
                <Button variant="light" onClick={handleNavigateToPenjemputan} className="form_button button-kembali">Kembali</Button>
                <Button variant="primary" type="button" onClick={handleNavigateToKonfirmasi} className="form_button button-ajukan" style={{color:'#fff'}}>Ajukan Penjemputan</Button>
                </Col>
              </Row>
            </Form>
          </section>
        </Container>
      </section>
    </div>
  );
};

export default Penjemputan2;