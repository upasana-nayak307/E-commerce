import ProductCard from "../components/ProductCard";
import "./ProductGrid.css";
import { ProductContext } from "../context/ProductContext";
import { useContext} from "react";

const ProductGrid = () => {
  const { products } = useContext(ProductContext);
  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="grid-header">
          <div>
            <p className="grid-subtitle">Curated Selection</p>
            <h2 className="grid-title">New Arrivals</h2>
          </div>
          {/* <button className="view-all-btn">View All</button> */}
        </div>

        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;