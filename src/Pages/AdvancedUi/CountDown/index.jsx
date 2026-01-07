import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countDownDate = new Date('December 31, 2024 23:59:59').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(timerId);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        };

        const timerId = setInterval(updateTimer, 1000);

        updateTimer();

        return () => clearInterval(timerId);
    }, []);
    return (
        <div>

            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Count Down</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                            <span>
                              <i className="ph-duotone  ph-briefcase-metal f-s-16"></i> Advance UI
                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Count Down</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>With Seconds</h5>
                                <p>You can add only seconds countdown using
                                    <span className="text-danger"> countdown-seconds </span>
                                    class
                                </p>
                            </CardHeader>
                            <CardBody>
                                <div className="countdown-seconds">
                                    <ul className="timer">
                                        <li className="seconds fw-bold">{timeLeft.seconds}</li>
                                        <li className="timer-countdown">seconds</li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>With minutes</h5>
                                <p>You can add minutes countdown style using <span
                                    className="text-danger"> app-countdown-min </span>
                                    class.</p>
                            </CardHeader>
                            <CardBody>
                                <div className="app-countdown-min">
                                    <ul className="timer">
                                        <li className="countdown">
                                            <span className="minutes time-value fw-bold">{timeLeft.minutes}</span>
                                            <span className="timer-countdown f-s-14 f-w-400">Minutes </span>
                                        </li>
                                        <li className="app-line">:</li>
                                        <li className="countdown">
                                            <span className="seconds fw-bold">{timeLeft.seconds}</span>
                                            <span className="timer-countdown f-s-14 f-w-400">Seconds</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>With Hours</h5>
                                <p>You can add hours countdown using <span
                                    className="text-danger">app-countdown-hours</span>
                                    class.</p>
                            </CardHeader>
                            <CardBody>
                                <div className="app-countdown-hours">
                                    <ul className="timer">
                                        <li className="app-countdown countdown-border">
                                            <span className="Hours f-s-20 fw-bold">1</span>
                                            <span className="timer-countdown">Hours</span>
                                        </li>
                                        <li className="app-countdown">
                                            <span className="minutes f-s-20 fw-bold">57</span>
                                            <span className="timer-countdown">Minutes</span>
                                        </li>
                                        <li className="app-countdown countdown-border-1">
                                            <span className="seconds f-s-20 fw-bold">35</span>
                                            <span className="timer-countdown">Seconds</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Countdown Styles</h5>
                                <p>You can add countdown using <span
                                    className="text-danger">app-countdown-background</span> class.
                                </p>
                            </CardHeader>
                            <CardBody>
                                <div className="app-countdown-background">
                                    <ul className="timer">
                                        <li className="countdown">
                                            <h6 className="days mb-0 f-s-20 fw-bold">{timeLeft.days}</h6>
                                            <p className="timer-countdown">Days</p>
                                        </li>
                                        <li className="countdown">
                                            <h6 className="hours mb-0 f-s-20 fw-bold">{timeLeft.hours}</h6>
                                            <p className="timer-countdown">Hours</p>
                                        </li>
                                        <li className="countdown">
                                            <h6 className="minutes mb-0 f-s-20 fw-bold">{timeLeft.minutes}</h6>
                                            <p className="timer-countdown">Min</p>
                                        </li>
                                        <li className="countdown">
                                            <h6 className="seconds mb-0 f-s-20 fw-bold">{timeLeft.seconds}</h6>
                                            <p className="timer-countdown">Sec</p>
                                        </li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <CardHeader>
                                <h5>Countdown Styles</h5>
                                <p>You can add countdown using <span className="text-danger">app-countdown-circle</span>
                                    class.</p>
                            </CardHeader>
                            <CardBody>
                                <div className="app-countdown-circle">
                                    <ul className="timer">
                                        <li className="countdown">
                                            <span className="days fw-medium f-s-20 bg-light-primary">72</span>
                                            <span className="timer-countdown bg-primary">Day</span>
                                        </li>
                                        <li className="countdown">
                                            <span className="hours fw-medium f-s-20 bg-light-secondary">1</span>
                                            <span className="timer-countdown bg-secondary">Hour</span>
                                        </li>
                                        <li className="countdown">
                                            <span className="minutes fw-medium f-s-20 bg-light-success">57</span>
                                            <span className="timer-countdown bg-success">Minutes</span>
                                        </li>
                                        <li className="countdown">
                                            <span className="seconds fw-medium f-s-20 bg-light-info">35</span>
                                            <span className="timer-countdown bg-info">Seconds</span>
                                        </li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Background Countdown</h5>
                                <p>You can add countdown with background using
                                    <span className="text-danger"> app-countdown-square</span> class.
                                </p>
                            </CardHeader>
                            <div className="card-body d-flex-center">
                                <div className="app-countdown-square">
                                    <ul className="timer">
                                        <li className="countdown">
                                            <span className="days f-s-20 fw-bold">{timeLeft.days}</span>
                                            <span className="day">Day</span>
                                        </li>
                                        <li className="countdown">
                                            <span className="hours f-s-20 fw-bold">{timeLeft.hours}</span>
                                            <span className="hour">Hour</span>
                                        </li>
                                        <li className="countdown">
                                            <span className="minutes f-s-20 fw-bold">{timeLeft.minutes}</span>
                                            <span className="min">Min</span>
                                        </li>
                                        <li className="countdown">
                                            <span className="seconds f-s-20 fw-bold">{timeLeft.seconds}</span>
                                            <span className="sec">Sec</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Countdown;