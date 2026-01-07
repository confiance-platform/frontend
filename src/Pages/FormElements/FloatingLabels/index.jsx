import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const FloatingLabels = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Floating Labels</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Floating Labels</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Custom Floating Labels</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="app-form">
                                    <div className="row">
                                        <Col xs={12}>
                                            <div className="floating-form mb-3">
                                                <input type="text" name="name" className="form-control" placeholder="none" required/>
                                                <label className="form-label">Name</label>
                                            </div>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="floating-form">
                                                <input type="password" className="form-control" placeholder="password" required/>
                                                <label className="form-label">password</label>
                                            </div>
                                        </Col>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Basic Floating Label</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="row">
                                    <Col xs={12}>
                                        <form className="app-form">
                                            <div className="form-floating mb-3">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="Email address"/>
                                                <label htmlFor="floatingInput">Email address</label>
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                                <label htmlFor="floatingPassword">Password</label>
                                            </div>
                                        </form>
                                    </Col>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Textareas Floating Labels</h5>
                            </CardHeader>
                            <CardBody>
                                <form className="app-form">
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" placeholder="Type a comment here"></textarea>
                                        <label>Comments</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" placeholder="Type a Massage here"></textarea>
                                        <label>Massage</label>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Input Groups Floating Labels</h5>
                            </CardHeader>
                            <CardBody>
                                <Col xs={12}>
                                    <form className="app-form">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text b-r-left">@</span>
                                            <div className="form-floating">
                                                <input type="text" className="form-control b-r-right"
                                                       id="floatingInputGroup1" placeholder="Username"/>
                                                <label htmlFor="floatingInputGroup1">Username</label>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text b-r-left">@</span>
                                            <div className="form-floating">
                                                <input type="text" className="form-control b-r-right" placeholder="Email Address"/>
                                                <label htmlFor="floatingInputGroup1">Email Address</label>
                                            </div>
                                        </div>
                                    </form>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Readonly Floating Labels</h5>
                            </CardHeader>
                            <CardBody>
                                <Col xs={12}>
                                    <form className="app-form">
                                        <div className="form-floating mb-3">
                                            <input type="email" readOnly className="form-control-plaintext"
                                                   id="floatingEmptyPlaintextInput" placeholder="name@example.com"/>
                                            <label htmlFor="floatingEmptyPlaintextInput">Empty input</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="email" readOnly className="form-control-plaintext"
                                                   id="floatingPlaintextInput" placeholder="name@example.com" defaultValue="name@example.com"/>
                                            <label htmlFor="floatingPlaintextInput">Input with value</label>
                                        </div>
                                    </form>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Floating Input Value</h5>
                            </CardHeader>
                            <CardBody>
                                <form className="app-form">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInputValue"
                                               placeholder="name@example.com" defaultValue="test@example.com"/>
                                        <label htmlFor="floatingInputValue">Input with value</label>
                                    </div>
                                    <div className="form-floating floating-invalid">
                                        <input type="email" className="form-control is-invalid pe-4"
                                               id="floatingInputInvalid" placeholder="name@example.com" defaultValue="test@example.com"/>
                                        <label htmlFor="floatingInputInvalid">Invalid input</label>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Select Floating Labels</h5>
                            </CardHeader>
                            <CardBody>
                                <form className="app-form floating-select">
                                    <div className="form-floating mb-3">
                                        <select className="form-select" id="floatingSelect"
                                                aria-label="Floating label select example" defaultValue="2">
                                            <option>Open this select menu</option>
                                            <option defaultValue="1">One</option>
                                            <option defaultValue="2">Two</option>
                                            <option defaultValue="3">Three</option>
                                        </select>
                                        <label htmlFor="floatingSelect">Works with selects</label>
                                    </div>
                                    <div className="form-floatin">
                                        <select className="form-select" id="floatingSelectDisabled"
                                                aria-label="Floating label disabled select example" defaultValue="2" disabled>
                                            <option>Open this select menu</option>
                                            <option defaultValue="1">One</option>
                                            <option defaultValue="2">Two</option>
                                            <option defaultValue="3">Three</option>
                                        </select>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Floating labels Layout </h5>
                            </CardHeader>
                            <CardBody>
                                <form className="app-form">
                                    <div className="row g-2">
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="floatingInputGrid"
                                                       placeholder="name@example.com" defaultValue="mdo@example.com"/>
                                                <label htmlFor="floatingInputGrid">Email address</label>
                                            </div>
                                        </div>
                                        <div className="col-md floating-select">
                                            <div className="form-floating">
                                                <select className="form-select form-select-labels" id="floatingSelectGrid" defaultValue="2">
                                                    <option >Open this select menu</option>
                                                    <option defaultValue="1">One</option>
                                                    <option defaultValue="2">Two</option>
                                                    <option defaultValue="3">Three</option>
                                                </select>
                                                <label htmlFor="floatingSelectGrid">Works with selects</label>
                                            </div>
                                        </div>
                                        <Col xs={12}>
                                            <div className="form-floating">
                                                <input type="password" className="form-control"
                                                       id="floatingPassword1" placeholder="Password"/>
                                                <label htmlFor="floatingPassword1">Password</label>
                                            </div>
                                        </Col>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default FloatingLabels;