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
      if (cardElement) {
        const { error, token } = await stripe.createToken(cardElement);
        console.info("error", error);
        console.info("token", token);
        // TODO: send token to server
      }
    }
  };

  return (
    <>
      <h1>Token</h1>
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

export function Token(_: Props) {
  return (
    <Elements stripe={initStripe()}>
      <CheckoutForm />
    </Elements>
  );
}
