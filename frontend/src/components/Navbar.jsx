import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">

                <Link to="/" className="brand">
                    <div className="brand-logo">C</div>
                    <span className="brand-name">CodeNest</span>
                </Link>

                <nav className="nav-links">
                    <Link to="/login">Login</Link>

                    <Link to="/register" className="nav-register">
                        Get Started
                    </Link>
                </nav>

            </div>
        </header>
    );
}

export default Navbar;