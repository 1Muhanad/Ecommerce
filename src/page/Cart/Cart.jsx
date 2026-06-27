import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "../../components/context/CartContext";
import "./Cart.css";
function Cart() {
  const { cartItems, icreaseQuantity, deCreaseQuantity, removeFromCart } =
    useContext(CartContext);

  console.log(cartItems);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="checkout">
      <div className="ordersummary">
        <h1>Order Summary</h1>

        <div className="items">
          {cartItems.length === 0 ? (
            <p className="empty">Your Cart is Empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="item_cart" key={index}>
                <div className="image_name">
                  <div className="image_item">
                    <img src={item.images[0]} alt="image" />
                  </div>

                  <div className="content">
                    <h4>{item.title}</h4>
                    <p className="price_item">$ {item.price}</p>
                    <div className="quantity_control">
                      <button onClick={() => deCreaseQuantity(item.id)}>
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button onClick={() => icreaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="delete_item"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="bottom_summary">
          <div className="shop_table">
            <p>Total :</p>
            <span className="total_checkout">${total.toFixed(2)}</span>
          </div>
          <div className="button_div">
            <button type="submit">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
