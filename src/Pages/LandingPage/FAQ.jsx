// FAQ Section Component
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How secure is my investment data?",
    answer:
      "We use bank-level 256-bit encryption and multi-factor authentication to ensure your data is completely secure. All transactions are encrypted and stored in secure databases with regular backups.",
  },
  {
    question: "What investment options are available?",
    answer:
      "We offer a wide range of investment products including mutual funds, stocks, bonds, fixed deposits, gold, real estate, and cryptocurrency. Each option is carefully curated to match different risk appetites and financial goals.",
  },
  {
    question: "How do I withdraw my investments?",
    answer:
      "Withdrawals can be initiated directly from your dashboard. Processing times vary based on the investment type, but most withdrawals are processed within 1-3 business days. Some investments may have lock-in periods.",
  },
  {
    question: "Is there a minimum investment amount?",
    answer:
      "The minimum investment varies by product. We offer options starting from as low as $1,000 for fixed deposits, while equity investments typically start from $10,000. Check individual product details for specific minimums.",
  },
  {
    question: "What are the fees and charges?",
    answer:
      "Our Basic plan is completely free with standard transaction fees. Premium plans include reduced fees and additional features. There are no hidden charges - all fees are transparently displayed before you invest.",
  },
  {
    question: "Can I track my portfolio performance?",
    answer:
      "Yes! Our platform provides real-time portfolio tracking with detailed analytics, performance charts, ROI calculations, and comprehensive reports. You can access your portfolio 24/7 from any device.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-5" id="faq">
      <div className="container">
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
              FAQ
            </span>
            <h2 className="display-5 fw-bold mb-3">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="lead text-muted col-lg-8 mx-auto">
              Find answers to common questions about our platform, investments,
              and services.
            </p>
          </motion.div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card border-0 shadow-sm rounded-4">
                  <div
                    className="card-header bg-white border-0 p-4 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="fw-bold mb-0">{faq.question}</h6>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-primary" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="card-body pt-0 px-4 pb-4">
                          <p className="text-muted mb-0">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <p className="text-muted mb-3">Still have questions?</p>
          <a
            href="mailto:support@confiance.com"
            className="btn btn-primary px-4 py-2 rounded-pill"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
