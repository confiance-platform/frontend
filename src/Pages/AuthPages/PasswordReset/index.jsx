// Password Reset Page with Backend Integration
import React, { useState, useEffect } from "react";
import { Col, Container, Row, Alert } from "reactstrap";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { authService } from "@/Services/authService";

// Validation Schema
const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const PasswordReset = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setIsValidating(false);
        setError("No reset token provided. Please request a new password reset link.");
        return;
      }

      try {
        const result = await authService.verifyResetToken(token);
        if (result.success) {
          setTokenValid(true);
        } else {
          setError(result.message || "This reset link has expired or is invalid. Please request a new one.");
        }
      } catch (err) {
        setError("This reset link has expired or is invalid. Please request a new one.");
      } finally {
        setIsValidating(false);
      }
    };

    validateToken();
  }, [token]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      const result = await authService.resetPassword(
        token,
        data.newPassword,
        data.confirmPassword
      );

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.message || "Failed to reset password. Please try again.");
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state while validating token
  if (isValidating) {
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
                        alt="Reset Password"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="form-contentbox">
                  <div className="form-container">
                    <Link to="/" className="d-inline-flex align-items-center text-muted mb-3 text-decoration-none">
                      <i className="ti ti-arrow-left me-2"></i>
                      Back to Home
                    </Link>
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary mb-3" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="text-muted">Validating reset link...</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sign-in-bg">
      <div className="app-wrapper d-block">
        <div className="main-container">
          <Container>
            <Row className="sign-in-content-bg">
              <Col lg={6} className="image-contentbox d-none d-lg-block">
                <div className="form-container">
                  <div className="signup-content mt-4">
                    <span>
                      <img
                        src="../assets/images/logo/1.png"
                        alt="Confiance"
                        className="img-fluid"
                      />
                    </span>
                  </div>

                  <div className="signup-bg-img">
                    <img
                      src="../assets/images/login/03.png"
                      alt="Reset Password"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} className="form-contentbox">
                <div className="form-container">
                  <Link to="/" className="d-inline-flex align-items-center text-muted mb-3 text-decoration-none">
                    <i className="ti ti-arrow-left me-2"></i>
                    Back to Home
                  </Link>
                  {success ? (
                    // Success State
                    <div className="text-center">
                      <div className="mb-4">
                        <i className="ti ti-circle-check text-success" style={{ fontSize: "4rem" }}></i>
                      </div>
                      <h2 className="text-primary f-w-600 mb-3">Password Reset Successful!</h2>
                      <p className="text-muted mb-4">
                        Your password has been successfully reset. You can now sign in with your new password.
                      </p>
                      <Link to="/auth/sign-in" className="btn btn-primary w-100">
                        Sign In Now
                      </Link>
                    </div>
                  ) : !tokenValid ? (
                    // Invalid Token State
                    <div className="text-center">
                      <div className="mb-4">
                        <i className="ti ti-alert-circle text-danger" style={{ fontSize: "4rem" }}></i>
                      </div>
                      <h2 className="text-primary f-w-600 mb-3">Invalid Reset Link</h2>
                      <Alert color="danger" className="mb-4">
                        {error}
                      </Alert>
                      <div className="d-flex flex-column gap-2">
                        <Link to="/auth/forgot-password" className="btn btn-primary">
                          Request New Reset Link
                        </Link>
                        <Link to="/auth/sign-in" className="btn btn-outline-primary">
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
                            <h2 className="text-primary f-w-600">Reset Your Password</h2>
                            <p>Create a new secure password for your account</p>
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

                        {/* New Password Field */}
                        <Col xs={12}>
                          <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">
                              New Password
                            </label>
                            <div className="position-relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                className={`form-control ${errors.newPassword ? "is-invalid" : ""}`}
                                placeholder="Enter new password"
                                id="newPassword"
                                {...register("newPassword")}
                              />
                              <button
                                type="button"
                                className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ border: "none", background: "none" }}
                              >
                                <i className={`ti ti-eye${showPassword ? "-off" : ""}`}></i>
                              </button>
                              {errors.newPassword && (
                                <div className="invalid-feedback">
                                  {errors.newPassword.message}
                                </div>
                              )}
                            </div>
                            <small className="text-muted">
                              At least 8 characters with uppercase, lowercase, number, and special character
                            </small>
                          </div>
                        </Col>

                        {/* Confirm Password Field */}
                        <Col xs={12}>
                          <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">
                              Confirm Password
                            </label>
                            <div className="position-relative">
                              <input
                                type={showConfirmPassword ? "text" : "password"}
                                className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                                placeholder="Confirm new password"
                                id="confirmPassword"
                                {...register("confirmPassword")}
                              />
                              <button
                                type="button"
                                className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-muted"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                style={{ border: "none", background: "none" }}
                              >
                                <i className={`ti ti-eye${showConfirmPassword ? "-off" : ""}`}></i>
                              </button>
                              {errors.confirmPassword && (
                                <div className="invalid-feedback">
                                  {errors.confirmPassword.message}
                                </div>
                              )}
                            </div>
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
                                  Resetting Password...
                                </>
                              ) : (
                                "Reset Password"
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

export default PasswordReset;
