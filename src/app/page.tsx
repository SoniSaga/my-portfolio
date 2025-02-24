import { useContext } from "react";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Intro from "@/components/intro/Intro";
import ProductList from "@/components/productList/ProductList";

const Homepage = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default Homepage;
