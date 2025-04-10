import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QrouoE3bcjJ9rrsuayLs0aMmYv3e5NDIFgPvDKGqnCz3mK8sz3qJE6AbGoWMjo7N7dfnWZKRGvfNIH2LztUAYC200J4pY5NC2"
);

export default stripePromise;
