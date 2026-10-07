import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <Link to="/" className="brand">
                        <div className="brand-logo">C</div>
                        <span className="brand-name">CodeNest</span>
                    </Link>

                    <p>
                        A home for developers and their projects.
                    </p>
                </div>

                {/* <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div> */}
                <div></div>

                <div className="footer-copyright">
                    <p>© 2026 CodeNest. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;