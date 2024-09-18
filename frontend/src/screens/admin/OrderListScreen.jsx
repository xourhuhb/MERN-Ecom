import React from "react";
import { useGetOrdersQuery } from "../../slices/orderApiSlice";
import { Button, Table } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader.jsx";
import { LinkContainer } from "react-router-bootstrap";
import { FaTimes } from "react-icons/fa";

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  return (
    <>
      <h1>Orders</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">Error</Message>
      ) : (
        <Table striped hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={orders._id}>
                <td>{item._id}</td>
                <td>{item.user && item.user.name}</td>
                <td>{item.createdAt.substring(0, 10)}</td>
                <td>{item.totalPrice}</td>
                <td>
                  {item.isPaid ? (
                    item.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  {item.isDelivered ? (
                    item.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${item._id}`}>
                    <Button className="btn-sm" variant="light">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
