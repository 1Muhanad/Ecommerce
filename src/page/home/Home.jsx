import { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import PadgeTransition from "../../components/PadgeTransition";
import SlideProducts from "../../components/slideProducts/slideProducts";
import SlideProductsLoading from "../../components/slideProducts/SlideProductsLoading";
import "./home.css";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "mens-watches",
  "tablets",
  "sports-accessories",
];

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.log("Error Fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <PadgeTransition>
      <div>
        <HeroSlider />

        {loading
          ? categories.map((category) => (
              <SlideProductsLoading key={category} />
            ))
          : categories.map((category) => (
              <SlideProducts
                title={category.replace("-", " ")}
                data={products[category]}
                key={category}
              />
            ))}
      </div>
    </PadgeTransition>
  );
}

export default Home;
