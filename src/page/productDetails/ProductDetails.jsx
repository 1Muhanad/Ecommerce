import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PadgeTransition from "../../components/PadgeTransition";
import ProductImages from "../../components/slideProducts/ProductImages";
import SlideProducts from "../../components/slideProducts/SlideProducts";
import SlideProductsLoading from "../../components/slideProducts/SlideProductsLoading";
import "./ProductDetails.css";
import ProductDetailsLoading from "./ProductDetailsLoading";
import ProductInfo from "./ProductInfo";

function ProductDetails() {
  const { id } = useParams();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  useEffect(() => {
    if (!products) return;
    fetch(`https://dummyjson.com/products/category/${products.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [products?.category]);

  if (!products) return <div>Product Not Found!</div>;

  return (
    <PadgeTransition>
      <div>
        {loading ? (
          <ProductDetailsLoading />
        ) : (
          <div>
            <div className="item_details">
              <div className="container">
                <ProductImages products={products} />

                <ProductInfo products={products} />
              </div>
            </div>

            {loadingRelatedProducts ? (
              <SlideProductsLoading />
            ) : (
              <SlideProducts
                key={products.category}
                data={relatedProducts}
                title={products.category.replace("-", " ")}
              />
            )}
          </div>
        )}
      </div>
    </PadgeTransition>
  );
}

export default ProductDetails;
