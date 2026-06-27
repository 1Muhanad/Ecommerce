import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { CartContext } from "../context/CartContext";
import "./header.css";
import SearchBox from "./SearchBox";
function TopHeader() {
  const { cartItems, favorites } = useContext(CartContext);

  return (
    <div className="top_header">
      <div className="container">
        <div className="logo_width">
          <Link to="/">
            <img src={Logo} className="logo" alt="Logo" />{" "}
          </Link>
        </div>
        <div className="header_width search_width">
          <SearchBox />
        </div>

        <div className="header_icons header_width ">
          <div className="icon">
            <Link to="/favorites">
              <FaRegHeart />
              <span className="count">{favorites.length}</span>
            </Link>
          </div>

          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
