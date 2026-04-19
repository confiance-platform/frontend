
import React from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, Button, Form, FormGroup, Label, Input  } from "reactstrap";



const BaseInput = () => {
    return (
        <div>
            <Container fluid>

                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Base Inputs</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Base Inputs</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Basic Form Controls</h5>
                            </CardHeader>

                            <CardBody>
                                <Form className="app-form">
                                    <FormGroup>
                                        <Label for="username" className="form-label">Username</Label>
                                        <Input type="text" name="username" id="username" placeholder="Enter Your Username" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="password" className="form-label">Password</Label>
                                        <Input type="password" name="password" id="password" placeholder="Enter Your Password" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="form-label">City</Label>
                                        <Input type="select" className="form-select" defaultValue="0">
                                            <option value="0">Select Your City</option>
                                            <option value="1">UK</option>
                                            <option value="2">US</option>
                                            <option value="3">Italy</option>
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="form-label">Content</Label>
                                        <div className="input-group" id="content">
                                            <span className="input-group-text">+91</span>
                                            <Input type="text" className="form-control" placeholder="xxx-xxxxx-xxx" />
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="address" className="form-label">Address</Label>
                                        <Input type="textarea" name="address" id="address" placeholder="Enter Your Address" rows="3" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Input type="text" placeholder="Only Readable input ..." readOnly />
                                    </FormGroup>

                                    <FormGroup check className="mb-3 d-flex gap-1">
                                        <Input type="checkbox" id="checkDefault" />
                                        <Label for="checkDefault" check>
                                            Default checkbox
                                        </Label>
                                    </FormGroup>

                                    <div className="text-end">
                                        <Button color="primary">Submit</Button>
                                    </div>
                                </Form>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Rounded Form Control</h5>
                            </CardHeader>

                            <CardBody>
                                <Form className="app-form rounded-control">
                                    <FormGroup>
                                        <Label className="form-label">Username</Label>
                                        <Input type="text" className="form-control" placeholder="Enter Your Username" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="form-label">Password</Label>
                                        <Input type="password" className="form-control" placeholder="Enter Your Password" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="form-label">City</Label>
                                        <Label className="form-label">City</Label>
                                        <Input type="select" className="form-select" defaultValue="0">
                                            <option value="0">Select Your City</option>
                                            <option value="1">UK</option>
                                            <option value="2">US</option>
                                            <option value="3">Italy</option>
                                        </Input>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="form-label">Content</Label>
                                        <div className="input-group">
                                            <span className="input-group-text">+91</span>
                                            <Input type="text" className="form-control" placeholder="xxx-xxxxx-xxx" />
                                        </div>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="form-label">Address</Label>
                                        <Input type="textarea" className="form-control" rows="3" placeholder="Enter Your Address" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Input className="form-control" type="text" placeholder="Only Readable input ..." readOnly />
                                    </FormGroup>

                                    <FormGroup check className="mb-3 d-flex gap-1">
                                        <Input className="form-check-input mg-2" type="checkbox" id="checkDefault1" />
                                        <Label className="form-check-label mb-0" for="checkDefault1">
                                            Default checkbox
                                        </Label>
                                    </FormGroup>

                                    <div className="text-end">
                                        <Button color="primary">Submit</Button>
                                    </div>
                                </Form>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Input Sizing</h5>
                            </CardHeader>

                            <CardBody>
                                <Form>
                                    <FormGroup className="mb-3">
                                        <Input className="form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <Input type="text" placeholder="Default input" aria-label="default input example" />
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <Input className="form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
                                    </FormGroup>
                                </Form>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Basic HTML Input Control</h5>
                            </CardHeader>

                            <CardBody>
                                <Form className="app-form">
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup className="mb-3">
                                                <Label for="defaultInput" className="form-label">Default Input</Label>
                                                <Input type="text" id="defaultInput" className="form-control" placeholder="Default Input" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup className="mb-3">
                                                <Label for="staticText" className="col-form-label">Static Text</Label>
                                                <div className="form-control-static" id="staticText">
                                                    Hello !... This is static text
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup className="mb-3">
                                                <Label for="emailInput" className="form-label">Email</Label>
                                                <Input type="email" id="emailInput" className="form-control" placeholder="Email Input" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup className="mb-3">
                                                <Label for="passwordInput" className="form-label">Password</Label>
                                                <Input type="password" id="passwordInput" className="form-control" placeholder="Password Input" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup className="mb-3">
                                                <Label for="urlInput" className="form-label">URL</Label>
                                                <Input type="url" id="urlInput" className="form-control" placeholder="URL Input" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup className="mb-3">
                                                <Label for="telInput" className="form-label">Telephone</Label>
                                                <Input type="tel" id="telInput" className="form-control" placeholder="+91 (999)-999-999" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup className="mb-3">
                                                <Label for="numberInput" className="form-label">Number</Label>
                                                <Input type="number" id="numberInput" className="form-control" placeholder="Enter Number" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={6}>
                                            <FormGroup className="mb-3">
                                                <Label for="maxLengthInput" className="col-form-label">Maximum Length</Label>
                                                <Input type="text" id="maxLengthInput" className="form-control" placeholder="Enter Your Zip code" maxLength="6" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={4}>
                                            <FormGroup className="mb-3">
                                                <Label for="dateTimeInput" className="form-label">Date & Time</Label>
                                                <Input type="datetime-local" id="dateTimeInput" className="form-control" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={4}>
                                            <FormGroup className="mb-3">
                                                <Label for="dateInput" className="form-label">Date</Label>
                                                <Input type="date" id="dateInput" className="form-control" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={4}>
                                            <FormGroup className="mb-3">
                                                <Label for="timeInput" className="form-label">Time</Label>
                                                <Input type="time" id="timeInput" className="form-control" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={5}>
                                            <FormGroup className="mb-3">
                                                <Label for="monthInput" className="form-label">Month</Label>
                                                <Input type="month" id="monthInput" className="form-control" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={5}>
                                            <FormGroup className="mb-3">
                                                <Label for="weekInput" className="form-label">Week</Label>
                                                <Input type="week" id="weekInput" className="form-control" />
                                            </FormGroup>
                                        </Col>

                                        <Col md={2}>
                                            <FormGroup className="mb-3">
                                                <Label for="colorInput" className="form-label">Color</Label>
                                                <Input type="color" id="colorInput" className="form-control color-form-control" defaultValue="#4fc9da" />
                                            </FormGroup>
                                        </Col>

                                        <Col xs={12}>
                                            <FormGroup className="mb-3">
                                                <Label for="fileInput" className="form-label">File</Label>
                                                <Input type="file" id="fileInput" className="form-control" />
                                            </FormGroup>
                                        </Col>

                                        <Col xs={12}>
                                            <FormGroup className="mb-3">
                                                <Label for="searchInput" className="form-label">Search</Label>
                                                <Input type="search" id="searchInput" className="form-control" placeholder="Search..." />
                                            </FormGroup>
                                        </Col>

                                        <Col xs={12}>
                                            <FormGroup className="mb-3">
                                                <Label for="textareaInput" className="col-form-label">Textarea</Label>
                                                <div>
                                                    <textarea className="form-control" id="textareaInput" rows="5" cols="5" placeholder="Default textarea"></textarea>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <div className="text-end">
                                        <Button color="primary">Submit</Button>
                                    </div>
                                </Form>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BaseInput;