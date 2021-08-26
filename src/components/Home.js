import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <section className="home py-5" id="inicio">
      <div className="container-lg">
        <div className="row min-vh-100 align-items-center align-content-center">
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <img
              src="img/profile2.png"
              alt="Imagen de Perfil"
              className="img-fluid rounded-circle mw-100"
            />
          </div>
          <div className="col-md-6 order-md-first mt-5 mt-md-0">
            <p className="text-muted fs-4 mb-1">Hi I'm</p>
            <h1 className="fs-3">Augusto Abichacra</h1>
            <h2 className="text-danger fw-bold text-uppercase">
              Full Stack Developer !
            </h2>
            <p className="mt-2 text-muted">
              Im a freelancer WebDesigner looking forward to work full time to
              serve the best.
            </p>
            <Link
              className="link btn btn-danger px-3 mt-3"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={200}
            >
              My Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
