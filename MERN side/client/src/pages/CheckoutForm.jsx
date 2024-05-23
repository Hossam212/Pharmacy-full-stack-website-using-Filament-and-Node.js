import React, { useState } from "react";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.error("[error]", error);
            setError(error.message);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
            // Send paymentMethod.id to your server to complete the payment
        }
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
                <label>
                    Card number
                    <CardNumberElement className="stripe-input" />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Expiration date
                    <CardExpiryElement className="stripe-input" />
                </label>
            </div>
            <div className="form-group">
                <label>
                    CVC
                    <CardCvcElement className="stripe-input" />
                </label>
            </div>
            <button type="submit" disabled={!stripe} className="pay-button">
                Pay
            </button>
            {error && <div className="error-message">{error}</div>}
        </form>
    );
};

export default CheckoutForm;
