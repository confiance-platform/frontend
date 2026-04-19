// Hero Section Component
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChartLine, FaShieldAlt, FaUserFriends } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section position-relative overflow-hidden">
      {/* Background Gradient */}
      <div className="hero-bg-gradient position-absolute w-100 h-100"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center min-vh-100 py-5">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge bg-primary-gradient px-3 py-2 mb-3 fs-6">
                <FaShieldAlt className="me-2" />
                Secure & Trusted Platform
              </span>

              <h1 className="display-3 fw-bold mb-4 text-dark">
                Grow Your Wealth with
                <span className="text-primary d-block">Confiance</span>
              </h1>

              <p className="lead text-muted mb-4 fs-5">
                A comprehensive financial investment platform that helps you
                manage your investments, track your portfolio, and achieve your
                financial goals with confidence.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link
                  to="/auth/sign-up"
                  className="btn btn-primary btn-lg px-4 py-3 rounded-pill"
                >
                  Get Started Free
                  <i className="fa fa-arrow-right ms-2"></i>
                </Link>
                <Link
                  to="/auth/sign-in"
                  className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill"
                >
                  Sign In
                </Link>
              </div>

              {/* Stats */}
              <div className="row g-4 mt-4">
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-primary mb-1">$5M+</h3>
                    <p className="text-muted small mb-0">Assets Managed</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-primary mb-1">10K+</h3>
                    <p className="text-muted small mb-0">Active Users</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <h3 className="fw-bold text-primary mb-1">15%</h3>
                    <p className="text-muted small mb-0">Avg. Returns</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="position-relative"
            >
              {/* Main Card */}
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">Your Portfolio</h5>
                  <div className="mb-4">
                    <small className="text-muted">Total Balance</small>
                    <h2 className="fw-bold text-success mb-0">$125,450.00</h2>
                    <small className="text-success">
                      <i className="fa fa-arrow-up me-1"></i>
                      +12.5% this month
                    </small>
                  </div>

                  {/* Progress Bars */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="small">Mutual Funds</span>
                      <span className="small fw-bold">45%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="small">Stocks</span>
                      <span className="small fw-bold">30%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-0">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="small">Bonds</span>
                      <span className="small fw-bold">25%</span>
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <motion.div
                className="position-absolute card border-0 shadow rounded-3"
                style={{
                  top: "20px",
                  right: "-50px",
                  width: "180px",
                  zIndex: 1,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="card-body p-3 text-center">
                  <div className="rounded-circle bg-success-subtle d-inline-flex p-3 mb-2">
                    <FaChartLine className="text-success fs-4" />
                  </div>
                  <h6 className="fw-bold mb-1">High Returns</h6>
                  <small className="text-muted">Up to 18% ROI</small>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                className="position-absolute card border-0 shadow rounded-3"
                style={{
                  bottom: "20px",
                  left: "-50px",
                  width: "180px",
                  zIndex: 1,
                }}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="card-body p-3 text-center">
                  <div className="rounded-circle bg-primary-subtle d-inline-flex p-3 mb-2">
                    <FaUserFriends className="text-primary fs-4" />
                  </div>
                  <h6 className="fw-bold mb-1">Expert Support</h6>
                  <small className="text-muted">24/7 Available</small>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="position-absolute bottom-0 w-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
