import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './router';
import 'bootstrap';
import './scss/all.scss';
// import logo_moutain_green from '../public/icon/logo_moutain_green'
// <img src={logo_moutain_green} className="logo react" alt="React logo" />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
