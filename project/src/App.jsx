
import axios from "axios";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import LandingPage from "./Component/LandingJsx/LandingPage";
import SignupForm from "./Component/LandingJsx/SignupForm";
// import Home from "./Component/LandingJsx/Home";
import SubmitForm from "./Component/LandingJsx/SubmitForm";
import Footer from "./Component/CommanFiles/Footers";
import About from "./Component/LandingJsx/About";
import Feature from "./Component/LandingJsx/Features";
import Blogs from "./Component/LandingJsx/Blogs";
import FAQ from "./Component/LandingJsx/FAQ";
import NavBar from "./Component/CommanFiles/NavBars";
import "./App.css";
import ParkingSearchCard from "./Component/CommanFiles/ParkingSerachCard";
import FindCharges from "./Component/CommanFiles/FindCharges";
import ParkingBooking from "./Component/CommanFiles/ParkingBooking";
import CustomerDetails from "./Component/CommanFiles/CustomerDetails";
import Login from "./Component/LandingJsx/Login";


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth";


const BOOKING_API_URL = import.meta.env.VITE_BOOKING_API_URL || "http://localhost:5000/api/bookings";


if (!API_URL) {
  console.error("❌ Auth API URL is not defined. Check your .env file.");
}

if (!BOOKING_API_URL) {
  console.error("❌ Booking API URL is not defined. Check your .env file.");
}


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Registration failed. Try again.");
    throw error;
  }
};


export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);

    if (error.response) {
      alert(`Login failed: ${error.response.data.message}`);
    } else if (error.request) {
      alert("No response from server. Ensure the backend is running.");
    } else {
      alert("Login failed. Please try again.");
    }

    throw error;
  }
};


export const submitRequest = async (requestData) => {
  try {
    const response = await axios.post(`${API_URL}/requests`, requestData);
    return response.data;
  } catch (error) {
    console.error("Request Submission Error:", error.response?.data || error.message);

    if (error.response) {
      alert(`Request submission failed: ${error.response.data.message}`);
    } else if (error.request) {
      alert("No response from server. Ensure the backend is running.");
    } else {
      alert("Request submission failed. Please try again.");
    }

    throw error;
  }
};


export const submitBooking = async (bookingData) => {
  try {
    console.log("Submitting booking to:", BOOKING_API_URL);
    console.log("Booking data:", JSON.stringify(bookingData, null, 2));


    try {
      await axios.get(BOOKING_API_URL.split('/api/')[0]);
      console.log("Server is reachable");
    } catch (e) {
      console.error("Server ping failed, server might be down:", e.message);
    }


    console.log('localStorage keys before submission:', Object.keys(localStorage));

    const response = await axios.post(BOOKING_API_URL, bookingData);
    console.log("Server response:", response.data);


    if (response.data?.data?._id) {
      console.log("MongoDB ID received:", response.data.data._id);
      return response.data;
    } else {
      console.warn("Response doesn't contain MongoDB ID:", response.data);


      console.log('localStorage keys after API call:', Object.keys(localStorage));

      return response.data;
    }
  } catch (error) {
    console.error("Booking Submission Error Details:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });


    console.log('localStorage keys after API error:', Object.keys(localStorage));
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.includes('parking') || key.includes('book')) {
        console.warn(`Found suspicious localStorage item at key "${key}":`, localStorage.getItem(key));
      }
    }

    if (error.response) {
      alert(`Booking submission failed: ${error.response.data.message || error.response.data.error || "Unknown error"}`);
    } else if (error.request) {
      alert("No response from server. Ensure the backend is running at " + BOOKING_API_URL);
    } else {
      alert("Booking submission failed. Please try again.");
    }

    throw error;
  }
};


function ProtectedRoute({ children }) {
  const token = localStorage.getItem('authToken');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}


function App() {
  return (
    <div className="page-container">
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Navigate to="/app" replace />} />


        <Route path="/app" element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }>
          <Route index element={<ParkingSearchCard />} />
          <Route path="submit" element={<SubmitForm />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Feature />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="find-charges" element={<FindCharges />} />
          <Route path="parking-booking" element={<ParkingBooking />} />
          <Route path="customer-details/:id" element={<CustomerDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
