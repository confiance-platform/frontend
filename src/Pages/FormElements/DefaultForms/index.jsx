
import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    Container,
    InputGroup, InputGroupText
} from 'reactstrap';




const DefaultForms = () => {
    return (
        <div>
            <Container fluid>
            <Row className="m-1" >
              <Col xs={12}>
                <h4 className="main-title">Default Forms</h4>
                <ul className="app-line-breadcrumbs mb-3">
                  <li className="">
                    <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#" className="f-s-14 f-w-500">Default Forms</a>
                  </li>
                </ul>
              </Col>
            </Row>
                

                <Row>
                    <Col lg="6">
                        <Card>
                            <CardHeader>
                                <h5>Vertical Form</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Row>
                                        <Col sm="12">
                                            <FormGroup>
                                                <Label for="fullName">Full Name</Label>
                                                <Input type="text" id="fullName" placeholder="Your Name" />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup>
                                                <Label for="email">Email Address</Label>
                                                <Input type="email" id="email" placeholder="Your Email" />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="password">Password</Label>
                                                <Input type="password" id="password" placeholder="Type password" />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="phone">Phone Number</Label>
                                                <Input type="tel" id="phone" className="contact-input" placeholder="123-45-678" />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="state">State</Label>
                                                <Input type="select" id="state">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="zipCode">Zip Code</Label>
                                                <Input type="text" id="zipCode" placeholder="Type a code" />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup check className="d-flex p-0">
                                                <FormGroup check className="d-flex p-0">
                                                    <Input
                                                        type="checkbox"
                                                        id="formCheck3"
                                                        className="m-1"
                                                    />
                                                    <Label check htmlFor="formCheck3" className="form-check-label">
                                                        Agree to terms and conditions
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12" className="text-end">
                                            <Button type="submit" color="success">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Vertical Form With Icon</h5>
                            </div>
                            <div className="card-body">
                                <Form className="app-form">
                                    <Row>
                                        <Col sm="12">
                                            <FormGroup>
                                                <Label for="fullName">Full Name</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-user"></i> {/* Icon for user */}
                                                    <Input
                                                        type="text"
                                                        id="fullName"
                                                        className="form-control pa-s-34"
                                                        placeholder="Your Name"
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup>
                                                <Label for="email">Email address</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-mail"></i> {/* Icon for email */}
                                                    <Input
                                                        type="email"
                                                        id="email"
                                                        className="form-control pa-s-34"
                                                        placeholder="Your Email"
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="password">Password</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-lock"></i> {/* Icon for password */}
                                                    <Input
                                                        type="password"
                                                        id="password"
                                                        className="form-control pa-s-34"
                                                        placeholder="Type password"
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="phone">Phone Number</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-phone-call"></i> {/* Icon for phone */}
                                                    <Input
                                                        type="tel"
                                                        id="phone"
                                                        className="form-control pa-s-34"
                                                        placeholder="123-45-678"
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="state">State</Label>
                                                <Input type="select" id="state">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="zipCode">Zip Code</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-article"></i> {/* Icon for Zip Code */}
                                                    <Input
                                                        type="text"
                                                        id="zipCode"
                                                        className="form-control pa-s-34"
                                                        placeholder="Type a code"
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup check className="d-flex p-0">
                                                <FormGroup check className="d-flex p-0">
                                                    <Input
                                                        type="checkbox"
                                                        id="formCheck5"
                                                        className="m-1"
                                                    />
                                                    <Label check htmlFor="formCheck3" className="form-check-label">
                                                        Agree to terms and conditions
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12" className="text-end">
                                            <Button type="submit" color="primary">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="card equal-card">
                            <div className="card-header">
                                <h5>Horizontal Form</h5>
                            </div>
                            <div className="card-body">
                                <Form className="app-form">
                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="fullName">Full Name</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input
                                                type="text"
                                                id="fullName"
                                                className="form-control"
                                                placeholder="Your Name"
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="email">Email Address</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="password">Password</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Type password"
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="phone">Phone Number</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input
                                                type="tel"
                                                id="phone"
                                                className="form-control contact-input"
                                                placeholder="123-45-678"
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="state">State</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input type="select" id="state">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Input>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="zipCode">Zip Code</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input
                                                type="text"
                                                id="zipCode"
                                                className="form-control mb-3"
                                                placeholder="Type a code"
                                            />
                                            <FormGroup check className="d-flex p-0">
                                                <FormGroup check className="d-flex p-0">
                                                    <Input
                                                        type="checkbox"
                                                        id="formCheck2"
                                                        className="m-1"
                                                    />
                                                    <Label check htmlFor="formCheck3" className="form-check-label">
                                                        Agree to terms and conditions
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="text-end">
                                            <Button type="submit" color="warning">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="card equal-card">
                            <div className="card-header">
                                <h5>Horizontal Form</h5>
                            </div>
                            <div className="card-body">
                                <div className="app-form">
                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="fullName">Full Name</Label>
                                        </Col>
                                        <Col md="9">
                                            <div className="icon-form">
                                                <i className="ti ti-user"></i> {/* User icon */}
                                                <Input
                                                    type="text"
                                                    id="fullName"
                                                    className="form-control pa-s-34"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="email">Email Address</Label>
                                        </Col>
                                        <Col md="9">
                                            <div className="icon-form">
                                                <i className="ti ti-mail"></i> {/* Email icon */}
                                                <Input
                                                    type="email"
                                                    id="email"
                                                    className="form-control pa-s-34"
                                                    placeholder="Your Email"
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="password">Password</Label>
                                        </Col>
                                        <Col md="9">
                                            <div className="icon-form">
                                                <i className="ti ti-lock"></i> {/* Lock icon */}
                                                <Input
                                                    type="password"
                                                    id="password"
                                                    className="form-control pa-s-34"
                                                    placeholder="Type password"
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="phone">Phone Number</Label>
                                        </Col>
                                        <Col md="9">
                                            <div className="icon-form">
                                                <i className="ti ti-phone-call"></i> {/* Phone icon */}
                                                <Input
                                                    type="tel"
                                                    id="phone"
                                                    className="form-control pa-s-34"
                                                    placeholder="123-45-678"
                                                />
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="state">State</Label>
                                        </Col>
                                        <Col md="9">
                                            <Input type="select" id="state">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Input>
                                        </Col>
                                    </Row>

                                    {/* Zip Code */}
                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Label for="zipCode">Zip Code</Label>
                                        </Col>
                                        <Col md="9">
                                            <div className="icon-form">
                                                <i className="ti ti-article"></i> {/* Article icon */}
                                                <Input
                                                    type="text"
                                                    id="zipCode"
                                                    className="form-control pa-s-34 mb-3"
                                                    placeholder="Type a code"
                                                />
                                            </div>

                                            <FormGroup check className="d-flex p-0">
                                                <FormGroup check className="d-flex p-0">
                                                    <Input
                                                        type="checkbox"
                                                        id="formCheck1"
                                                        className="m-1"
                                                    />
                                                    <Label check htmlFor="formCheck3" className="form-check-label">
                                                        Agree to terms and conditions
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="text-end">
                                            <Button type="submit" color="info">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="card equal-card">
                            <div className="card-header">
                                <h5>Form With Grid</h5>
                            </div>
                            <div className="card-body">
                                <Form className="app-form">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label for="firstName">First Name</Label>
                                                <Input type="text" id="firstName" className="form-control" placeholder="First Name" />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label for="email">Email address</Label>
                                                <Input type="email" id="email" className="form-control" placeholder="Your Email" />
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <FormGroup className="mb-3">
                                                <Label for="phone">Phone Number</Label>
                                                <Input type="text" id="phone" className="form-control contact-input" placeholder="Your Phone Number" />
                                            </FormGroup>
                                        </Col>

                                        <Col md="8">
                                            <FormGroup className="mb-3">
                                                <Label for="password">Password</Label>
                                                <Input type="text" id="password" className="form-control" placeholder="Your Password" />
                                            </FormGroup>
                                        </Col>

                                        <Col md="4">
                                            <FormGroup className="mb-3">
                                                <Label for="state">State</Label>
                                                <Input type="select" id="state">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <FormGroup check className="d-flex p-0">
                                                <FormGroup check className="d-flex p-0">
                                                    <FormGroup check className="d-flex p-0">
                                                        <Input
                                                            type="checkbox"
                                                            id="formCheck3"
                                                            className="m-1"
                                                        />
                                                        <Label check htmlFor="formCheck3" className="form-check-label">
                                                            remember me
                                                        </Label>
                                                    </FormGroup>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <div className="text-end">
                                                <Button type="submit" color="secondary">Submit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="card equal-card">
                            <div className="card-header">
                                <h5>Form With Grid With Icon</h5>
                            </div>
                            <div className="card-body">
                                <Form className="app-form">
                                    <Row>
                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label for="firstNameIcon">First Name</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-user"></i>
                                                    <Input type="text" id="firstNameIcon" className="form-control pa-s-34" placeholder="First Name" />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label for="emailIcon">Email address</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-mail"></i>
                                                    <Input type="email" id="emailIcon" className="form-control pa-s-34" placeholder="Your Email" />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <FormGroup className="mb-3">
                                                <Label for="phoneIcon">Phone Number</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-phone-call"></i>
                                                    <Input type="text" id="phoneIcon" className="form-control pa-s-34 contact-input" placeholder="Your Phone Number" />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col md="8">
                                            <FormGroup className="mb-3">
                                                <Label for="passwordIcon">Password</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-lock"></i>
                                                    <Input type="text" id="passwordIcon" className="form-control pa-s-34" placeholder="Your Password" />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col md="4">
                                            <FormGroup className="mb-3">
                                                <Label for="stateIcon">State</Label>
                                                <Input type="select" id="stateIcon">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>


                                        <Col xs="12">
                                            <FormGroup check className="d-flex p-0">
                                                <FormGroup check className="d-flex p-0">
                                                    <FormGroup check className="d-flex p-0">
                                                        <Input
                                                            type="checkbox"
                                                            id="formCheck4"
                                                            className="m-1"
                                                        />
                                                        <Label check htmlFor="formCheck3" className="form-check-label">
                                                            remember me
                                                        </Label>
                                                    </FormGroup>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>


                                        <Col xs="12">
                                            <div className="text-end">
                                                <Button type="submit" color="dark">Submit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Form With Gutters</h5>
                            </div>
                            <div className="card-body">
                                <Form className="app-form">
                                    <Row className="g-1">

                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label for="firstName">First Name</Label>
                                                <Input type="text" id="firstName" className="form-control" placeholder="Your Name" />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label for="email">Email address</Label>
                                                <Input type="text" id="email" className="form-control" placeholder="Your Email" />
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <FormGroup className="mb-3">
                                                <Label for="phone">Phone Number</Label>
                                                <Input type="text" id="phone" className="form-control contact-input" placeholder="Your Phone Number" />
                                            </FormGroup>
                                        </Col>

                                        <Col md="8">
                                            <FormGroup className="mb-3">
                                                <Label for="password">Password</Label>
                                                <Input type="text" id="password" className="form-control" placeholder="Your Password" />
                                            </FormGroup>
                                        </Col>

                                        <Col md="4">
                                            <FormGroup className="mb-3">
                                                <Label for="state">State</Label>
                                                <Input type="select" id="state">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <FormGroup check className="d-flex p-0">
                                                <Input
                                                    type="checkbox"
                                                    id="formCheck6"
                                                    className="m-1"
                                                />
                                                <Label check htmlFor="formCheck3" className="form-check-label">
                                                    remember me
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <div className="text-end">
                                                <Button type="submit" color="primary">Submit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Form With Gutters With Icon</h5>
                            </div>
                            <div className="card-body">
                                <Form className="app-form">
                                    <Row className="g-1">
                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label for="firstNameIcon">First Name</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-user"></i>
                                                    <Input type="text" id="firstNameIcon" className="form-control pa-s-34" placeholder="Your Name" />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <Label for="emailIcon">Email address</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-mail"></i>
                                                    <Input type="text" id="emailIcon" className="form-control pa-s-34" placeholder="Your Email" />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <FormGroup className="mb-3">
                                                <Label for="phoneIcon">Phone Number</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-phone-call"></i>
                                                    <Input type="text" id="phoneIcon" className="form-control contact-input pa-s-34" placeholder="Your Phone Number" />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col md="8">
                                            <FormGroup className="mb-3">
                                                <Label for="passwordIcon">Password</Label>
                                                <div className="icon-form">
                                                    <i className="ti ti-lock"></i>
                                                    <Input type="text" id="passwordIcon" className="form-control pa-s-34" placeholder="Your Password" />
                                                </div>
                                            </FormGroup>
                                        </Col>

                                        <Col md="4">
                                            <FormGroup className="mb-3">
                                                <Label for="stateIcon">State</Label>
                                                <Input type="select" id="stateIcon">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <FormGroup check className="d-flex p-0">
                                                <Input
                                                    type="checkbox"
                                                    id="formCheck7"
                                                    className="m-1"
                                                />
                                                <Label check htmlFor="formCheck3" className="form-check-label">
                                                    remember me
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <div className="text-end">
                                                <Button type="submit" color="light">Submit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>

                    <Col xs="12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Inline Forms</h5>
                            </div>
                            <div className="card-body">
                                <Form className="app-form inline-form">
                                    <Row className="row-cols-lg-auto g-2 align-items-center">
                                        <Col xs="12">
                                            <Label for="username" className="visually-hidden">Username</Label>
                                            <InputGroup>
                                                <InputGroupText>@</InputGroupText>
                                                <Input type="text" id="username" className="form-control" placeholder="Username" />
                                            </InputGroup>
                                        </Col>

                                        <Col  className="form-preference-width" xs="12">
                                            <Label for="preference" className="visually-hidden">Preference</Label>
                                            <Input type="select" id="preference" defaultValue="1">
                                                <option>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Input>
                                        </Col>

                                        <Col  className="form-check-width" xs="12">
                                            <FormGroup check className="d-flex p-0">
                                                <FormGroup check className="d-flex p-0">
                                                    <Input
                                                        type="checkbox"
                                                        id="formCheck9"
                                                        className="m-1"
                                                    />
                                                    <Label check htmlFor="formCheck3" className="form-check-label">
                                                        Remember me
                                                    </Label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12">
                                            <div className="text-end">
                                                <Button type="submit" color="primary">Submit</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default DefaultForms;
