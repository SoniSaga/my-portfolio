import Image from "next/image";

const DirectConnect = () => {
  return (
    <div className="flex flex-col text-xs gap-1 mt-4">
      <div className="flex flex-row justify-start items-center gap-2">
        <Image
          src={"./directcontact/email.png"}
          width={20}
          height={20}
          alt="Email Id"
        ></Image>
        <span>{"shantanusoni979@gmail.com"}</span>
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <Image
          src={"./directcontact/phone.png"}
          width={20}
          height={20}
          alt="Phone Number"
        ></Image>
        <span>{"+91 9110403077"}</span>
      </div>
    </div>
  );
};

export default DirectConnect;
