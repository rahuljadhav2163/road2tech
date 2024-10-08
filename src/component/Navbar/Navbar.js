  import React, { useState, useEffect } from 'react';
  import { Link } from 'react-scroll';
  import { Navbar, Nav, Container } from 'react-bootstrap';
  import { Phone } from 'lucide-react';
  import './Navbar.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js';
  import logo from "./lgg.png"

  function CustomNavbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);

    return (
      <Navbar
        expand="lg"
        className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <img
              src={logo}
              width="auto"
              className="d-inline-block align-top logos lg"
              alt="E-Learning Logo"
            />
            <p className="name-web ms-3 mb-0">Road2Tech</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link to="courses" smooth={true} duration={500} className="nav-link" style={{cursor: 'pointer'}}>Courses</Link>
              <Link to="development" smooth={true} duration={500} className="nav-link" style={{cursor: 'pointer'}}>Development</Link>
              <Link to="contact" smooth={true} duration={500} className="nav-link" style={{cursor: 'pointer'}}>Contact Us</Link>
              <div className="phone-number d-flex align-items-center ms-3">
                <Phone size={18} className="me-2" />
                <span>+91 7559412440</span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default CustomNavbar;