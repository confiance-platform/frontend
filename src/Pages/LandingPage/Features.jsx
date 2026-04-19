// Features Section Component
import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaShieldAlt,
  FaWallet,
  FaMobileAlt,
  FaUserShield,
  FaChartPie,
  FaBell,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "Smart Investment",
    description:
      "AI-powered investment recommendations tailored to your financial goals and risk appetite.",
    color: "primary",
  },
  {
    icon: <FaShieldAlt />,
    title: "Bank-Level Security",
    description:
      "256-bit encryption and multi-factor authentication to keep your assets safe and secure.",
    color: "success",
  },
  {
    icon: <FaWallet />,
    title: "Portfolio Management",
    description:
      "Track and manage all your investments in one place with real-time updates.",
    color: "warning",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Access",
    description:
      "Invest on-the-go with our responsive platform accessible from any device.",
    color: "info",
  },
  {
    icon: <FaUserShield />,
    title: "Role-Based Access",
    description:
      "Granular permission controls for users, admins, and super admins.",
    color: "danger",
  },
  {
    icon: <FaChartPie />,
    title: "Analytics & Reports",
    description:
      "Comprehensive insights and detailed reports on your investment performance.",
    color: "purple",
  },
  {
    icon: <FaBell />,
    title: "Real-Time Alerts",
    description:
      "Get instant notifications about market changes and investment opportunities.",
    color: "teal",
  },
  {
    icon: <FaRocket />,
    title: "Fast Transactions",
    description:
      "Lightning-fast transaction processing with instant confirmations.",
    color: "orange",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="features-section py-5" id="features">
      <div className="container">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
              Features
            </span>
            <h2 className="display-5 fw-bold mb-3">
              Everything You Need to{" "}
              <span className="text-primary">Succeed</span>
            </h2>
            <p className="lead text-muted col-lg-8 mx-auto">
              Our platform provides all the tools and features you need to
              manage your investments effectively and grow your wealth.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6"
              variants={itemVariants}
            >
              <div className="feature-card h-100">
                <div className="card border-0 shadow-sm h-100 hover-lift">
                  <div className="card-body p-4 text-center">
                    <div
                      className={`feature-icon bg-${feature.color}-subtle text-${feature.color} rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                    >
                      {feature.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="text-muted small mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
