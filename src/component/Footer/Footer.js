import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">Road2Tech</h2>
          <p>
            We are dedicated to providing high-quality online education to learners worldwide.
            Join us on our mission to empower minds and inspire futures.
          </p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
         
            <li><a href="/">Courses</a></li>
            <li><a href="/about">Devolopment</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-phone"></i> &nbsp; +91 95270 91856
          </p>
          <p>
            <i className="fas fa-phone"></i> &nbsp; +91 75594 12440
          </p>
          <p>
            <i className="fas fa-envelope"></i> &nbsp; info@elearning.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> &nbsp; 123- karvenagar, Pune City - 412307
          </p>
        </div>
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Road2Tech | Designed by Rahul Jadhav
      </div>
    </footer>
  );
};

export default Footer;