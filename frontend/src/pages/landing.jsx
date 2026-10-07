import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Landing() {
    return (
        <>
            <Navbar />

            <main>

                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-container">

                        <div className="hero-content">

                            <div className="hero-badge">
                                <span className="badge-dot"></span>
                                A Home for Developers
                            </div>

                            <h1>
                                Build. <span>Connect.</span> Grow.
                            </h1>

                            <p className="hero-description">
                                CodeNest is a developer-focused platform where
                                you can showcase your projects, share your
                                knowledge, discover developers and build
                                meaningful connections.
                            </p>

                            <div className="hero-buttons">

                               <Link to="/register" className="btn btn-primary">
                                    Get Started <span>→</span>
                                </Link>

                                <Link to="/login" className="btn btn-secondary">
                                    Login
                                </Link>

                            </div>

                            <p className="hero-note">
                                Showcase your work. Connect with developers.
                                Build something amazing.
                            </p>

                        </div>

                        {/* Developer Preview */}
                        <div className="hero-visual">

                            <div className="visual-card">

                                <div className="visual-header">

                                    <div className="developer-info">

                                        <div className="developer-avatar">
                                            A
                                        </div>

                                        <div>
                                            <h3>Alex Morgan</h3>
                                            <p>@alexmorgan</p>
                                        </div>

                                    </div>

                                    <span className="online-dot"></span>

                                </div>

                                <div className="developer-bio">
                                    <p>
                                        Full Stack Developer passionate about
                                        building useful products and exploring
                                        new technologies.
                                    </p>
                                </div>

                                <div className="skills">
                                    <span>React</span>
                                    <span>Node.js</span>
                                    <span>MongoDB</span>
                                    <span>JavaScript</span>
                                </div>

                                <div className="project-preview">

                                    <div className="project-icon">
                                        &lt;/&gt;
                                    </div>

                                    <div className="project-info">
                                        <h4>DevBoard</h4>
                                        <p>Developer Collaboration Platform</p>
                                    </div>

                                    <span className="project-arrow">
                                        →
                                    </span>

                                </div>

                                <div className="developer-stats">

                                    <div>
                                        <strong>128</strong>
                                        <span>Followers</span>
                                    </div>

                                    <div>
                                        <strong>16</strong>
                                        <span>Projects</span>
                                    </div>

                                    <div>
                                        <strong>42</strong>
                                        <span>Posts</span>
                                    </div>

                                </div>

                            </div>

                            <div className="floating-card floating-card-one">
                                <span>✓</span>

                                <div>
                                    <strong>Project Shared</strong>
                                    <small>Just now</small>
                                </div>
                            </div>

                            <div className="floating-card floating-card-two">
                                <span>+</span>

                                <div>
                                    <strong>New Connection</strong>
                                    <small>2 min ago</small>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Features */}
                <section className="features">

                    <div className="features-container">

                        <div className="section-heading">

                            <span>WHY CODENEST?</span>

                            <h2>
                                Everything developers need
                                <br />
                                to build their presence.
                            </h2>

                        </div>

                        <div className="feature-grid">

                            <div className="feature-card">
                                <div className="feature-icon">👨‍💻</div>

                                <h3>Developer Profiles</h3>

                                <p>
                                    Create your developer identity and showcase
                                    your skills, experience and achievements.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">🚀</div>

                                <h3>Showcase Projects</h3>

                                <p>
                                    Share your projects, technologies, GitHub
                                    repositories and live work with the
                                    community.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">🤝</div>

                                <h3>Connect & Collaborate</h3>

                                <p>
                                    Discover developers with similar interests
                                    and build meaningful connections.
                                </p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">💬</div>

                                <h3>Share & Discuss</h3>

                                <p>
                                    Share ideas, discuss technologies and become
                                    part of an active developer community.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>

                {/* CTA */}
                <section className="cta-section">

                    <div className="cta-container">

                        <h2>Your code deserves a home.</h2>

                        <p>
                            Create your CodeNest profile and start showcasing
                            what you build.
                        </p>

                        <Link to="/register" className="btn btn-primary">
                            Create Your Account <span>→</span>
                        </Link>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Landing;