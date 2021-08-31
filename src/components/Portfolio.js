import React from 'react';


function Portfolio(){
    return(
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
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="portfolio-item">
                            <img src="img/portfolio/1.png" alt="Imagen 1 Portfolio" className="w-100 img-fluid pt-2" />
                            <h3 className="fs-5 my-2">Grand Hotel - FrontEnd</h3>
                            <p><a href="https://kind-visvesvaraya-51e1d4.netlify.app/" rel="noreferrer" target="_blank" className="text-decoration-none text-danger">Live Demo</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="portfolio-item">
                            <img src="img/portfolio/tesla-clone.png" alt="Imagen 1 Portfolio" className="w-100 img-fluid pt-2" />
                            <h3 className="fs-5 my-2">Tesla (React + Redux) Clone</h3>
                            <p><a href="https://epic-borg-c99307.netlify.app" target="_blank" rel="noreferrer"className="text-decoration-none text-danger">Live Demo</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="portfolio-item">
                            <img src="img/portfolio/7.png" alt="Imagen 1 Portfolio" className="w-100 img-fluid pt-2" />
                            <h3 className="fs-5 my-2">Netflix Clone</h3>
                            <p><a href="https://cranky-murdock-33db9d.netlify.app/" target="_blank" rel="noreferrer"className="text-decoration-none text-danger">Live Demo</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="portfolio-item">
                            <img src="img/portfolio/3.png" alt="Imagen 3 Portfolio" className="w-100 img-fluid pt-2"/>
                            <h3 className="fs-5 my-2">Filterable Image Gallery (PixaBay API)</h3>
                            <p><a href="https://naughty-franklin-3a4f5e.netlify.app/" target="_blank" rel="noreferrer"className="text-decoration-none text-danger">Live Demo</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="portfolio-item">
                            <img src="img/portfolio/8.png" alt="Imagen 4 Portfolio" className="w-100 img-fluid pt-2" />
                            <h3 className="fs-5 my-2">Disney + Clone</h3>
                            <p><a href="https://disneyplus-clone-a33d5.firebaseapp.com/" target="_blank" rel="noreferrer"className="text-decoration-none text-danger">Live Demo</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="portfolio-item">
                            <img src="img/portfolio/2.png" alt="Imagen 2 Portfolio" className="w-100 img-fluid pt-2" />
                            <h3 className="fs-5 my-2">CriptoCurrency Live Calculator</h3>
                            <p><a href="https://wonderful-hermann-5a0a66.netlify.app/" target="_blank" rel="noreferrer"className="text-decoration-none text-danger">Live Demo</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;