import { Link } from "react-router-dom";

function Register() {
    return (
        <main className="auth-page">

            <section className="auth-card">

                <Link to="/" className="auth-brand">
                    <div className="auth-brand-logo">
                        C
                    </div>

                    <span className="auth-brand-name">
                        CodeNest
                    </span>
                </Link>

                <div className="auth-header">
                    <h1>Create Your Account</h1>

                    <p>
                        Join CodeNest and start building your developer profile
                    </p>
                </div>

                <form className="auth-form">

                    {/* Full Name */}
                    <div className="form-group">
                        <label htmlFor="fullName">
                            Full Name
                        </label>

                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            required
                        />
                    </div>

                    {/* Username */}
                    <div className="form-group">
                        <label htmlFor="username">
                            Username
                        </label>

                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Choose a username"
                            autoComplete="username"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            autoComplete="new-password"
                            required
                            minLength="8"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="form-group">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            autoComplete="new-password"
                            required
                            minLength="8"
                        />
                    </div>

                    {/* Terms */}
                    <label className="terms-checkbox">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            required
                        />

                        <span>
                            I agree to the CodeNest Terms & Conditions
                        </span>
                    </label>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="auth-button"
                    >
                        Create Account
                    </button>

                </form>

                <div className="auth-footer">
                    <p>
                        Already have an account?{" "}
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </div>

            </section>

        </main>
    );
}

export default Register;