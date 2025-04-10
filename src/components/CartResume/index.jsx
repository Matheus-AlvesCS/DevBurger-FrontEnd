import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import { useCart } from "../../hooks/CartContext";
import api from "../../services/api";
import formatPrice from "../../utils/formatPrice";

import { Container } from "./styles";

import { Button } from "../Button";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);

  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const total = cartProducts.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    setFinalPrice(total);
  }, [cartProducts]);

  async function submitOrder() {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post("/create-payment-intent", { products });

      navigate("/checkout", {
        state: data,
      });
    } catch (err) {
      toast.error("Algum erro ocorreu, tente novamente.");
    }
  }

  return (
    <div>
      <Container>
        <div className="top-container">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>
          <p className="delivery">Taxa de entrega</p>
          <p className="delivery-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div className="bottom-container">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalizar compra</Button>
    </div>
  );
}
