import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <Fragment>
      <nav className="navbar navbar-light fixed-top bg-light">
        <div className="container-lg">
          <Link
            className="link navbar-brand text-danger fw-bold fs-2 abau-link"
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
          >
            ABAU
          </Link>
          <div className="dropdown">
            <button
              className="btn btn-secondary"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i>
                <FontAwesomeIcon icon={faBars} />
              </i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <Link
                  className="link dropdown-item"
                  activeClass="active"
                  to="inicio"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="link dropdown-item"
                  activeClass="active"
                  to="sobre-mi"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="link dropdown-item"
                  activeClass="active"
                  to="servicios"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="link dropdown-item"
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="link dropdown-item"
                  activeClass="active"
                  to="testimoniales"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className="link dropdown-item"
                  activeClass="active"
                  to="contacto"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
