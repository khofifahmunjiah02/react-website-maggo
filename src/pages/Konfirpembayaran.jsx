import { Container, Button } from 'react-bootstrap';
import gimibayar from "../assets/img/konfirpembayaran/gimibayar.png";
import { useNavigate } from "react-router-dom";

const KonfirmasiPembayaran = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Navigasi ke halaman "pemesananfinal"
    navigate("/pemesananfinal");
  };

  const handleBack = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div 
        className="p-4 text-center" 
        style={{ 
          backgroundColor: 'white', 
          borderRadius: '10px', 
          maxWidth: '400px', 
          boxShadow: '0 4px 90px rgba(0, 0, 0, 0.1)' // Menambahkan box-shadow
        }}
      >
        <img src={gimibayar} alt="Confirmation Illustration" className="mb-3" style={{ width: '60px' }} />
        <h4 className="text-black">Konfirmasi Pembayaran?</h4>
        <p className="text-black">
          Apakah kamu yakin konfirmasi pemesanan sudah sesuai? Driver akan segera diarahkan untuk jemput sampahmu segera.
        </p>
        <div className="d-flex justify-content-between">
          <Button variant="link" onClick={handleBack} className="text-decoration-none text-dark">
            Kembali
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Ya, Saya Yakin
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default KonfirmasiPembayaran;
