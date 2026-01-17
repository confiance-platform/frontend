import React from 'react';
import {Container} from "reactstrap";
import {Link} from 'react-router-dom'

const InternalServer = () => {
    return (
        <div className="error-container p-0">
            <Container >

                <div>
                    <div>
                        <img src="../assets/images/background/error-500.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <p className="text-center text-secondary f-w-500">500 Internal Server Error server error
                                    response code
                                    indicates that the server encountered an unexpected that prevented it from
                                    fulfilling the request</p>
                            </div>
                        </div>
                    </div>
                    <Link role="button" to="/dashboard/ecommerce" className="btn btn-lg btn-warning text-white"><i
                        className="ti ti-home"></i> Back To
                        Home</Link>
                </div>
            </Container>
        </div>
    );
};

export default InternalServer;