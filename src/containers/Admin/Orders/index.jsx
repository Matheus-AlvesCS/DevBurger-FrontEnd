import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Row } from "./row";
import { StatusOptions } from "./orderStatus";

import { Filter, FilterOption } from "./styles";

import api from "../../../services/api";
import formatDate from "../../../utils/formatDate";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const { data } = await api.get("/orders");

      setOrders(data);
      setFilteredOrders(data);
    }

    getOrders();
  }, []);

  function createData(order) {
    return {
      orderId: order._id,
      name: order.user.name,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map((order) => createData(order));

    setRows(newRows);
  }, [filteredOrders]);

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders);
    } else {
      const statusIndex = StatusOptions.findIndex(
        (status) => status.id === activeStatus
      );

      const newFilteredOrders = orders.filter(
        (order) => order.status === StatusOptions[statusIndex].value
      );

      setFilteredOrders(newFilteredOrders);
    }
  }, [orders]);

  function handleStatus(status) {
    if (status.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter((order) => order.status === status.value);

      setFilteredOrders(newOrders);
    }

    setActiveStatus(status.id);
  }

  return (
    <>
      <Filter>
        {StatusOptions.map((status) => (
          <FilterOption
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActive={status.id === activeStatus}
          >
            {status.label}
          </FilterOption>
        ))}
      </Filter>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
