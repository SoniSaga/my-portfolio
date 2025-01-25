import Image from "next/image";
import Link from "next/link";

const ConnectButton = ({ imagePath, buttonText, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="py-4 px-8 bg-slate-700 rounded-3xl text-white flex flex-row gap-2 transition-all duration-300 hover:bg-red-400"
    >
      <Image src={imagePath} width={20} height={2} alt={buttonText}></Image>
      <span>{buttonText}</span>
    </Link>
  );
};

export default ConnectButton;
