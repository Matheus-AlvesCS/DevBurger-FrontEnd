import { useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "../../components";

import stripePromise from "../../config/stripeConfig";

export function Checkout() {
  const {
    state: { clientSecret },
  } = useLocation();

  if (!clientSecret) {
    return <div>Erro, tente novamente.</div>;
  }

  return (
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
