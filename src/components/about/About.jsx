import "./about.css";
import DirectContact from "@/components/directconnect/DirectConnect";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Designer, developer, and tech enthusiast—creating exceptional web and
          app experiences.
        </p>

        <p className="a-desc">
          With over 4.5 years of experience as a Full-Stack Developer, I
          specialize in creating userfriendly websites with quality handwritten
          code. I am equally adept in frontend and backend development. I help
          businesses develop responsive and user-friendly websites and web
          applications.
        </p>
        <div className="flex flex-row justify-center sm:justify-start">
        <DirectContact />
        </div>
      </div>
    </div>
  );
};

export default About;
