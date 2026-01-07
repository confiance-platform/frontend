import React from 'react';
import {Container} from "reactstrap";
import {Link} from 'react-router-dom'

const Forbidden = () => {
    return (
        <div className="error-container p-0">
            <Container>

                <div>
                    <div>
                        <img src="../assets/images/background/error-403.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <p className="text-center text-secondary f-w-500">403 Forbidden response status code
                                    indicates that the server
                                    understands the request<br/> but refuses to authorize it.</p>
                            </div>
                        </div>
                    </div>
                    <Link role="button" to="/dashboard/ecommerce" className="btn btn-lg btn-success"><i
                        className="ti ti-home"></i> Back To Home</Link>
                </div>
            </Container>
        </div>
    );
};

export default Forbidden;
