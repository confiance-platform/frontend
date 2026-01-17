// Forgot Password Page with Backend Integration
import React, { useState } from "react";
import { Col, Container, Row, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authService } from "@/Services/authService";

// Validation Schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
});

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const result = await authService.forgotPassword(data.email);

      if (result.success) {
        setSuccess(true);
        setSubmittedEmail(data.email);
      } else {
        setError(result.message || "Failed to send reset email. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sign-in-bg">
      <div className="app-wrapper d-block">
        <div className="main-container">
          <Container>
            <Row className="sign-in-content-bg">
              <Col lg={6} className="image-contentbox d-none d-lg-block">
                <div className="form-container">
                  <div className="signup-content mt-4">
                    <h2 className="text-primary fw-bold" style={{ fontSize: '2.5rem', letterSpacing: '1px' }}>
                      Confiance
                    </h2>
                  </div>

                  <div className="signup-bg-img">
                    <img
                      src="../assets/images/login/03.png"
                      alt="Forgot Password"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} className="form-contentbox">
                <div className="form-container">
                  {success ? (
                    // Success State
                    <div className="text-center">
                      <div className="mb-4">
                        <i className="ti ti-mail-check text-success" style={{ fontSize: "4rem" }}></i>
                      </div>
                      <h2 className="text-primary f-w-600 mb-3">Check Your Email</h2>
                      <p className="text-muted mb-4">
                        We've sent a password reset link to:
                        <br />
                        <strong>{submittedEmail}</strong>
                      </p>
                      <p className="text-muted small mb-4">
                        If you don't see the email, check your spam folder. The link will expire in 24 hours.
                      </p>
                      <div className="d-flex flex-column gap-2">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() => {
                            setSuccess(false);
                            setSubmittedEmail("");
                          }}
                        >
                          Try a different email
                        </button>
                        <Link to="/auth/sign-in" className="btn btn-primary">
                          Back to Sign In
                        </Link>
                      </div>
                    </div>
                  ) : (
                    // Form State
                    <form className="app-form" onSubmit={handleSubmit(onSubmit)}>
                      <Row>
                        <Col xs={12}>
                          <div className="mb-5 text-center text-lg-start">
                            <h2 className="text-primary f-w-600">Forgot Password?</h2>
                            <p>
                              Enter your email address and we'll send you a link to reset your password.
                            </p>
                          </div>
                        </Col>

                        {/* Error Alert */}
                        {error && (
                          <Col xs={12}>
                            <Alert color="danger" className="mb-3">
                              {error}
                            </Alert>
                          </Col>
                        )}

                        {/* Email Field */}
                        <Col xs={12}>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className={`form-control ${errors.email ? "is-invalid" : ""}`}
                              placeholder="Enter your registered email"
                              id="email"
                              {...register("email")}
                            />
                            {errors.email && (
                              <div className="invalid-feedback">
                                {errors.email.message}
                              </div>
                            )}
                          </div>
                        </Col>

                        {/* Submit Button */}
                        <Col xs={12}>
                          <div className="mb-3">
                            <button
                              type="submit"
                              className="btn btn-primary w-100"
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <>
                                  <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                  Sending...
                                </>
                              ) : (
                                "Send Reset Link"
                              )}
                            </button>
                          </div>
                        </Col>

                        {/* Back to Sign In */}
                        <Col xs={12}>
                          <div className="text-center text-lg-start">
                            Remember your password?{" "}
                            <Link
                              to="/auth/sign-in"
                              className="link-primary text-decoration-underline"
                            >
                              Sign in
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
