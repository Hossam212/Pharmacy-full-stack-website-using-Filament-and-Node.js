import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/checkAuth", {
                    method: "GET",
                    credentials: "include", // This ensures cookies are included in the request
                });
                const data = await response.json();
                if (data.status === "success") {
                    setUser(data.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error(error);
                setUser(null);
            }
        };

        fetchUser();
    }, []);
    return (
        <>
            {/* ======= Header ======= */}
            <header id="header" className="fixed-top header-scrolled">
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            Dr Mohamed Abu Elela Pharmacy
                        </Link>
                    </h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <a
                                    className="nav-link scrollto active"
                                    href="#hero"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#services"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#departments"
                                >
                                    Departments
                                </a>
                            </li>

                            <li className="dropdown">
                                <span>Pharmaceutics</span>{" "}
                                <i className="bi bi-chevron-down" />
                                <ul>
                                    <li>
                                        <Link to="/products/diabetes">
                                            Diabetes medications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/products/hypertensive">
                                            Hypertensive medications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/products/skin-care">
                                            Skin Care
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/products/hair-treatment">
                                            Hair Treatment
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* .navbar */}
                    <Link
                        to="/diabetes-predict"
                        className="appointment-btn scrollto"
                        style={{ textDecoration: "none" }}
                    >
                        <span className="d-none d-md-inline">Diabetes AI</span>
                    </Link>
                    <div className="user-details">
                        {user ? (
                            <>
                                <a
                                    href="/"
                                    className="appointment-btn  nav__el--logout"
                                >
                                    <span className="nav__el--logout">
                                        Log out
                                    </span>{" "}
                                </a>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    style={{ textDecoration: "none" }}
                                    className="appointment-btn scrollto"
                                >
                                    <span className="d-none d-md-inline">
                                        Login
                                    </span>{" "}
                                </Link>
                                <Link
                                    to="/signup"
                                    style={{ textDecoration: "none" }}
                                    className="appointment-btn scrollto"
                                >
                                    <span className="d-none d-md-inline">
                                        Sign Up
                                    </span>{" "}
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </header>
            {/* End Header */}
        </>
    );
}

export default Header;
