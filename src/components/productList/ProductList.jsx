import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data/data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolio Highlights</h1>
        <p className="pl-desc">
          Discover a showcase of my recent projects. Have an idea in mind? Let’s
          connect and make it a reality together!
        </p>
      </div>
      <div className="pl-list ">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
