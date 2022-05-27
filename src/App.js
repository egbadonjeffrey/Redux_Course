import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllProducts from "./components/AllProducts";
import PageNotFound from "./components/PageNotFound";
import ProductDetail from "./components/ProductDetail";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route exact path="/" element={<AllProducts />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
