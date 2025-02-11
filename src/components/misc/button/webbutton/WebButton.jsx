import Link from "next/link";
import "./webbutton.css";

const WebButton = ({ deployedWebsiteLink }) => {
  return (
    <>
      <Link
        href={deployedWebsiteLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="web-button">Deployed Web</div>
      </Link>
    </>
  );
};

export default WebButton;
