import "./product.css";
import GitButton from "../misc/button/gitbutton/GitButton";
import WebButton from "../misc/button/webbutton/WebButton";

const Product = ({ img, deployedWebsiteLink, githubLink }) => {
  return (
    <div className="mb-8">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={deployedWebsiteLink} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </div>
      <div className=" flex sm:p-2 sm:mx-3 justify-evenly gap-2 ">
        <GitButton githubLink={githubLink} />
        <WebButton deployedWebsiteLink={deployedWebsiteLink} />
      </div>
    </div>
  );
};

export default Product;
