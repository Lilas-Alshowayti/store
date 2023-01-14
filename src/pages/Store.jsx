import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice.js";
import { getProducts } from "../redux/productSlice.js";

const Store = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section>
      <div className="products">
        {products.map((product) => {
          return (
            <div className="single-product" key={product.id}>
              <div className="img-container">
                <img src={product.image} />
              </div>

              <div className="product-head">
                <h4 className="product-title">{product.title}</h4>
                <p className="price">{product.price}$</p>
              </div>

              <p className="product-desc">
                {product.description.slice(0, 200)}
              </p>
              <button
                className="add-to-cart"
                onClick={() => dispatch(addToCart(product))}
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Store;
