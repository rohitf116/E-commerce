import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }} className="my-2">
      <Card className="py-3" style={{ width: "300px", textAlign: "center" }}>
        <Link to={`/product/${product._id}`}>
          <Card.Img
            style={{ width: "200px", height: "200px" }}
            src={`${product.image}`}
            variant="top"
          ></Card.Img>
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong> {product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} review`}
            />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
