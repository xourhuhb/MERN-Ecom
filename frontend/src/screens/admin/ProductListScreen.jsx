import React from "react";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "../../slices/productSliceApi";
import { Button, Col, Row, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";

const ProductListScreen = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();

  const [createProduct, { isLoading: loadingNewProduct }] =
    useCreateProductMutation();

  const createProductHandler = async () => {
    if (window.confirm("Are you sure buddy?")) {
      try {
        await createProduct();
        refetch();
        toast.success("New product added successfully");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  const deleteHandler = () => {};
  return (
    <div>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-end">
          <Button onClick={createProductHandler} className="btn-sm m-3">
            <FaEdit /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingNewProduct && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">No products</Message>
      ) : (
        <>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button
                        variant="light"
                        className="btn-sm mx-2"
                        type="button"
                      >
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm mx-2"
                      type="button"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default ProductListScreen;
