import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaUserPlus } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BottomHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsCategoryOpen(false);
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="btm_header">
      <div className="container">
        <nav className="nav">
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <p>Browse Category</p>
              <MdOutlineArrowDropDown />
            </div>
            <div
              className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}
            >
              {categories.map((category) => (
                <Link key={category.slug} to={`category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop nav links */}
          <ul className="nav_links">
            {NavLinks.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sign_regs_icon">
          <Link to="/">
            <PiSignInBold />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>

          {/* Hamburger button (mobile only) */}
          <button
            className="nav-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`mobile_overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-in mobile menu */}
      <div className={`mobile_menu ${isMenuOpen ? "active" : ""}`}>
        <button
          className="mobile_menu_close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <ul className="mobile_nav_links">
          {NavLinks.map((item) => (
            <li
              key={item.link}
              className={location.pathname === item.link ? "active" : ""}
            >
              <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile_menu_footer">
          <Link to="/" className="mobile_menu_action">
            <PiSignInBold /> Sign In
          </Link>
          <Link to="/" className="mobile_menu_action">
            <FaUserPlus /> Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
