import { loadStripe } from "@stripe/stripe-js";

export const initStripe = () => {
  return loadStripe("pk_test_kfOOa0C24geUAoCDF6F3NFuq00lje1pSRr");
};
