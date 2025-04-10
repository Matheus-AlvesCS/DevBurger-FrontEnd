import { useCart } from "../../hooks/CartContext";
import formatPrice from "../../utils/formatPrice";

import { Table } from "../index";

import {
  ButtonsGroup,
  MenuLink,
  ProductImage,
  TotalPrice,
  TrashIcon,
} from "./styles";

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart();

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Items</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>
      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td>
                <ProductImage src={product.url} alt={product.name} />
              </Table.Td>
              <Table.Td>{product.name}</Table.Td>
              <Table.Td>{product.formattedPrice}</Table.Td>
              <Table.Td>
                <ButtonsGroup>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </ButtonsGroup>
              </Table.Td>
              <Table.Td>
                <TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </TotalPrice>
              </Table.Td>
              <Table.Td>
                <TrashIcon
                  onClick={() => deleteProduct(product.id)}
                  color="#9e1c00"
                  size={24}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <Table.Tr>
            <Table.Td>Carrinho vazio.</Table.Td>
          </Table.Tr>
        )}
        <Table.Tr>
          <Table.Td colSpan={6}>
            <MenuLink to="/cardapio">Adicionar produtos.</MenuLink>
          </Table.Td>
        </Table.Tr>
      </Table.Body>
    </Table.Root>
  );
}
