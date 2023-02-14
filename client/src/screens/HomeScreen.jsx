import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
// import products from "../products";
import Product from "../component/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async (req, res) => {
      const { data } = await axios.get("http://localhost:3001/v1/api/products");
      setProducts(data?.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
      <Col></Col>
    </>
  );
};

export default HomeScreen;
