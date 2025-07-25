import Profile from "../../assets/home.png";
import { Link } from "react-router";
import { RiArrowRightLine } from "react-icons/ri";
import "./home.css";

const home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />
      <div className="home-content">
        <h1 className="home-title">
          <span> i am Nitkarsh Upadhyay </span> <br /> Web Developer
        </h1>
        <p className="home-description">
          Passionate Software Engineer specializing in modern web development.
          Skilled in building responsive, user-focused web applications.
          Committed to clean code, performance, and continuous learning.
        </p>
        <Link to="/about" className="button">
          More about me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>
      </div>
      <div className="color-block"></div>
    </section>
  );
};
export default home;
