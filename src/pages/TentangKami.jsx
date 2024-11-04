import {Container, Row, Col} from 'react-bootstrap';

import RectangleImage from '../assets/img/rectangle.png';
import { visiMisi } from '../data/index';
import Gimi6Image from '../assets/img/gimi6.png';
import Gimi7Image from '../assets/img/gimi7.png';
import { people } from '../data/index';
import Logo1Image from '../assets/img/logo1.png';

const TentangKami = () => {
  return (
    <div className="tentangkami">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container className='position-relative text-center'>
          <Row className="header-box d-flex align-items-center">
            <div>
              <img src={RectangleImage} alt="rectangle.png" className='w-100 bg-image' />
              <img src={Logo1Image} alt="logo1.png" className='logo-overlay' />
            </div>
            <Col>
              <h1>
                Kami Menjadi Jembatan <br /> <span>Antara <span className="thin-text">Peternak Maggot dan</span></span> <span className="thin-text">Penghasilan Sampah Organik</span>
              </h1>
            </Col>
            <Col>
              <h4>
                Kami menghubungkan peternak maggot dengan sumber sampah organik untuk memastikan pasokan yang stabil dengan cara menjual sampah organik anda kepada kami. Kami mempermudah distribusi sampah organik agar dapat diolah secara efektif dan berkelanjutan. Dengan cara ini, kami berkontribusi dalam mengurangi sampah di TPA dan mendukung budidaya maggot yang ramah lingkungan.
              </h4>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="kelas w-100 min-vh-100 bg-primary text-white pt-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Visi Kami</h1>
              <p className="text-center">
                <h4>Menjadi solusi terdepan dalam pengolahan sampah organik di Indonesia melalui budidaya maggot (BSF larvae), memberikan manfaat bagi masyarakat, lingkungan, dan perekonomian.</h4>
              </p>
            </Col>
          </Row>
          <Col>
            <h1 className="text-center fw-bold">Misi Kami</h1>
          </Col>
          <Row>
            {visiMisi.map((kelas) => {
              return (
                <Col key={kelas.id} md={4} className="text-center">
                  <img src={kelas.image} alt={kelas.title} className="mb-5" />
                  <div className="text-center">
                    <h4>{kelas.desc}</h4>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div className="member w-100 min-vh-100 pt-5">
        <Container>
          <Row className="align-items-center mb-5">
          <Col md={6} className="text-center">
              <img src={Gimi7Image} alt="gimi7.png" className="w-75" />
            </Col>
            <Col md={6}>
              <h1>
                Maggo <span className="text-berinovatif">berinovatif</span> untuk mengolah sampah organik
              </h1>
              <h4 className="mt-3">
                Maggo sebagai pionir dalam dunia pengolahan sampah organik selalu bersemangat untuk menggali ide-ide baru dan teknologi terkini untuk menemukan cara-cara yang lebih efisien dan efektif dalam mengolah sampah organik melalui budidaya maggot.
              </h4>
            </Col>
          </Row>
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <h1>
                Maggo mengedepankan <span className="text-kualitas">kualitas</span>
              </h1>
              <h4 className="mt-3">
                Maggo tidak hanya fokus pada kuantitas, tetapi juga pada kualitas produk dan layanan yang kami berikan. Setiap produk Maggo dibuat dengan bahan-bahan berkualitas tinggi dan melalui proses produksi yang terstandarisasi.
              </h4>
            </Col>
            <Col md={6} className="text-center">
              <img src={Gimi6Image} alt="gimi6.png" className="w-75" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="person w-100 pt-5">
        <Container>
          <Row className="mb-5">
            <Col className="fw-bold">
              <h1>Tim yang Menginspirasi <br /> Lahirnya Ide Kreatif <span>Maggo</span></h1>
            </Col>
          </Row>
          <Row>
            {people.map((person) => {
              return (
                <Col key={person.id} md={4} className="text-center">
                  <img src={person.image} alt={person.name} className="mb-5" />
                  <div className="text-center">
                    <h4>{person.name}</h4>
                    <p>{person.skill}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TentangKami;