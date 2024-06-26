import React, { useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Adjust block as needed
    }
  };

  // Ensure smooth scrolling function is ready after mount
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        scrollToSection(sectionId);
      }
    };

    // Handle initial navigation on load
    handleNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleNavigation);

    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
        <li className="p__opensans"><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
        <li className="p__opensans"><a href="#menu" onClick={() => scrollToSection('menu')}>Menu</a></li>
        <li className="p__opensans"><a href="#awards" onClick={() => scrollToSection('awards')}>Awards</a></li>
        <li className="p__opensans"><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => { scrollToSection('home'); setToggleMenu(false); }}>Home</a></li>
              <li><a href="#about" onClick={() => { scrollToSection('about'); setToggleMenu(false); }}>About</a></li>
              <li><a href="#menu" onClick={() => { scrollToSection('menu'); setToggleMenu(false); }}>Menu</a></li>
              <li><a href="#awards" onClick={() => { scrollToSection('awards'); setToggleMenu(false); }}>Awards</a></li>
              <li><a href="#contact" onClick={() => { scrollToSection('contact'); setToggleMenu(false); }}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
