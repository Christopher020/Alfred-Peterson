import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TelecomPage from './routes/TelecomPage';
import PippingPage from './routes/PippingPage';
import MaterialPage from './routes/MaterialPage';
import NDTPage from './routes/NDTPage'
import Corrosion from './routes/Corrosion';
import ProvisionPage from './routes/ProvisionPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/TelecomPage' element={<TelecomPage />} />
      <Route path='/PippingPage' element={<PippingPage />} />
      <Route path='/MaterialPage' element={<MaterialPage />} />
      <Route path='/NDTPage' element={<NDTPage/>} />
      <Route path='/Corrosion' element={<Corrosion/>} />
      <Route path='/ProvisionPage' element={<ProvisionPage/>}/>
    </Routes>
  </BrowserRouter>



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


