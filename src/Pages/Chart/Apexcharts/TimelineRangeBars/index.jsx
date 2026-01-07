import React from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const TimelineRangeCharts = () => {
    return (
        <div>
            <Container fluid>
                <Row className="row m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Timeline & Range Charts</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-chart-pie-slice f-s-16"></i> Chart
                      </span>
                                </a>
                            </li>
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        Apexcharts
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Timeline & Range Charts</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Basic Timeline Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            data: [
                                                {
                                                    x: 'Code',
                                                    y: [
                                                        new Date('2019-03-02').getTime(),
                                                        new Date('2019-03-04').getTime()
                                                    ]
                                                },
                                                {
                                                    x: 'Test',
                                                    y: [
                                                        new Date('2019-03-04').getTime(),
                                                        new Date('2019-03-08').getTime()
                                                    ]
                                                },
                                                {
                                                    x: 'Validation',
                                                    y: [
                                                        new Date('2019-03-08').getTime(),
                                                        new Date('2019-03-12').getTime()
                                                    ]
                                                },
                                                {
                                                    x: 'Deployment',
                                                    y: [
                                                        new Date('2019-03-12').getTime(),
                                                        new Date('2019-03-18').getTime()
                                                    ]
                                                }
                                            ]
                                        }]
                                    }
                                    type={'rangeBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'rangeBar',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true
                                            }
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE')],
                                        responsive: [{
                                            breakpoint: 768,
                                            options: {
                                                chart: {
                                                    height: 280,
                                                },
                                                yaxis: {
                                                    show: false
                                                },
                                            },
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Advanced Timeline (Multiple range)</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.AdvanceTimeline}
                                    type={'rangeBar'}
                                    height={450}
                                    options={{
                                        chart: {
                                            height: 450,
                                            type: 'rangeBar',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                barHeight: '80%'
                                            }
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        stroke: {
                                            width: 1
                                        },
                                        fill: {
                                            type: 'solid',
                                            opacity: 0.6
                                        },

                                        colors: ['#8B8476', '#AECC34', '#FF5E40'],
                                        legend: {
                                            position: 'top',
                                            horizontalAlign: 'left'
                                        },
                                        responsive: [{
                                            breakpoint: 768,
                                            options: {
                                                chart: {
                                                    height: 280,
                                                },
                                                yaxis: {
                                                    show: false
                                                },
                                            },
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Timeline – Grouped Rows</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.AdvanceGroupedRows}
                                    type={'rangeBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'rangeBar',
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        plotOptions: {
                                            bar: {
                                                horizontal: true,
                                                barHeight: '50%',
                                                rangeBarGroupRows: true,
                                            }
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7', '#ACB8C8', '#231928'],
                                        fill: {
                                            type: 'solid'
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        legend: {
                                            position: 'right'
                                        },
                                        tooltip: {
                                            custom: function () {
                                                return '';
                                            }
                                        },
                                        responsive: [{
                                            breakpoint: 768,
                                            options: {
                                                chart: {
                                                    height: 280,
                                                },
                                                yaxis: {
                                                    show: false
                                                },
                                                legend: {
                                                    show: false
                                                },
                                            },
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TimelineRangeCharts;