import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.productReducer.productList);

  // const product = products[0];

  const allMarkup = products.map((prod) => {
    return (
      <div className="product" key={prod.id}>
        <Link to={`/products/${prod.id}`}>
          <img src={prod.image} alt={prod.title} />
          <hr />
          <div className="content">
            <h3>{prod.title}</h3>
            <p>{prod.price}</p>
            <span>{prod.category}</span>
          </div>
        </Link>
      </div>
    );
  });
  return <>{allMarkup}</>;
};

export default ProductComponent;
