import React from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const CandlestickChart = () => {
    return (
        <div>
            <Container fluid >
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Candlestick</h4>
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
                                <a href="#" className="f-s-14 f-w-500">Candlestick</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader >
                                <h5>Basic Candlestick Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.BasicCandlestickChart}
                                    type={'candlestick'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'candlestick',
                                            height: 350
                                        },
                                        title: {
                                            text: 'CandleStick Chart',
                                            align: 'left'
                                        },
                                        plotOptions: {
                                            candlestick: {
                                                colors: {
                                                    upward: getLocalStorageItem('color-primary', '#48BECE'),
                                                    downward: getLocalStorageItem('color-secondary', '#8B8476')
                                                }
                                            }
                                        },
                                        fill: {
                                            colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34']
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },
                                        yaxis: {
                                            tooltip: {
                                                enabled: true
                                            }
                                        }
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

export default CandlestickChart;