import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import PadgeTransition from "../../components/PadgeTransition";
import Product from "../../components/slideProducts/Product";

function Favorites() {
  const data = useContext(CartContext);
  console.log("Context:", data);
  const { favorites } = useContext(CartContext);
  return (
    <PadgeTransition>
      <div className="category_products favoritesPadge">
        <div className="container">
          <div className="top_slide">
            <h2>Your Favorites</h2>
          </div>

          {favorites.length === 0 ? (
            <p>No Favorites Yet.</p>
          ) : (
            <div className="products">
              {favorites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </PadgeTransition>
  );
}

export default Favorites;
