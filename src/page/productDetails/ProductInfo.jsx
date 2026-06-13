import { useContext } from "react";
import toast from "react-hot-toast";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import "./ProductDetails.css";

function ProductInfo({ products }) {
  const { cartItems, addToCart, addToFav, favorites, removeFromFav } =
    useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === products.id);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(products);

    toast.success(
      <div className="toast-wrapper">
        <img src={products.images[0]} alt="" className="toast_img" />

        <div className="toast_content">
          <strong>{products.title}</strong>
          Added to Cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 },
    );
  };

  const isInFav = favorites.some((i) => i.id === products.id);

  const handleAddToFav = () => {
    if (isInFav) {
      removeFromFav(products.id);
      toast.error(`${products.title} Removed From Favorites`);
    } else {
      addToFav(products);
      toast.success(`${products.title} Added To Favorites`);
    }
  };

  return (
    <div className="details_item">
      <h1 className="name">{products.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="price">$ {products.price}</p>

      <h5>
        Availability : <span>{products.availabilityStatus}</span>
      </h5>
      <h5>
        Brand : <span>{products.brand}</span>
      </h5>
      <p className="desc">{products.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only {products.stock} products left in stock</span>
      </h5>
      <button
        onClick={handleAddToCart}
        className={`btn ${isInCart ? "in_cart" : ""}`}
      >
        {isInCart ? "Item In Cart" : "Add to cart"} <TiShoppingCart />
      </button>

      <div className="icons">
        <span
          onClick={() => handleAddToFav()}
          className={`${isInFav ? "in-fav" : ""}`}
        >
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;
