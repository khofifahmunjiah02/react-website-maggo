import {Routes, Route} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponents'
import FooterComponent from './components/FooterComponents'

import LandingPage from './pages/LandingPage'
import Produk from './pages/Produk'
import Jasa from './pages/Jasa'
import RuangTanya from './pages/RuangTanya'
import Blog from './pages/Blog'
import TentangKami from './pages/TentangKami'





function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/Produk" Component={Produk} />
      <Route path="/Jasa" Component={Jasa} />
      <Route path="/RuangTanya" Component={RuangTanya} />
      <Route path="/Blog" Component={Blog} />
      <Route path="/TentangKami" Component={TentangKami} />
    </Routes>

    <FooterComponent/>
  </div>
}

export default App
