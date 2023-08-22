import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../public/assets/css/app.min.css'
import '../public/assets/css/fontawesome.min.css'
import '../public/assets/css/style.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>
)
