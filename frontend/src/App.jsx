import { Route, Routes } from "react-router-dom";
import LoginPage from "./landing_page/Login/LoginPage";
import SignupPage from "./landing_page/Signup/SingupPage";
import HomePage from './landing_page/home/HomePage';
import DashBoardHome from '../../dashboard/src/component/Home';
import Navbar from './landing_page/Navbar';
import './index.css'

import Footer from './landing_page/Foooter';
import NotFoundPage from './landing_page/NotFoundPage';

import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage';
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<DashBoardHome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/singup" element={<SignupPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;