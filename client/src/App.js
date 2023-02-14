// import { Container } from "react-bootstrap";
//

//custom components
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductScreen from "./screens/ProductScreen";
// import HomeScreen from "./screens/HomeScreen";
import Main from "./component/Main";
import { Route, Routes } from "react-router-dom";
const login = () => {
  return (
    <div>
      <h1>sign</h1>
    </div>
  );
};
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main className="main" />} />
          <Route path="login" element={login} />
          <Route path="product/:id" element={<ProductScreen />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
