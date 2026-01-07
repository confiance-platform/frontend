import React from 'react';
import { Col, Container, Row ,CardFooter } from "reactstrap";
import BasicFileupload from "../../../Components/Fileupload/BasicFileupload";
import FilepondUploader from "../../../Components/Fileupload/FilepondUploader";
import CircleUploader from "../../../Components/Fileupload/CircleUploader";
import LightFileupload from "../../../Components/Fileupload/LightFileupload";
import SolidFileupload from "../../../Components/Fileupload/SolidFileupload";

const FileUpload = () => {
    return (
        <div>
            <Container fluid>
            <Row className="m-1">
                        <Col xs={12}>
                            <h4 className="main-title">File upload</h4>
                            <ul className="app-line-breadcrumbs mb-3">
                                <li className="">
                                    <a href="#" className="f-s-14 f-w-500">
                                        <span>
                                            <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                                        </span>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="#" className="f-s-14 f-w-500">File upload</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                <Row>
                    <Col xs={12}>
                        <BasicFileupload/>
                    </Col>
                    <Col xl={8}>
                        <FilepondUploader/>
                    </Col>
                    <Col xl={4}>
                        <CircleUploader />
                    </Col>
                    <Col xs={12}>
                        <SolidFileupload/>
                    </Col>
                    <Col xs={12}>
                        <LightFileupload/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FileUpload;
