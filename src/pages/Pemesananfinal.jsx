import { Container, Button } from 'react-bootstrap';
import pesananberhasil from "../assets/img/konfirpembayaran/pesananberhasil.png";
import { useNavigate } from "react-router-dom";

const KonfirmasiPembayaran = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Tambahkan logika untuk Lanjut Whatsapp
    console.log("Navigating to WhatsApp...");
    // Misalnya, buka URL WhatsApp menggunakan window.location.href
    window.location.href = "https://wa.me/"; // Ganti dengan nomor tujuan WhatsApp Anda
  };

  const handleBack = () => {
    navigate("/jasa"); // Navigasi ke halaman /jasa
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
        <img src={pesananberhasil} alt="Confirmation Illustration" className="mb-3" style={{ width: '60px' }} />
        <h4 className="text-black">Konfirmasi Pembayaran?</h4>
        <p className="text-black">
          Apakah kamu yakin konfirmasi pemesanan sudah sesuai? Driver akan segera diarahkan untuk jemput sampahmu segera.
        </p>
        <div className="d-flex justify-content-between">
          <Button variant="link" onClick={handleBack} className="text-decoration-none text-dark">
            Halaman Awal
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Lanjut Whatsapp
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default KonfirmasiPembayaran;
