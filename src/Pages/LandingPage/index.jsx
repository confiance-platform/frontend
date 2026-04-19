// Main Landing Page Component
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import LandingNavbar from "./LandingNavbar";
import Hero from "./Hero";
import Features from "./Features";
import Overview from "./Overview";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import LandingFooter from "./LandingFooter";
import "./landing.css";

const LandingPage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Confiance - Financial Investment Platform</title>
        <meta
          name="description"
          content="Grow your wealth with Confiance. A comprehensive financial investment platform for managing investments, tracking portfolios, and achieving financial goals."
        />
        <meta
          name="keywords"
          content="investment, portfolio management, financial planning, wealth management, mutual funds, stocks, bonds"
        />
      </Helmet>

      <div className="landing-page">
        <LandingNavbar />
        <Hero />
        <Features />
        <Overview />
        <Pricing />
        <FAQ />
        <LandingFooter />
      </div>
    </>
  );
};

export default LandingPage;
