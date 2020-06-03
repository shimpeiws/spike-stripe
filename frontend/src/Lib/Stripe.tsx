import { loadStripe } from "@stripe/stripe-js";

export const initStripe = () => {
  return loadStripe("YOUR-PUBLILSHABLE-KEY");
};
