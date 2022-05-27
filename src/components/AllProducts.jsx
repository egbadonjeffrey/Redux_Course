import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { allProducts } from "../redux/actions/product-actions";

import axios from "axios";
import "../App.css";

const AllProducts = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const getAllProducts = async () => {
    const result = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    // console.log(result.data);
    dispatch(allProducts(result.data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log("From store: ", products);

  return (
    <div className="all__products">
      <ProductComponent />
    </div>
  );
};

export default AllProducts;
