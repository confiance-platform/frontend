
import React, { useState } from "react";
import { Button, Input, Row, Col, Card, CardHeader, CardBody, Container } from "reactstrap";

const TouchSpin = () => {
    const initialValues = [25, 25, 25];
    const [values, setValues] = useState(initialValues);

    const handleIncrement = (index) => {
        const newValues = [...values];
        newValues[index] += 1;
        setValues(newValues);
    };

    const handleDecrement = (index) => {
        const newValues = [...values];
        newValues[index] -= 1;
        setValues(newValues);
    };

    const buttonColors = ["primary", "secondary", "success"];
    const buttonStyles = ["btn-primary ", "btn-secondary  ", "btn-success",];
    const buttonStyles1 = ["btn-primary text-white", "btn-light-secondary border-0", "btn-outline-success",];
    const roundButtonStyles = [
        "btn-primary",
        "btn-secondary",
        "btn-success",
    ];

    const squareButtonStyles = [
        "btn-primary",
        "btn-secondary",
        "btn-success",
    ];

    return (
        <Container fluid>
            <Row className=" m-1">
                <Col xs={12}>
                    <h4 className="main-title">Touchspin</h4>
                    <ul className="app-line-breadcrumbs mb-3">
                        <li className="">
                            <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="#" className="f-s-14 f-w-500">Touchspin</a>
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row className="main-touchspin">
                <Col xl="3">
                    <Card>
                        <CardHeader>
                            <h5>Basic Touchspin</h5>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {values.map((value, index) => (
                                    <Col key={index} className="mt-2">
                                        <div className="simplespin">
                                            <button
                                                className={`circle-btn btn-light-${buttonColors[index]} decrement`}
                                                onClick={() => handleDecrement(index)}
                                            >
                                                -
                                            </button>
                                            <Input
                                                type="text"
                                                className="app-small-touchspin count"
                                                value={value}
                                                readOnly
                                            />
                                            <button
                                                className={`circle-btn btn-light-${buttonColors[index]} increment`}
                                                onClick={() => handleIncrement(index)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="3">
                    <Card className="equal-card">
                        <CardHeader>
                            <h5>Basic Touchspin</h5>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {values.map((value, index) => (
                                    <Col key={index} className={`mt-2 ${index === 0 ? "" : "col"}`}>
                                        <div className="simplespin">
                                            <a
                                                role="button"
                                                className="circle-btn decrement"
                                                onClick={() => handleDecrement(index)}
                                            >
                                                -
                                            </a>
                                            <Input
                                                type="text"
                                                className="app-small-touchspin count"
                                                value={value}
                                                readOnly
                                            />
                                            <a
                                                role="button"
                                                className="circle-btn increment"
                                                onClick={() => handleIncrement(index)}
                                            >
                                                +
                                            </a>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col xl="3">
                    <Card className="equal-card">
                        <CardHeader>
                            <h5>Outline Touchspin</h5>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {values.map((value, index) => (
                                    <Col xs={12} key={index} className={`mt-3 ${index === 0 ? "" : "col"}`}>
                                        <div className="custom-touchspin">
                                            <button
                                                role="button"
                                                className={`touchspin-circle-btn text-white ${buttonStyles[index]} decrement`}
                                                onClick={() => handleDecrement(index)}
                                            >
                                                -
                                            </button>
                                            <Input
                                                type="text"
                                                className={`app-small-touchspin b-1-${buttonStyles[index].split('-')[1]} count`}
                                                value={value}
                                                readOnly
                                            />
                                            <button
                                                role="button"
                                                className={`touchspin-circle-btn text-white ${buttonStyles[index]} increment`}
                                                onClick={() => handleIncrement(index)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col xl="3">
                    <Card className="equal-card">
                        <CardHeader>
                            <h5>Radius Touchspin</h5>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {values.map((value, index) => (
                                    <Col xs={12} key={index} className="mt-3">
                                        <div className="custom-touchspin">
                                            <button
                                                type="button"
                                                className={`touchspin-circle-btn ${buttonStyles1[index]} decrement`}
                                                onClick={() => handleDecrement(index)}
                                            >
                                                -
                                            </button>
                                            <Input
                                                type="text"
                                                className={`app-small-touchspin rounded-pill b-1-${buttonStyles1[index].split('-')[1]} count`}
                                                value={value}
                                                readOnly
                                            />
                                            <button
                                                type="button"
                                                className={`touchspin-circle-btn ${buttonStyles1[index]} increment`}
                                                onClick={() => handleIncrement(index)}
                                            >
                                                +
                                            </button>

                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col xxl="6" xl="6" lg="12">
                    <Card>
                        <CardHeader>
                            <h5>Custom Round Touchspin</h5>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                {roundButtonStyles.map((style, index) => (
                                    <Col key={index} md="6" lg="4" className="coustom-touchspin-col">
                                        <div className="simplerounded d-flex">
                                            <Button
                                                className={`touchspin-circle-btn ${style} decrement`}
                                                onClick={() => handleDecrement(index)}
                                            >
                                                -
                                            </Button>
                                            <Input
                                                type="text"
                                                className="app-touchspin border-0 count"
                                                value={values[index]}
                                                readOnly
                                            />
                                            <Button
                                                className={`touchspin-circle-btn ${style} increment`}
                                                onClick={() => handleIncrement(index)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>


                <Col xl="6">
                    <Card>
                        <CardHeader>
                            <h5>Custom Square Touchspin</h5>
                        </CardHeader>
                        <CardBody>
                            <Row className="coustom-touchspin-col">
                                {squareButtonStyles.map((style, index) => (
                                    <Col key={index} md="6" lg="4" className="coustom-touchspin-col">
                                        <div className="simplerounded d-flex">
                                            <Button
                                                className={`btn btn${buttonStyles[index].split('-')[1]} decrement`}
                                                onClick={() => handleDecrement(index)}
                                            >
                                                -
                                            </Button>
                                            <Input
                                                type="text"
                                                className="app-touchspin border-0 count"
                                                value={values[index]}
                                                readOnly
                                            />
                                            <Button
                                                className={`btn btn-${buttonStyles[index].split('-')[1]} increment`}
                                                onClick={() => handleIncrement(index)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Card>
                </Col>


            </Row>
        </Container>
    );
};

export default TouchSpin;
