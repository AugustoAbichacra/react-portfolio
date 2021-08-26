import React from "react";
import { Link } from "react-scroll";

function Contract() {
  return (
    <section className="contrato bg-danger py-5" id="contrato">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <p className="fs-5 text-light">Do you have any project in mind?</p>
            <h2 className="fs-2 text-white my-4">
              I'm available for Freelancer Projects!
            </h2>
              <Link
                className="link btn btn-outline-light"
                activeClass="active"
                to="contacto"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
              >
                Contact Me
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contract;
