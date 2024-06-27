import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Me from "./pages/Me.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Diabetes from "./pages/Diabetes.jsx";
import Hypertensive from "./pages/Hypertensive.jsx";
import Hair from "./pages/Hairtreatment.jsx";
import Skin from "./pages/Skincare.jsx";
import DiabetesAI from "./pages/DiabetesAI.jsx";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";
import CheckoutForm from "./pages/CheckoutForm.jsx";

function App() {
    return (
        <>
            <Router>
                <div>
                    <ScrollToTop smooth />

                    <Routes>
                        <Route path="/checkout" element={<CheckoutForm />} />
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/diabetes-predict"
                            element={<DiabetesAI />}
                        />
                        <Route
                            path="/products/diabetes"
                            element={<Diabetes />}
                        />
                        <Route
                            path="/products/hypertensive"
                            element={<Hypertensive />}
                        />
                        <Route
                            path="/products/hair-treatment"
                            element={<Hair />}
                        />
                        <Route path="/products/skin-care" element={<Skin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/me" element={<Me />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
