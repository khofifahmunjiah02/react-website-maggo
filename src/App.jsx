import { Routes, Route } from "react-router-dom"

import NavBarComponents from "./components/NavBarComponents"
import FooterComponents from "./components/FooterComponents"
 

import LandingPage from "./pages/LandingPage"
import Jasa from "./pages/Jasa"
import Produk from "./pages/Produk"
import RuangTanya from "./pages/RuangTanya"
import Blog from "./pages/Blog"
import TentangKami from "./pages/TentangKami"
import ProdukPembelian  from "./pages/ProdukPembelian"
import Penjemputan from "./pages/Penjemputan"
import Penjemputan2 from "./pages/Penjemputan2"

import Konfirpembayaran from "./pages/Konfirpembayaran"
import Pemesananfinal from "./pages/Pemesananfinal"
import PusatBantuan from "./pages/PusatBantuan"

export default function App() {
  return (
    <div>
      <NavBarComponents />
      
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/jasa" Component={Jasa} />
        <Route path="/produk" Component={Produk} />
        <Route path="/ruang-tanya" Component={RuangTanya} />
        <Route path="/blog" Component={Blog} />
        <Route path="/tentang-kami" Component={TentangKami} />
        <Route path="/produk-pembelian" Component= {ProdukPembelian} />
        <Route path="/penjemputan" Component={Penjemputan} />
        <Route path="/konfirpembayaran" Component={Konfirpembayaran}/>
        <Route path="/pemesananfinal" Component={Pemesananfinal}/>
        <Route path="/penjemputan" Component={Penjemputan}/>
        <Route path="/penjemputan2" Component={Penjemputan2}/>
        <Route path="/PusatBantuan" Component={PusatBantuan} />
      </Routes>
      
      
      <FooterComponents />
    </div>
  )
}
