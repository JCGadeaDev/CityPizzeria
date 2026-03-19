import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/nav-bar.css";

function Header({ name, basket }) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark sticky-top px-4" style={{ backgroundColor: "#1a1a2e" }}>
            <a className="navbar-brand fw-bold fs-4" href="/">
                <i className="fas fa-pizza-slice me-2"></i>{name}
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto align-items-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#menu">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#deals">Deals</a>
                    </li>
                    <li className="nav-item ms-2">
                        <button
                            className="btn btn-outline-light position-relative"
                            onClick={() => {
                                document.getElementById("mySidenav").style.height = "100%";
                            }}
                        >
                            <i className="fas fa-shopping-basket"></i>
                            {basket > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {basket}
                                </span>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
