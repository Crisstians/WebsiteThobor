import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import './styles/navbar.scss';
import logo from '../../images/logo.png';

gsap.registerPlugin(CSSPlugin);

const Navbar = () => {
  const headerRef = useRef(null);
  const headerTextsRef = useRef(null);
  const headerButtonsRef = useRef([]);
  const headerLogoRef = useRef(null);

  useEffect(() => {
    const onPageLoad = () => {
      const ctx = gsap.context(() => {
        const animationDelay = 0.5;

        // Header animation
        gsap.fromTo(headerRef.current, 
          { opacity: 0, y: -20 }, 
          { opacity: 1, y: 0, duration: 1, delay: animationDelay, ease: "power3.out" });
        
        // Header texts animation
        gsap.from(headerTextsRef.current, {
          opacity: 0,
          y: -20,
          duration: 1,
          delay: animationDelay + 0.2,
          ease: "power3.out"
        });

        // Logo animation
        gsap.from(headerLogoRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          delay: animationDelay + 0.4,
          ease: "power3.out"
        });

        // Header buttons animation with staggered effect
        gsap.from(headerButtonsRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          stagger: 0.15,
          delay: animationDelay + 0.6,
          ease: "power3.out"
        });
      });

      return () => {
        ctx.revert(); // Cleanup GSAP animations on component unmount
      };
    };

    if (document.readyState === "complete") {
      onPageLoad(); // Page already loaded
    } else {
      window.addEventListener("load", onPageLoad); // Wait for page to load
      return () => window.removeEventListener("load", onPageLoad); // Cleanup event listener
    }
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <img id="headerLogo" src={logo} alt="Thobor" ref={headerLogoRef} />
      <div id="headerTexts" ref={headerTextsRef}>
        <div id="headerText">Thobor</div>
        <div className="shadowText" id="headerTextRO">RO068 | 17871</div>
      </div>
      <ul id="headerButtons">
        {[
          { text: 'Acasă', path: '/' },
          { text: 'Roboți', path: '/roboti' },
          { text: 'Departamente', path: '/departamente' },
          { text: 'Aplicații', path: '/aplicatii' },
          { text: 'Blocks', path: '/blocks' }
        ].map(({ text, path }, index) => (
          <li key={index} ref={(el) => (headerButtonsRef.current[index] = el)}>
            <Link to={path} className="headerButton shadowText">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
