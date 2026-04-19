import React from 'react';
import {Container} from "reactstrap";
import {Link} from 'react-router-dom'

const BadRequest = () => {
    return (
        <div className="error-container p-0">
            <Container>

                <div>
                    <div>
                        <img src="../assets/images/background/error-400.png" className="img-fluid" alt=""/>
                    </div>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <p className="text-center text-secondary f-w-500">400 Bad Request response status code
                                    indicates that the
                                    server
                                    cannot or will not
                                    process the request due to something that is perceived to be a client error</p>
                            </div>
                        </div>
                    </div>
                    <Link role="button" to="/dashboard/ecommerce" className="btn btn-lg btn-lg btn-danger"><i
                        className="ti ti-home"></i> Back To Home</Link>
                </div>
            </Container>
        </div>
    );
};

export default BadRequest;
