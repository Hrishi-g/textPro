import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <nav
                className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
            >
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/">
                        Navbar
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link mx-4" to="/body">
                                    Main
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <div className="form-check form-switch form-check-reverse">
                        <input
                            className="form-check-input mx-5"
                            type="checkbox"
                            onClick={props.toogle}
                            id="flexSwitchCheckReverse"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckReverse"
                        ></label>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
