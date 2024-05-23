import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.1/+esm";
import { showAlert } from "./alert.js";
import { loadStripe } from "../../../node_modules/@stripe/stripe-js/pure.js";
export const bookTour = async (propertyId) => {
    const stripe = await loadStripe(
        "pk_test_51NQgLnAMjq2DeMy9mzc7CJhqEvRPVucYCwtXVhUoBkS6J7ppwY5jtObApiWNFB2NJ5zJmoIWBk07W7jX7MihGgR600mSRIrubK"
    );
    try {
        const session = await axios(
            `/api/v1/bookings/checkout-session/${propertyId}`
        );
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id,
        });
    } catch (err) {
        showAlert("error", err);
    }
};
