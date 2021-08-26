import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLightbulb, faTv } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <section className="servicios py-5" id="servicios">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5 text-danger">SERVICES</h2>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="service-item shadow-sm p-4 rounded bg-white">
              <div className="icon my-3 text-danger fs-2">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3 className="fs-5 py-2">Web Development</h3>
              <p className="text-muted">
                I provide full development from scratch of your ideas!
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="service-item shadow-sm p-4 rounded bg-white">
              <div className="icon my-3 text-danger fs-2">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h3 className="fs-5 py-2">Creative Design</h3>
              <p className="text-muted">
                Design a creative project where the client is involved through the whole process!
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="service-item shadow-sm p-4 rounded bg-white">
              <div className="icon my-3 text-danger fs-2">
                 <FontAwesomeIcon icon={faTv} />
              </div>
              <h3 className="fs-5 py-2">eCommerce</h3>
              <p className="text-muted">
                Integration of eCommerce plataforms, payment gateways, templates and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
