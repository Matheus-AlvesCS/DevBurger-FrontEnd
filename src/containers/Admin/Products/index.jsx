import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Container, EditButton, ProductImage } from "./styles";

import api from "../../../services/api";
import formatPrice from "../../../utils/formatPrice";

import { CheckCircle, Pencil, XCircle } from "@phosphor-icons/react";

export function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getProducts() {
      const { data } = await api.get("/products");
      console.log(data);
      setProducts(data);
    }

    getProducts();
  }, []);

  function isOffer(offer) {
    return offer ? (
      <CheckCircle color="#61A120" size={24} />
    ) : (
      <XCircle color="#FF3205" size={24} />
    );
  }

  function editProduct(product) {
    navigate("/admin/editar-produto", { state: { product } });
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Em oferta</TableCell>
              <TableCell align="center">Imagem do produto</TableCell>
              <TableCell align="center">Editar produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">
                  {formatPrice(product.price)}
                </TableCell>
                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                <TableCell align="center">
                  <ProductImage src={product.url} alt={product.name} />
                </TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => editProduct(product)}>
                    <Pencil />
                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
