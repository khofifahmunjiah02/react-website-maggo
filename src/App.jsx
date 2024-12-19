import { Routes, Route } from "react-router-dom"

import NavbarComponents from "./components/NavbarComponents"
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
import BlogBuat from "./pages/BlogBuat"
import BlogPost from "./pages/BlogPost"
import Konfirpembayaran from "./pages/Konfirpembayaran"
import Pemesananfinal from "./pages/Pemesananfinal"
import PusatBantuan from "./pages/PusatBantuan"
import ScrollToTop from "./components/ScrollToTop"
import { ProductProvider } from "./components/ProductContext"
import { CartProvider } from "./components/CartContext"
import { FormProvider } from "./components/FormContext"


export default function App() {
  return (
    <div>
      <NavBarComponents />
      <ScrollToTop/>
      <ProductProvider>
        <CartProvider>
          <FormProvider>
            <Routes>
              <Route path="/" Component={LandingPage} />
              <Route path="/jasa" Component={Jasa} />
              <Route path="/produk" Component={Produk} />
              <Route path="/ruang-tanya" Component={RuangTanya} />
              <Route path="/blog" Component={Blog} />
              <Route path="/tentang-kami" Component={TentangKami} />
              <Route path="/produk-pembelian" Component= {ProdukPembelian} />
              <Route path="/penjemputan" Component={Penjemputan} />
              <Route path="/penjemputan2" Component={Penjemputan2}/>
              <Route path="/PusatBantuan" Component={PusatBantuan} />
              <Route path="/blog-buat" Component={BlogBuat}></Route>
              <Route path="/post/:postId" element={<BlogPost />} />
            </Routes>
          </FormProvider>
        </CartProvider>
      </ProductProvider>

      
      
      <FooterComponents />
    </div>
  )
}
