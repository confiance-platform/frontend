// Project Overview Section Component
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const highlights = [
  "Diversified investment portfolio with mutual funds, stocks, and bonds",
  "Real-time portfolio tracking and performance analytics",
  "Secure transactions with bank-level encryption",
  "Role-based access control for enhanced security",
  "Comprehensive transaction history and reporting",
  "Expert financial guidance and support",
];

const Overview = () => {
  return (
    <section className="overview-section py-5" id="overview">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
                About Platform
              </span>
              <h2 className="display-5 fw-bold mb-4">
                Your Trusted Partner in{" "}
                <span className="text-primary">Wealth Management</span>
              </h2>
              <p className="lead text-muted mb-4">
                Confiance is a comprehensive microservices-based financial
                investment platform designed to help you achieve your financial
                goals with confidence and security.
              </p>

              <ul className="list-unstyled mb-4">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="d-flex align-items-start mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="text-success me-3 mt-1 flex-shrink-0" />
                    <span className="text-muted">{highlight}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="d-flex gap-3">
                <a
                  href="#features"
                  className="btn btn-primary px-4 py-2 rounded-pill"
                >
                  Explore Features
                </a>
                <a
                  href="#pricing"
                  className="btn btn-outline-primary px-4 py-2 rounded-pill"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="row g-4"
            >
              {/* Card 1 */}
              <div className="col-6">
                <div className="card border-0 shadow-sm bg-primary text-white rounded-4">
                  <div className="card-body p-4 text-center">
                    <h2 className="display-4 fw-bold mb-2">10K+</h2>
                    <p className="mb-0 opacity-75">Active Users</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-6">
                <div className="card border-0 shadow-sm bg-success text-white rounded-4">
                  <div className="card-body p-4 text-center">
                    <h2 className="display-4 fw-bold mb-2">$5M+</h2>
                    <p className="mb-0 opacity-75">Assets Under Management</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-6">
                <div className="card border-0 shadow-sm bg-warning text-white rounded-4">
                  <div className="card-body p-4 text-center">
                    <h2 className="display-4 fw-bold mb-2">99.9%</h2>
                    <p className="mb-0 opacity-75">Uptime Guarantee</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-6">
                <div className="card border-0 shadow-sm bg-info text-white rounded-4">
                  <div className="card-body p-4 text-center">
                    <h2 className="display-4 fw-bold mb-2">24/7</h2>
                    <p className="mb-0 opacity-75">Customer Support</p>
                  </div>
                </div>
              </div>

              {/* Large Card */}
              <div className="col-12">
                <div className="card border-0 shadow-lg rounded-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Platform Architecture</h5>
                    <p className="text-muted small mb-3">
                      Built with cutting-edge microservices architecture
                      ensuring scalability, reliability, and performance.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-primary-subtle text-primary">
                        Spring Boot
                      </span>
                      <span className="badge bg-success-subtle text-success">
                        React 18
                      </span>
                      <span className="badge bg-info-subtle text-info">
                        MySQL
                      </span>
                      <span className="badge bg-warning-subtle text-warning">
                        Redis
                      </span>
                      <span className="badge bg-danger-subtle text-danger">
                        JWT Auth
                      </span>
                      <span className="badge bg-purple-subtle text-purple">
                        Docker
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
