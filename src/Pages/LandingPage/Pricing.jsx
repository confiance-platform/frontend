// Pricing Section Component
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "Forever",
    description: "Perfect for getting started with investing",
    features: [
      "Access to basic investment products",
      "Portfolio tracking",
      "Transaction history",
      "Email support",
      "Mobile app access",
    ],
    featured: false,
    buttonText: "Get Started",
    buttonVariant: "outline-primary",
  },
  {
    name: "Premium",
    price: "$29",
    period: "/month",
    description: "For serious investors who want more",
    features: [
      "All Basic features",
      "Advanced analytics & reports",
      "Priority support",
      "Investment recommendations",
      "Unlimited transactions",
      "Expert consultations",
    ],
    featured: true,
    buttonText: "Start Free Trial",
    buttonVariant: "primary",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact us",
    description: "For institutional investors and businesses",
    features: [
      "All Premium features",
      "Dedicated account manager",
      "Custom integrations",
      "API access",
      "White-label options",
      "SLA guarantees",
    ],
    featured: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline-primary",
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section py-5" id="pricing">
      <div className="container">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
              Pricing Plans
            </span>
            <h2 className="display-5 fw-bold mb-3">
              Choose the <span className="text-primary">Perfect Plan</span>
            </h2>
            <p className="lead text-muted col-lg-8 mx-auto">
              Start free and upgrade as you grow. All plans include our core
              features to help you succeed.
            </p>
          </motion.div>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`card h-100 border-0 shadow-sm rounded-4 ${
                  plan.featured ? "border-primary featured-plan" : ""
                }`}
              >
                {plan.featured && (
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-primary px-3 py-2">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="card-body p-4 d-flex flex-column">
                  <h4 className="fw-bold mb-2">{plan.name}</h4>
                  <p className="text-muted small mb-4">{plan.description}</p>

                  <div className="mb-4">
                    <h2 className="display-4 fw-bold text-primary mb-0">
                      {plan.price}
                      {plan.period !== "Forever" &&
                        plan.period !== "Contact us" && (
                          <span className="fs-5 text-muted fw-normal">
                            {plan.period}
                          </span>
                        )}
                    </h2>
                    {(plan.period === "Forever" ||
                      plan.period === "Contact us") && (
                      <small className="text-muted">{plan.period}</small>
                    )}
                  </div>

                  <ul className="list-unstyled mb-4 flex-grow-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-start mb-3">
                        <FaCheck className="text-success me-2 mt-1 flex-shrink-0" />
                        <span className="text-muted small">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/auth/sign-up"
                    className={`btn btn-${plan.buttonVariant} w-100 py-3 rounded-pill`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className="text-center mt-5">
          <p className="text-muted">
            Have questions about our plans?{" "}
            <a
              href="#faq"
              className="text-primary text-decoration-none fw-bold"
            >
              Check our FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
