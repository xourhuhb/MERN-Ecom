import React from "react";
import { useGetTopProductsQuery } from "../slices/productSliceApi";
import Loader from "./Loader";
import Message from "./Message";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">Error</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h3>
                {product.name} (${product.price})
              </h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
