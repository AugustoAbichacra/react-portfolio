import React from 'react';
import {enviarMensaje} from '../js/app.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact(){
   
    return(
        <div className="contacto py-5 bg-light" id="contacto">
            <div className="container-lg py-4">
                <div className="row justify-content-center py-3">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="fw-bold mb-5 text-danger">CONTACT</h2>
                        </div>
                    </div>            
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="contact-item d-flex mb-3">
                            <div className="icon text-danger fs-4">
                              <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Email</h3>
                                <p className="text-muted">abichacraaugusto@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item d-flex mb-3">
                            <div className="icon text-danger fs-4">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Phone</h3>
                                <p className="text-muted">+54 9 11 4026 4960</p>
                            </div>
                        </div>
                        <div className="contact-item d-flex mb-3">
                            <div className="icon text-danger fs-4">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="text ms-3">
                                <h3 className="fs-5">Location</h3>
                                <p className="text-muted">1090 Caamaño, Pilar, Bs. As.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-form">
                        <form action="/index.html" id="formulario" onSubmit={enviarMensaje}>
                                <div className="row">
                                    <div className="col-lg-6  mb-4">
                                        <label htmlFor="nombre" className="form-label">Name</label>
                                        <input type="text" placeholder="Name" className="form-control form-control-lg fs-6 border-0 shadow-sm" name="nombre" id="nombre" />
                                    </div>
                                    <div className="col-lg-6  mb-4">
                                        <label htmlFor="correo" className="form-label">Email</label>
                                        <input type="email" className="form-control form-control-lg fs-6 border-0 shadow-sm" name="correo" id="correo" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                        <label htmlFor="asunto" className="form-label">Subject</label>
                                        <input type="text" placeholder="Subject" className="form-control form-control-lg fs-6 border-0 shadow-sm" name="asunto" id="asunto" />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-lg-12">
                                    <label htmlFor="mensaje" className="form-label">Message</label>
                                        <textarea placeholder="Message" className="form-control form-control-lg fs-6 border-0 shadow-sm" rows="5" name="mensaje" id="mensaje" ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-danger px-3">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;