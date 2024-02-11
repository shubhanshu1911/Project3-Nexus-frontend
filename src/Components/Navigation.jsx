import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: "white" }}>
                    <img src="/Images/nexusLogo.webp" alt="nexusLogo" width="50" height="50" style={{ marginLeft : "20px", borderRadius : "50%" }} ></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ listStyleType: "none" }}>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" style={{ color: "white" }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{ color: "white" }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services" style={{ color: "white" }}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" style={{ color: "white" }}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;