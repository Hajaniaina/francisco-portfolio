import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`header-top-fixed one-page-nav ${
        mobileToggle ? 'menu-open menu-open-desk' : ''
      } ${scrolled ? 'fixed-header' : ''}`}
    >
      <div className="container">
        <div className="logo">
          <Link className="navbar-brand" href="#">
            <img
              className="logo-light"
              title
              alt="Logo"
              src="/images/logo.svg"
            />
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Accueil
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              A propos de moi
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="project"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Projets
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="experiences"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Experiences
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactus"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        {/* Top Menu */}
        <div className="d-flex">
            <a
              href="https://drive.google.com/file/d/1FhS3zhRIfB4vzf2lsHcihRIg3E9fV4k2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"  // Bonne pratique pour la sécurité
              onClick={() => setMobileToggle(false)}
              className="px-btn d-none d-lg-inline-flex"
            >
              Mon CV
            </a>
            <button
              className="toggler-menu d-lg-none"
              onClick={() => setMobileToggle(!mobileToggle)}
            >
              <span />
            </button>
          </div>

        {/* / */}
      </div>
    </div>
  );
}
