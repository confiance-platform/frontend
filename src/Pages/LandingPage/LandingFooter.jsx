// Landing Page Footer Component
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="landing-footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 pb-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-3">Confiance</h4>
            <p className="text-white-50 mb-3">
              Your trusted partner in wealth management. Build, grow, and
              protect your financial future with confidence.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Platform</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <Link to="/auth/sign-up">Get Started</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">API Reference</a>
              </li>
              <li>
                <a href="#">Support Center</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/other/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/other/terms-condition">Terms of Service</Link>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Compliance</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Contact</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="mailto:support@confiance.com">Support</a>
              </li>
              <li>
                <a href="mailto:sales@confiance.com">Sales</a>
              </li>
              <li>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <Link to="/auth/sign-in">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Bar */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-white-50 small mb-0">
              © {new Date().getFullYear()} Confiance Financial Platform. All
              rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-white-50 small mb-0">
              Built with <span className="text-danger">❤</span> using React &
              Spring Boot
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
