import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { UserProvider } from "./components/UserContext.jsx";
const stripePromise = loadStripe(
    "pk_test_51NQgLnAMjq2DeMy9mzc7CJhqEvRPVucYCwtXVhUoBkS6J7ppwY5jtObApiWNFB2NJ5zJmoIWBk07W7jX7MihGgR600mSRIrubK"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <UserProvider>
            <Elements stripe={stripePromise}>
                <ToastContainer />
                <App />
            </Elements>
        </UserProvider>
    </React.StrictMode>
);
