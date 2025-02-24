import "./product.css";
import GitButton from "../misc/button/gitbutton/GitButton";
import WebButton from "../misc/button/webbutton/WebButton";

const Product = ({ img, deployedWebsiteLink, githubLink , techUsed}) => {
  return (
    <div className="mb-8  rounded-xl bg-red-200">
      <div className="p bg-white">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={deployedWebsiteLink} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </div>
      <div>
        <h1 className="font-sans font-bold text-white p-0 m-0">Tech Used : {techUsed}</h1>
      </div>
      <div className=" flex sm:pt-1 pb-2 sm:mx-3 justify-evenly gap-2">
        <GitButton githubLink={githubLink} />
        <WebButton deployedWebsiteLink={deployedWebsiteLink} />
      </div>
    </div>
  );
};

export default Product;
