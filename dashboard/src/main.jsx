import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import './index.css';
import Home from './component/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
       <BrowserRouter>
           <Routes>
              <Route path='/*' element={<Home/>} />
           </Routes>
       </BrowserRouter>
    </>
  </StrictMode>,
)
