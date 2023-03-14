import React from "react";

function Portfolio() {
  return (
    <section className="portfolio bg-white py-5" id="portfolio">
      <div className="container-lg py-4">
        <div className="row justify-content-center py-3">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5 text-danger">RECENT WORKS</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="portfolio-item">
              <img
                src="img/portfolio/Lean.png"
                alt="Imagen 1 Portfolio"
                className="w-100 img-fluid pt-2"
              />
              <h3 className="fs-5 my-2">
                Lean - Ract Native App (Can Download from App Store and Play
                Store)
              </h3>
              <p>
                <a
                  href="https://www.withlean.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-danger"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="portfolio-item">
              <img
                src="img/portfolio/1.png"
                alt="Imagen 1 Portfolio"
                className="w-100 img-fluid pt-2"
              />
              <h3 className="fs-5 my-2">Hub - FrontEnd</h3>
              <p>
                <a
                  href="https://hub.inc/resources/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-decoration-none text-danger"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="portfolio-item">
              <img
                src="img/portfolio/Burb.png"
                alt="Imagen 3 Portfolio"
                className="w-100 img-fluid pt-2"
              />
              <h3 className="fs-5 my-2">Burb</h3>
              <p>
                <a
                  href="https://www.burb.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-danger"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="portfolio-item">
              <img
                src="img/portfolio/premium-fodder.png"
                alt="Imagen 4 Portfolio"
                className="w-100 img-fluid pt-2"
              />
              <h3 className="fs-5 my-2">Premium Fodder</h3>
              <p>
                <a
                  href="https://agitated-wilson-95064c.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-danger"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
