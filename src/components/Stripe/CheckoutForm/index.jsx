import { useState } from "react";
import { useNavigate } from "react-router";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

import { useCart } from "../../../hooks/CartContext";

import "../styles.css";
import api from "../../../services/api";

export function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { cartProducts, clearCart } = useCart();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or elements not loaded, try again.");
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      try {
        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,
          };
        });

        const { status } = await api.post(
          "/orders",
          { products },
          {
            validateStatus: () => true,
          }
        );

        if (status === 201) {
          toast.success("Pedido realizado com sucesso! 👌");
          setTimeout(() => {
            navigate(
              `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`
            );
          }, 2000);
          clearCart();
        } else if (status < 500 && status >= 400) {
          toast.error("Erro ao tentar realizar o pedido. 😞");
        } else {
          throw new Error();
        }
      } catch (err) {
        toast.error("Erro no sistema, não foi possivel realizar o pedido. 😭");
      }
    } else {
      navigate(
        `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="form-button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pagar agora"
            )}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
