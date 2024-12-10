import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import './css/landingpage.css';
import './css/produk.css';
import './css/TentangKami.css';
import './css/jasa.module.css';
import './css/penjemputan.css'; 
import './css/penjemputan2.css';
import './css/PusatBantuan.css'
import './css/faqComponents.css';

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
