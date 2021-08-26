import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section className="testimoniales bg-white py-5" id="testimoniales">
      <div className="container-lg-12 py-4">
        <div className="row justify-content-center py-3">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5 text-danger">TESTIMONIALS</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              id="carousel1"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide-to="0"
                  className="active bg-danger"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide-to="1"
                  className="bg-danger"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carousel1"
                  data-bs-slide-to="2"
                  className="bg-danger"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="testi-item carousel-item active bg-white shadow-sm rounded p-4 mb-5">
                  <div className="testi-author-info d-flex align-items-center">
                    <img
                      src="img/testimonial/1.png"
                      alt=""
                      className="img-thumbnail rounded-circle"
                    />
                    <div className="author ms-3">
                      <h3 className="fs-6 mb-1">Martin Antonini</h3>
                      <p className="text-muted m-0">Seo Manager</p>
                    </div>
                  </div>
                  <p className="text-muted my-5">
                    Augusto was a real pleasure to work with and we look forward
                    to working with him again. He’s definitely the kind of
                    designer you can trust with a project from start to finish, it was a pleasure.
                  </p>
                  <div className="rating text-danger fs-4">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>

                <div className="testi-item bg-white carousel-item shadow-sm rounded p-4 mb-5">
                  <div className="testi-author-info d-flex align-items-center">
                    <img
                      src="img/testimonial/2.png"
                      alt=""
                      className="img-thumbnail rounded-circle"
                    />
                    <div className="author ms-3">
                      <h3 className="fs-6 mb-1">Justina Armenault</h3>
                      <p className="text-muted m-0">Buisness Owner</p>
                    </div>
                  </div>
                  <p className="text-muted my-5">
                    Augusto's a clear communicator with the tenacity and
                    confidence to really dig in to tricky design scenarios and
                    the collaborative friction that's needed to produce
                    excellent and beautiful work
                  </p>
                  <div className="rating text-danger fs-4">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>

                <div className="testi-item bg-white carousel-item shadow-sm rounded p-4 mb-5">
                  <div className="testi-author-info d-flex align-items-center">
                    <img
                      src="img/testimonial/3.png"
                      alt=""
                      className="img-thumbnail rounded-circle"
                    />
                    <div className="author ms-3">
                      <h3 className="fs-6 mb-1">Marcos DellaPia</h3>
                      <p className="text-muted m-0">JP Morgan Admin</p>
                    </div>
                  </div>
                  <p className="text-muted my-5">
                    From the start of the project, through to completion, Augusto
                    supported us and exceeded our expectations in every way. His ability
                    to present our key messages in an imaginative
                    way was incredible.
                  </p>
                  <div className="rating text-danger fs-4">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>

                {/* fin inner */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
