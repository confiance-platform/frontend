// Sign Up Page with Backend Integration
import React, { useState } from "react";
import { Col, Container, Row, Alert } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { userService } from "../../../Services/userService";

// Validation Schema
const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one digit")
      .regex(
        /[@#$%^&+=]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    contactNumber: z
      .string()
      .min(10, "Contact number must be at least 10 digits"),
    country: z.string().min(1, "Country is required"),
    city: z.string().optional(),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const registrationData = {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        contactNumber: data.contactNumber,
        country: data.country,
        city: data.city || "",
      };

      const result = await userService.register(registrationData);

      if (result.success) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/auth/sign-in", { state: { registeredEmail: data.email } });
        }, 2000);
      } else {
        setError(result.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.message ||
          "An error occurred during registration. Please try again.",
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
                      src="../assets/images/login/02.png"
                      alt="Sign Up"
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
                        <div className="mb-4 text-center text-lg-start">
                          <h2 className="text-primary f-w-600">
                            Create Account
                          </h2>
                          <p>Get Started For Free Today!</p>
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

                      {/* Success Alert */}
                      {success && (
                        <Col xs={12}>
                          <Alert color="success" className="mb-3">
                            {success}
                          </Alert>
                        </Col>
                      )}

                      {/* First Name & Last Name */}
                      <Col md={6}>
                        <div className="mb-3">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                            placeholder="Enter your first name"
                            id="firstName"
                            {...register("firstName")}
                          />
                          {errors.firstName && (
                            <div className="invalid-feedback">
                              {errors.firstName.message}
                            </div>
                          )}
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                            placeholder="Enter your last name"
                            id="lastName"
                            {...register("lastName")}
                          />
                          {errors.lastName && (
                            <div className="invalid-feedback">
                              {errors.lastName.message}
                            </div>
                          )}
                        </div>
                      </Col>

                      {/* Email */}
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

                      {/* Contact Number & Country */}
                      <Col md={6}>
                        <div className="mb-3">
                          <label htmlFor="contactNumber" className="form-label">
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            className={`form-control ${errors.contactNumber ? "is-invalid" : ""}`}
                            placeholder="+1234567890"
                            id="contactNumber"
                            {...register("contactNumber")}
                          />
                          {errors.contactNumber && (
                            <div className="invalid-feedback">
                              {errors.contactNumber.message}
                            </div>
                          )}
                        </div>
                      </Col>

                      <Col md={6}>
                        <div className="mb-3">
                          <label htmlFor="country" className="form-label">
                            Country
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.country ? "is-invalid" : ""}`}
                            placeholder="Enter your country"
                            id="country"
                            {...register("country")}
                          />
                          {errors.country && (
                            <div className="invalid-feedback">
                              {errors.country.message}
                            </div>
                          )}
                        </div>
                      </Col>

                      {/* City (Optional) */}
                      <Col xs={12}>
                        <div className="mb-3">
                          <label htmlFor="city" className="form-label">
                            City <span className="text-muted">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your city"
                            id="city"
                            {...register("city")}
                          />
                        </div>
                      </Col>

                      {/* Password & Confirm Password */}
                      <Col md={6}>
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
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

                      <Col md={6}>
                        <div className="mb-3">
                          <label
                            htmlFor="confirmPassword"
                            className="form-label"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                            placeholder="Confirm your password"
                            id="confirmPassword"
                            {...register("confirmPassword")}
                          />
                          {errors.confirmPassword && (
                            <div className="invalid-feedback">
                              {errors.confirmPassword.message}
                            </div>
                          )}
                        </div>
                      </Col>

                      {/* Password Requirements */}
                      <Col xs={12}>
                        <div className="alert alert-info small mb-3">
                          <strong>Password must contain:</strong>
                          <ul className="mb-0 mt-1">
                            <li>At least 8 characters</li>
                            <li>One uppercase letter, one lowercase letter</li>
                            <li>
                              One digit and one special character (@#$%^&+=)
                            </li>
                          </ul>
                        </div>
                      </Col>

                      {/* Accept Terms */}
                      <Col xs={12}>
                        <div className="mb-3">
                          <div className="form-check">
                            <input
                              className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""}`}
                              type="checkbox"
                              id="acceptTerms"
                              {...register("acceptTerms")}
                            />
                            <label
                              className="form-check-label text-secondary"
                              htmlFor="acceptTerms"
                            >
                              I accept the{" "}
                              <Link
                                to="/other/terms-condition"
                                className="link-primary"
                              >
                                Terms & Conditions
                              </Link>
                            </label>
                            {errors.acceptTerms && (
                              <div className="invalid-feedback d-block">
                                {errors.acceptTerms.message}
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
                                Creating Account...
                              </>
                            ) : (
                              "Sign Up"
                            )}
                          </button>
                        </div>
                      </Col>

                      {/* Sign In Link */}
                      <Col xs={12}>
                        <div className="text-center text-lg-start mb-3">
                          Already have an account?{" "}
                          <Link
                            to="/auth/sign-in"
                            className="link-primary text-decoration-underline"
                          >
                            Sign in
                          </Link>
                        </div>
                      </Col>

                      {/* Divider */}
                      <div className="app-divider-v justify-content-center">
                        <p>Or sign up with</p>
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

export default SignUp;
