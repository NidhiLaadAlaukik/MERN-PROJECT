import { Link } from "react-router-dom";

function Login() {
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
                    <h1>Welcome Back!</h1>

                    <p>
                        Login to continue to your CodeNest account
                    </p>
                </div>

                <form className="auth-form">

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

                    <div className="form-group">

                        <div className="password-label">
                            <label htmlFor="password">
                                Password
                            </label>

                            <a
                                href="#"
                                className="forgot-password"
                                onClick={(event) => event.preventDefault()}
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="auth-button"
                    >
                        Login
                    </button>

                </form>

                <div className="auth-footer">
                    <p>
                        Don't have an account?{" "}
                        <Link to="/register">
                            Create an account
                        </Link>
                    </p>
                </div>

            </section>

        </main>
    );
}

export default Login;