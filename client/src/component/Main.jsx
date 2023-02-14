import React from "react";
import { Container } from "react-bootstrap";
import "../index.css";
import HomeScreen from "../screens/HomeScreen";
const Main = () => {
  return (
    <main className="main py-3">
      <Container>
        <HomeScreen />
      </Container>
    </main>
  );
};

export default Main;
