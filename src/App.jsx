

import { Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingJsx/LandingPage";
import SignupForm from "./Component/LandingJsx/SignupForm";
import Home from "./Component/LandingJsx/Home";
import SubmitForm from "./Component/LandingJsx/SubmitForm";
import Footer from "./Component/CommanComponents/Footers";
import About from "./Component/LandingJsx/About";
import Feature from "./Component/LandingJsx/Features";
import Blogs from "./Component/LandingJsx/Blogs";
import FAQ from "./Component/LandingJsx/FAQ";
import Navbars from "./Component/CommanComponents/NavBars";
import "./App.css"; // Ensure this contains necessary styles
import ParkingSearchCard from "./Component/CommanComponents/ParkingSerachCard"
import FindCharges from './Component/CommanComponents/FindCharges'
import ParkingBooking from "./Component/CommanComponents/ParkingBooking"
import CustomerDetails from "./Component/CommanComponents/CustomerDetails"


function App() {
  return (
    <div className="page-container">
      <Navbars />
      <div className="main-content">
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/SubmitForm" element={<SubmitForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<Feature />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/FAQ" element={<FAQ/>} />
          <Route path="/" element={ <ParkingSearchCard />}/>
          <Route path="/FindCharges" element={<FindCharges/>}/>
          <Route path="/ParkingBooking" element={<ParkingBooking/>}/>
          <Route path="/CustomerDetails" element={<CustomerDetails/>}/>
        </Routes>
      </div>
    <Footer />
    </div>
  );
}

export default App;


