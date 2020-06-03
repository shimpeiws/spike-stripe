import * as React from "react";
import { initStripe } from "./Lib/Stripe";
import {
  CardElement,
  Elements,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (stripe && elements) {
      const cardElement = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        "client-secret",
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: "Jenny Rosen"
            }
          }
        }
      );
      console.info("error", error);
      console.info("paymentIntent", paymentIntent);
    }
  };

  return (
    <>
      <h1>PaymentIntent</h1>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </>
  );
};

interface Props {}

export function PaymentIntent(_: Props) {
  return (
    <Elements stripe={initStripe()}>
      <CheckoutForm />
    </Elements>
  );
}
