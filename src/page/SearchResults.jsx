import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PadgeTransition from "../components/PadgeTransition";
import Product from "../components/slideProducts/Product";
import SlideProductsLoading from "../components/slideProducts/SlideProductsLoading";

function SearchResults() {
  const [result, setResult] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("q");
  const [loading, setLoading] = useState(true);

  console.log(result);
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setResult(data.products || []);
      } catch (error) {
        console.log("Search Error ", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResult();
  }, [query]);

  return (
    <PadgeTransition key={query}>
      <div className="category_products">
        {loading ? (
          <SlideProductsLoading key={query} />
        ) : result.length > 0 ? (
          <div className="container">
            <div className="top_slide">
              <h2>Results For : {query}</h2>
            </div>
            <div className="products">
              {result.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <>
            <br />
            <div className="container">
              <p>No Results Found</p>
            </div>
          </>
        )}
      </div>
    </PadgeTransition>
  );
}

export default SearchResults;
