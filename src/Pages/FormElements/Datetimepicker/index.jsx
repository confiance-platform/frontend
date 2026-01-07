
import React, {useState} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, CardFooter, Form} from "reactstrap";

import Flatpickr from 'react-flatpickr';



const Datetimepicker = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [dateTime, setDateTime] = useState(null);
    const [range, setRange] = useState([null, null]);
    const [multipleDates, setMultipleDates] = useState([]);
    const [humanDates, setHumanDates] = useState(null);
    const [weekNumbers, setWeekNumbers] = useState(null);
    const [timeWithLimits, setTimeWithLimits] = useState(null);
    const [hourTime, setHourTime] = useState(null);
    const [inlineDate, setInlineDate] = useState(null);

    return (
        <>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Date Picker</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Date Picker</a>
                            </li>
                        </ul>
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Basic</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="dates">
                                    <form className="app-form">
                                        <Flatpickr
                                            className="form-control basic-date"
                                            value={date}
                                            onChange={(selectedDates) => setDate(selectedDates[0])}
                                            options={{
                                                dateFormat: 'Y-m-d',
                                            }}
                                            placeholder="YYYY-MM-DD"
                                        />
                                    </form>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Time Picker</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control date-time-picker"
                                        value={time}
                                        onChange={(selectedDates) => setTime(selectedDates[0])}
                                        options={{
                                            enableTime: true,
                                            noCalendar: true,
                                            dateFormat: 'H:i',
                                        }}
                                        placeholder="12:00"
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Datetime Picker</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control time-picker"
                                        value={dateTime}
                                        onChange={(selectedDates) => setDateTime(selectedDates[0])}
                                        options={{
                                            dateFormat: 'Y-m-d', // Set the date format
                                        }}
                                        placeholder="YYYY-MM-DD" // Placeholder for the input field
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Range Picker</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control picker-range"
                                        value={range}
                                        onChange={(dates) => setRange(dates)}
                                        options={{
                                            mode: "range",
                                            dateFormat: "Y-m-d",
                                        }}
                                        placeholder="YYYY-MM-DD to YYYY-MM-DD"
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>


                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Human-friendly Dates</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control human-friendly-dates"
                                        value={humanDates}
                                        onChange={(date) => setHumanDates(date[0])}
                                        options={{
                                            dateFormat: "m-d-Y",
                                        }}
                                        placeholder="MM-DD-YYYY"
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>


                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Multiple Dates</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control multiple-dates"
                                        value={multipleDates}
                                        onChange={(dates) => setMultipleDates(dates)}
                                        options={{
                                            mode: "multiple",
                                            dateFormat: "Y-m-d",
                                        }}
                                        placeholder="YYYY-MM-DD"
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Week Numbers</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control week-numbers"
                                        value={weekNumbers}
                                        onChange={(date) => setWeekNumbers(date[0])}
                                        options={{
                                            weekNumbers: true,
                                            dateFormat: "Y-m-d",
                                        }}
                                        placeholder="YYYY-MM-DD"
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Time Picker with Limits</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control time-picker-limits"
                                        value={timeWithLimits}
                                        onChange={(dates) => setTimeWithLimits(dates[0])}
                                        options={{
                                            enableTime: true,
                                            noCalendar: true,
                                            dateFormat: "H:i",
                                            minTime: "08:00",
                                            maxTime: "18:00",
                                        }}
                                        placeholder="08:00 to 18:00"
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>24 Hour Time Picker</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control hour-time-picker"
                                        value={hourTime}
                                        onChange={(dates) => setHourTime(dates[0])}
                                        options={{
                                            enableTime: true,
                                            noCalendar: true,
                                            dateFormat: "H:i",
                                        }}
                                        placeholder="HH:mm"
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card>
                            <CardHeader>
                                <h5>Inline</h5>
                            </CardHeader>
                            <CardBody>
                                <Form className="app-form">
                                    <Flatpickr
                                        className="form-control inline mb-2"
                                        value={inlineDate}
                                        onChange={(date) => setInlineDate(date[0])}
                                        options={{
                                            inline: true,
                                            dateFormat: "Y-m-d",
                                        }}
                                        placeholder="YYYY-MM-DD"
                                    />
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default Datetimepicker;
