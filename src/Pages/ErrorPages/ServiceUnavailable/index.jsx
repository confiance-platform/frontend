import React from 'react';
import {Container} from "reactstrap";
import {Link} from 'react-router-dom'

const ServiceUnavailable = () => {
    return (
        <div className="error-container p-0">
            <Container>
                <div>
                    <div>
                        <img src="../assets/images/background/error-503.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <p className="text-center text-secondary f-w-500">503 status code (Service Unavailable)
                                    typically indicates a performance issue on the origin server.</p>
                            </div>
                        </div>
                    </div>
                    <Link role="button" to="/dashboard/ecommerce" className="btn btn-lg btn-danger text-white"><i
                        className="ti ti-home"></i> Back To Home</Link>
                </div>
            </Container>
        </div>
    );
};

export default ServiceUnavailable;
