import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light sticky-top t-0 bg-dark">
            <div class="container-fluid">
                <h3 className="text-white px-3">noSupplements</h3>
                <button class="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-4 fw-bold">
                            <Link class="nav-link text-white" to="/home"> Home</Link>
                        </li>
                        <li class="nav-item mx-4 fw-bold">
                            <Link class="nav-link text-white" to="/search"> About</Link>
                        </li>
                        <li class="nav-item mx-4 fw-bold">
                            <Link class="nav-link text-white" to="/form">Service</Link>
                        </li>
                        <li class="nav-item mx-4 fw-bold">
                            <Link class="nav-link text-white" to="/info"> Contact</Link>
                        </li>
                        <li class="nav-item mx-4 fw-bold">
                            <Link class="nav-link text-white" to="/bonus"> Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;