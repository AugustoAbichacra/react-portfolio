import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Knowledges from './Knowledges.js'
// Agrego un comentario
function About() {
  return (
    <section className="about bg-white py-5" id="sobre-mi">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5 text-danger">ABOUT ME</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="about-text text-center">
              <h3 className="fs-4 mb-3">Nice to meet you!</h3>
              <p className="fs-6 text-muted">
                Since beginning my journey as a freelance designer, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
            </div>
            <div className="row text-center text-uppercase my-3">
              
              <div className="row">
                <div className="col-lg-12 d-flex align-items-center mt-3 justify-content-center">
                  <a download href='/docs/CV.doc' className="btn btn-danger px-3 me-5">
                    Download CV
                  </a>
                  <div className="social-links">
                    <a href="https://www.facebook.com/augusto.abichacra/" target="_blank" rel="noreferrer" className="text-dark me-2">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="text-dark me-2">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/augustoabichacra/?hl=es-la" target="_blank" rel="noreferrer" className="text-dark me-2">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/augusto-abichacra-16ab78b6/" target="_blank" rel="noreferrer" className="text-dark me-2">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6 mt-5 mt-md-0">
            <div className="skill-item">
              <h3 className="fs-5 mb-3">HTML</h3>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <h3 className="fs-5 my-3">CSS</h3>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <h3 className="fs-5 my-3">React</h3>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="skill-item">
              <h3 className="fs-5 my-3">Js</h3>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div> */}
          <Knowledges></Knowledges>
          {/* Fin lado derecho */}
        </div>
      </div>
    </section>
  );
}

export default About;
