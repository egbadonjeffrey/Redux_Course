import React, { useEffect } from "react";
import "./styles/productDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  selectedProduct,
  removeProduct,
} from "../redux/actions/product-actions";
import { selectedProductReducer } from "../redux/reducers/product-reducer";

const ProductDetail = () => {
  const product = useSelector((state) => state.selectedProductReducer);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();

  const dispatch = useDispatch();

  const getProduct = async () => {
    const result = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    // console.log(result.data);
    dispatch(selectedProduct(result.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      getProduct();
    }
    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);

  console.log("From store: ", product);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div> Loading Product... </div>
      ) : (
        <div className="product__detail">
          <div className="productdetail__main">
            <div className="productdetails">
              <div className="product__image">
                <img className="image" src={image} alt={title} />
              </div>
              <div className="product__content">
                <h1>{title}</h1>
                <h2>
                  <a className="price">${price}</a>
                </h2>
                <h3 className="category">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="addToCart">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
