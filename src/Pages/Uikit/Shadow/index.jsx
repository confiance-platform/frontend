import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Shadow = () => {
    useEffect(() => {
        document.querySelectorAll(".box-shadow-box").forEach(el =>
            el.addEventListener("click", () => {
                navigator.clipboard.writeText(el.classList[1]);
                Toastify({
                    text: "Class name copied to the clipboard successfully",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: { background: "rgba(var(--success),1)" }
                }).showToast();
            })
        );

    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Shadow</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Shadow</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Box Shadow</h5>
                            </CardHeader>
                            <CardBody>
                                <Container fluid>
                                    <Row>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4">
                                            <div className="box-shadow-box box-shadow-1">
                                                Box-shadow-1
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-2">
                                                Box-shadow-2
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-3">
                                                Box-shadow-3
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-4">
                                                Box-shadow-4
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-5">
                                                Box-shadow-5
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-6">
                                                Box-shadow-6
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4">
                                            <div className="box-shadow-box box-shadow-7">
                                                Box-shadow-7
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-8">
                                                Box-shadow-8
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-9">
                                                Box-shadow-9
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-10">
                                                Box-shadow-10
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-11">
                                                Box-shadow-11
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-12">
                                                Box-shadow-12
                                            </div>
                                        </Col>

                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-13">
                                                Box-shadow-13
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4">

                                            <div className="box-shadow-box box-shadow-14">
                                                Box-shadow-14
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4">
                                            <div className="box-shadow-box box-shadow-15">
                                                Box-shadow-15
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-16">
                                                Box-shadow-16
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">

                                            <div className="box-shadow-box box-shadow-17">
                                                Box-shadow-17
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4">
                                            <div className="box-shadow-box box-shadow-18">
                                                Box-shadow-18
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-19">
                                                Box-shadow-19
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4">
                                            <div className="box-shadow-box box-shadow-20">
                                                Box-shadow-20
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-21">
                                                Box-shadow-21
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4">
                                            <div className="box-shadow-box box-shadow-22">
                                                Box-shadow-22
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4">
                                            <div className="box-shadow-box box-shadow-23">
                                                Box-shadow-23
                                            </div>
                                        </Col>
                                        <Col sm={4} lg={3} xxl={2} className="mb-4 ">
                                            <div className="box-shadow-box box-shadow-24">
                                                Box-shadow-24
                                            </div>
                                        </Col>

                                    </Row>
                                </Container>


                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Box Colour Shadow</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="container-fluid shadow-box">
                                    <Row>
                                        <Col sm={3} lg={2}  className="mb-4">
                                            <div className="box-shadow-box box-shadow-25 box-shadow-primary">
                                                Primary
                                            </div>
                                        </Col>
                                        <Col sm={3} lg={2}  className="mb-4">
                                            <div className="box-shadow-box box-shadow-25 box-shadow-secondary">
                                                secondary
                                            </div>
                                        </Col>
                                        <Col sm={3} lg={2}  className="mb-4">
                                            <div className="box-shadow-box box-shadow-25 box-shadow-success">
                                                success
                                            </div>
                                        </Col>
                                        <Col sm={3} lg={2}  className="mb-4">
                                            <div className="box-shadow-box box-shadow-25 box-shadow-danger">
                                                danger
                                            </div>
                                        </Col>
                                        <Col sm={3} lg={2}  className="mb-4">
                                            <div className="box-shadow-box box-shadow-25 box-shadow-warning">
                                                warning
                                            </div>
                                        </Col>
                                        <Col sm={3} lg={2}  className="mb-4">
                                            <div className="box-shadow-box box-shadow-25 box-shadow-info">
                                                info
                                            </div>
                                        </Col>
                                        <Col sm={3} lg={2}  className="mb-4">
                                            <div className="box-shadow-box box-shadow-25 box-shadow-light">
                                                light
                                            </div>
                                        </Col>
                                        <Col sm={3} lg={2}  className="mb-4">
                                            <div className="box-shadow-box box-shadow-25 box-shadow-dark">
                                                dark
                                            </div>
                                        </Col>
                                    </Row>
                                </div>


                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shadow;
