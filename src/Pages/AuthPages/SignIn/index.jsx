// Sign In Page with Backend Integration
import React, { useState } from "react";
import { Col, Container, Row, Alert } from "reactstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../../../context/AuthContext";

// Validation Schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      const result = await login(data.email, data.password);

      if (result.success) {
        // Get redirect path from location state
        const from = location.state?.from?.pathname;
        const userRole = result.data?.user?.role;

        // If there's a specific "from" path, go there
        if (from && from !== "/") {
          navigate(from, { replace: true });
        } else {
          // Role-based redirect to appropriate dashboard
          if (userRole === 'ROLE_SUPER_ADMIN') {
            navigate("/dashboard/super-admin", { replace: true });
          } else if (userRole === 'ROLE_ADMIN') {
            navigate("/dashboard/admin", { replace: true });
          } else {
            navigate("/dashboard/user", { replace: true });
          }
        }
      } else {
        setError(
          result.message || "Login failed. Please check your credentials.",
        );
      }
    } catch (err) {
      setError(
        err.message || "An error occurred during login. Please try again.",
      );
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
                      src="../assets/images/login/04.png"
                      alt="Login"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} className="form-contentbox">
                <div className="form-container">
                  <form className="app-form" onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col xs={12}>
                        <div className="mb-5 text-center text-lg-start">
                          <h2 className="text-primary f-w-600">
                            Welcome to Confiance!
                          </h2>
                          <p>Sign in with your email and password</p>
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
                            placeholder="Enter your email"
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

                      {/* Password Field */}
                      <Col xs={12}>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <Link
                            to="/auth/password-reset"
                            className="link-primary float-end"
                          >
                            Forgot Password?
                          </Link>
                          <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Enter your password"
                            id="password"
                            {...register("password")}
                          />
                          {errors.password && (
                            <div className="invalid-feedback">
                              {errors.password.message}
                            </div>
                          )}
                        </div>
                      </Col>

                      {/* Remember Me */}
                      <Col xs={12}>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
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
                                Signing in...
                              </>
                            ) : (
                              "Sign In"
                            )}
                          </button>
                        </div>
                      </Col>

                      {/* Sign Up Link */}
                      <Col xs={12}>
                        <div className="text-center text-lg-start mb-3">
                          Don't have an account?{" "}
                          <Link
                            to="/auth/sign-up"
                            className="link-primary text-decoration-underline"
                          >
                            Sign up
                          </Link>
                        </div>
                      </Col>

                      {/* Demo Credentials */}
                      <Col xs={12}>
                        <div className="alert alert-info text-sm">
                          <strong>Demo Credentials:</strong>
                          <ul className="mb-0 mt-2">
                            <li>
                              <strong>Super Admin:</strong>{" "}
                              superadmin@confiance.com / Admin@123
                            </li>
                            <li>
                              <strong>Admin:</strong> admin@confiance.com /
                              Admin@123
                            </li>
                          </ul>
                        </div>
                      </Col>

                      {/* Divider */}
                      <div className="app-divider-v justify-content-center">
                        <p>Or sign in with</p>
                      </div>

                      {/* Social Login Buttons */}
                      <Col xs={12}>
                        <div className="text-center">
                          <button
                            type="button"
                            className="btn btn-facebook icon-btn b-r-22 m-1"
                            disabled
                          >
                            <i className="ti ti-brand-facebook text-white"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-gmail icon-btn b-r-22 m-1"
                            disabled
                          >
                            <i className="ti ti-brand-google text-white"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-github icon-btn b-r-22 m-1"
                            disabled
                          >
                            <i className="ti ti-brand-github text-white"></i>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
