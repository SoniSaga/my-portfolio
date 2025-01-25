import Link from "next/link";
import Image from "next/image";

const SocialMedia = ({href, src, alt}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} width={40} height={40} alt={alt}></Image>
    </Link>
  );
};

export default SocialMedia;