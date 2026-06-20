import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import BottomHeader from "./components/header/BottomHeader";
import TopHeader from "./components/header/TopHeader";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./page/Cart/Cart";
import CategoryPadge from "./page/CategoryPadge/CategoryPadge";
import Favorites from "./page/favorites/Favorites";
import Home from "./page/home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import SearchResults from "./page/SearchResults";

function App() {
  return (
    <div>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPadge />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
