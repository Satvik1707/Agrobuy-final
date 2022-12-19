import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import "../App.css";
const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className=" p-3 rounded my-2">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="div"> ₹{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
