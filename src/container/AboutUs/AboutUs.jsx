import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G_overlay" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Welcome to Géritch! At Géritch, we believe that dining is not just
            about food; it’s about creating memorable experiences. Nestled in the
            heart of Delhi, our restaurant combines culinary artistry with a warm,
            inviting atmosphere. We take pride in offering a unique dining
            experience where every meal is a celebration of flavor, tradition, and
            innovation.
          </p>
          <button type="button" className="custom__button" onClick={scrollToAbout}>
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Founded in 1990, Géritch began with a simple vision: to bring the
            rich, diverse flavors of Delhi to our community. Our journey started
            with a passion for food and a dedication to quality, and over the
            years, we’ve grown into a beloved dining destination for locals and
            visitors alike.
          </p>
          <button type="button" className="custom__button" onClick={scrollToAbout}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
