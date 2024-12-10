// import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import kemudahan from "../assets/img/jasa/kemudahan.png";
import intensif from "../assets/img/jasa/intensif.png";
import kontribusi from "../assets/img/jasa/kontribusi.png";
import dukungan from "../assets/img/jasa/dukungan.png";
import formulir from "../assets/img/jasa/formulir.png";
import konfirmasi from "../assets/img/jasa/konfirmasi.png"; 
import nikmatilayanan from "../assets/img/jasa/nikmatilayanan.png";
import Numbersatu from "../assets/img/jasa/Numbersatu.png";
import Numberdua from "../assets/img/jasa/Numberdua.png";
import Numbertiga from "../assets/img/jasa/Numbertiga.png";
// import gimifaq from "../assets/img/jasa/gimifaq.png";
// import kanan from "../assets/img/jasa/kanan.png";
import { SDG } from "../components/SDG";
import styles from '../css/jasa.module.css';
import FaqComponents from '../components/FaqComponents';
import { useNavigate } from "react-router-dom";

 

const Jasa = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/penjemputan"); 
  }; 

  return (
    <Container className={`${styles.solusi}`}>
      <div className={styles.satuSolusi}>
        <header className={`${styles.Content} w-100  d-flex align-items-center`}>
          <Container className="my-5 text-left">
            <div className={styles['content-wrapper']}>
              <h2 className={`fw-normal  ${styles.title}`}>
                Satu Solusi untuk <span style={{ color: "#ff9c00" }}>Membangun</span> Kebiasaan Kelola Sampah Organik
              </h2>
              <p className="mt-3">
                Layanan ini membantu Anda mengelola sampah organik dengan mudah. Kami menjemput sampah organik yang ingin dijual dari rumah atau bisnis Anda, kemudian menyalurkannya kepada peternak maggot yang mengolahnya menjadi produk bernilai seperti pakan ternak. Selain berkontribusi untuk lingkungan, Anda juga mendapatkan imbalan dari setiap limbah yang Anda kumpulkan.
              </p>
            </div>

            <Row className="mt-5 align-items-stretch">
              <Col md={3} className="d-flex mb-4">
                <Card className="text-center shadow-sm flex-fill">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={kemudahan}
                      alt="Kemudahan dan Kenyamanan"
                      style={{
                        width: "108px",
                        height: "114px",
                        marginBottom: "20px",
                      }}
                    />
                    <Card.Title className={styles['text-kemudahan']}>
                      Kemudahan dan Kenyamanan
                    </Card.Title>
                    <Card.Text>
                      Maggo menyediakan layanan penjemputan limbah organik tanpa
                      perlu membawanya ke tempat pembuangan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="d-flex mb-4">
                <Card className="text-center shadow-sm flex-fill">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={intensif}
                      alt="Insentif Finansial"
                      style={{
                        width: "108px",
                        height: "114px",
                        marginBottom: "20px",
                      }}
                    />
                    <Card.Title className="text-intensif">
                      Insentif Finansial
                    </Card.Title>
                    <Card.Text>
                      Memberikan insentif bagi Anda yang menjual limbah organik,
                      memotivasi untuk lebih peduli pada pengelolaan limbah.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3} className="d-flex mb-4">
                <Card className="text-center shadow-sm flex-fill">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={kontribusi}
                      alt="Kontribusi Lingkungan"
                      style={{
                        width: "108px",
                        height: "114px",
                        marginBottom: "20px",
                      }}
                    />
                    <Card.Title className="text-kontribusi">
                      Kontribusi Lingkungan
                    </Card.Title>
                    <Card.Text>
                      Maggo membantu mengurangi sampah organik yang berakhir di
                      tempat pembuangan akhir, dan berkontribusi pada lingkungan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3} className="d-flex mb-4">
                <Card className="text-center shadow-sm flex-fill">
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={dukungan}
                      alt="Dukungan Perekonomian Lokal"
                      style={{
                        width: "108px",
                        height: "114px",
                        marginBottom: "20px",
                      }}
                    />
                    <Card.Title className="text-dukungan">
                      Dukungan Perekonomian Lokal
                    </Card.Title>
                    <Card.Text>
                      Maggo bekerja sama dengan petani maggot untuk menjual limbah
                      organik yang dikumpulkan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </header>


        <Container className={styles.hargaJual}>
          <Row className={`${styles.customRow} justify-content-center`}>
            <Col md={8} lg={12} className={styles.priceContainer}>
              <div>
                <h3 className={styles.priceHeading}>Harga Jual Sampah Hari Ini</h3>
                <p className="text-muted" style={{ marginLeft: '20px', }}>24 Oktober 2024</p>
              </div>
              <div className="ms-auto text-right">
                <h2 className={styles.priceValue}>Rp 10.000/Kg</h2>
              </div>
            </Col>
          </Row>
        </Container>

      <Container className={styles.caraKerjaContainer}>
        <div className={styles.caraKerjaWrap}>
          <div className={`${styles.penjelasanCaraKerja} d-flex align-items-center mb-3`}>
            <div className={styles.line}></div>
            <span className={styles.caraKerjaText}>Cara Kerja</span>
          </div>
          <div className={styles.penjelasanCaraKerja2}>
            <h1 className={styles.stepsHeading}>
              3 Langkah Sederhana Untuk Mulai <br /> Jemput dan Jual Sampah!
            </h1>
          </div>
        </div>
      </Container>



      <Container className={styles.stepsContainer}>
        <Row className={`${styles.customRow} justify-content-center`}>
          {/* Step cards */}
          <Col lg={4} md={6} sm={12} className="d-flex mb-4">
            <Card className={styles.stepCard}>
              <Card.Img className={styles.stepCardImg} variant="top" src={formulir} alt="Isi Formulir Jemput Sampah" />
              <Card.Body className={styles.stepCardBody}>
                <img src={Numbersatu} alt="Number 1" className={styles.stepCardNumber} />
                <div>
                  <Card.Title className={styles.stepCardTitle}>Isi Formulir Jemput Sampah</Card.Title>
                  <Card.Text className={styles.stepCardText}>
                  Tidak perlu bingung lagi dengan sampah organik yang
                  menumpuk. Isi formulir kami dengan biodata Anda, alamat
                  penjemputan, dan jumlah sampah yang ingin dijual dan
                  dijemput. Kami akan datang ke lokasi Anda untuk
                  mengambilnya, tanpa repot!

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Repeat for other steps */}
          <Col lg={4} md={6} sm={12} className="d-flex mb-4">
            <Card className={styles.stepCard}>
              <Card.Img className={styles.stepCardImg} variant="top" src={konfirmasi} alt="Konfirmasi data" />
              <Card.Body className={styles.stepCardBody}>
                <img src={Numberdua} alt="Number 2" className={styles.stepCardNumber} />
                <div>
                  <Card.Title className={styles.stepCardTitle}>Konfirmasi Data</Card.Title>
                  <Card.Text className={styles.stepCardText}>
                    Setelah mengisi formulir, periksa kembali data yang Anda
                    masukkan. Pastikan semuanya sudah benar, mulai dari
                    alamat hingga jumlah sampah. Dengan data yang akurat,
                    tim kami bisa melayani Anda dengan lebih cepat dan
                    tepat!

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12} className="d-flex mb-4">
            <Card className={styles.stepCard}>
              <Card.Img className={styles.stepCardImg} variant="top" src={nikmatilayanan} alt="nikmati layanan" />
              <Card.Body className={styles.stepCardBody}>
                <img src={Numbertiga} alt="Number 3" className={styles.stepCardNumber} />
                <div>
                  <Card.Title className={styles.stepCardTitle}>Nikmati Layanan Jemput Sampah!</Card.Title>
                  <Card.Text className={styles.stepCardText}>
                    Hanya dalam beberapa klik, Anda telah berkontribusi pada
                    lingkungan yang lebih baik! Terima kasih telah menjadi
                    bagian dari Maggo dan membantu menciptakan bumi yang
                    lebih hijau!

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      <Container className={styles.buttonContainer}>
        <div className="text-center mt-4">
        <Button className={`${styles.startButton} ${styles.customStartButton}`} onClick={handleNavigation}>
            Mulai Jemput Sampah
          </Button>
        </div>
      </Container>

        <Container className="d-flex align-content-center justify-content-center">
          <FaqComponents/>
        </Container>

        <Container className="d-flex align-content-center justify-content-center">
          <SDG />
        </Container>
      </div>
      
    </Container>
  );
};

export default Jasa;
