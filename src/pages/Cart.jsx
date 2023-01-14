import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);
  return (
    <section>
      <div className="cart-items">
        {cartItems.length == 0 ? (
          <h2>Your Card Is Empty</h2>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>SubPrice</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {cartItems.map((cartItem) => {
                return (
                  <tbody key={cartItem.id}>
                    <tr>
                      <td>
                        <img src={cartItem.image} className="item-img" />
                      </td>
                      <td>{cartItem.title}</td>
                      <td>
                        {cartItem.price}x{cartItem.quantity}
                      </td>
                      <td>{cartItem.price * cartItem.quantity}</td>
                      <td>
                        <button
                          onClick={() => dispatch(removeFromCart(cartItem))}
                          className="delete-item "
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <h3 className="total">Total Price : {totalPrice.toFixed(2)}</h3>
          </>
        )}

        {cartItems.length > 0 && (
          <button className="clear-all" onClick={() => dispatch(clearAll())}>
            Clear All
          </button>
        )}
      </div>
    </section>
  );
};

export default Cart;
