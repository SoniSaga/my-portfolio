import Link from "next/link";
import Image from "next/image";
import ConnectButton from "@/components/misc/button/connectbutton/ConnectButton";
import SocialMedia from "@/components/misc/socialmedia/SocialMedia";
import DirectContact from "@/components/directconnect/DirectConnect";

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#faebd7] h-full py-12 items-center justify-center">
      <div className="w-[100%] sm:w-[20%] flex justify-center items-center  pb-0 sm:pb-16">
        <h1 className="text-xl sm:text-9xl font-bold w-auto">Shall we ?</h1>
      </div>

      <div className="flex flex-col sm:w-[55%] sm:px-40">
        <p className="p-4 sm:px-0">
          I work with businesses to create modern, high-performance, resp-onsive
          sites with clean code that drive growth and enhance user experiences.
          Want to work together?
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 sm:mt-4">
          <ConnectButton
            imagePath={"./button/email.png"}
            href={`mailto:${"shantanusoni979@gmail.com"}`}
            buttonText={"Email Me!!"}
          />
          <ConnectButton
            imagePath={"./button/whatsapp.png"}
            href={"http://wa.me/919110403077"}
            buttonText={"What's App Me!!"}
          />
        </div>
        <div className="flex gap-6 p-2 mt-4 items-center justify-center">
          <SocialMedia
            href={"https://github.com/SoniSaga"}
            src={"./socialmedia/github.png"}
            alt={"Github"}
          />

          <SocialMedia
            href={"https://www.linkedin.com/in/shantanu-soni-8b2a37342/"}
            src={"./socialmedia/linkedin.png"}
            alt={"Linkdin"}
          />
          <SocialMedia
            href={"https://x.com/SSoni37727"}
            src={"./socialmedia/twitter.png"}
            alt={"Twitter"}
          />
        </div>
        <div className="flex flew-row justify-center">
          <DirectContact />
        </div>
      </div>
    </div>
  );
};

export default Contact;
