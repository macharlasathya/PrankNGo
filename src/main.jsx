
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import LandingPage from './Component/LandingJsx/LandingPage.jsx';
// import LandingPage from './Component/LandingJsx/LandingPage.jsx';





createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <App />
    {/* <LandingPage/> */}
     </BrowserRouter>

   

    
    
    
    
 
);

