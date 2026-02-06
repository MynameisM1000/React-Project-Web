import React, { Component } from 'react';
import './css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink, Link } from 'react-router-dom';
// Icon
import homeIcon from "./icon/home.png";
import infoIcon from "./icon/info.png";
import briefcaseIcon from "./icon/briefcase.png";
import bookIcon from "./icon/contact-book.png";

export default class Navbar extends Component {
    state = {
        navOpen: false,
    };
    toggleNav = () => {
        this.setState((changeState) => ({ 
            navOpen: !changeState.navOpen,
        }));
    };

  render() {
    const { navOpen } = this.state;
    return (
        <div className="MainSection container px-5">
            <div className="header d-flex flex-wrap justify-content-between py-3 px-5 mb-1">
{/* Burger Icon ----------------------------- */}
                <div
                    className={`burger ${navOpen ? "active" : ""}`}
                    onClick={this.toggleNav}>
                    <span></span>
                </div>

{/* Logo ------------------------------------- */}
                <Link to="/" className="logo">
                    <span className='colo'>@</span>ss<span className='colo'>et</span>
                </Link>

{/* Menu ------------------------------------- */}
                <ul
                    className={`list-group list-group-horizontal ${
                    navOpen ? "open" : ""
                }`}>
                    <li className="list-group-item" id="homeli">
                        <NavLink to="/" className="navlinks">
                        <img src={homeIcon} className="icon" alt="Home" id="home" />
                        Home
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to="/about" className="navlinks">
                            <img src={infoIcon} className="icon" alt="About" />
                            About
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to="/portfolio" className="navlinks">
                        <img src={briefcaseIcon} className="icon" alt="Portfolio" />
                        Portfolio
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to="/contact" className="navlinks">
                            <img src={bookIcon} className="icon" alt="Contact" />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}
