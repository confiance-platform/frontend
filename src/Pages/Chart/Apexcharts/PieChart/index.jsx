import React, {useState} from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const PieChart = () => {
    const [series, setSeries] = useState([44, 33, 54, 45]);

    const appendData = () => {
        const newSeries = [...series, Math.floor(Math.random() * 100) + 1];
        setSeries(newSeries);
    };

    const removeData = () => {
        const newSeries = series.slice(0, -1);
        setSeries(newSeries);
    };

    const resetData = () => {
        setSeries([44, 55, 13, 33]);
    };
    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Pie</h4>
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
                                <a href="#" className="f-s-14 f-w-500">Pie</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xl={4}>
                        <Card>
                            <CardHeader>
                                <h5> Simple Pie Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[44, 55, 13, 43, 22]}
                                    type={'pie'}
                                    height={340}
                                    options={{
                                        chart: {
                                            height: 340,
                                            type: 'pie',
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249'],
                                        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                                        legend: {
                                            position: 'bottom'
                                        },
                                        responsive: [{
                                            breakpoint: 1366,
                                            options: {
                                                chart: {
                                                    height: 250
                                                },
                                                legend: {
                                                    show: false,
                                                },
                                            }
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xl={4}>
                        <Card>
                            <CardHeader>
                                <h5>Simple Donut Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[44, 55, 41, 17, 15]}
                                    type={'donut'}
                                    height={340}
                                    options={{
                                        chart: {
                                            type: 'donut',
                                            height: 340,
                                        },
                                        legend: {
                                            position: 'bottom'
                                        },
                                        colors: ['#535AE7', '#E5E3E0', '#48443D', getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476')],
                                        responsive: [{
                                            breakpoint: 1366,
                                            options: {
                                                chart: {
                                                    height: 250
                                                },
                                                legend: {
                                                    show: false,
                                                },
                                            }
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xl={4}>
                        <Card>
                            <CardHeader>
                                <h5> Gradient Donut Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[44, 55, 41, 17]}
                                    type={'donut'}
                                    height={340}
                                    options={{
                                        chart: {
                                            height: 340,
                                            type: 'donut',
                                        },
                                        plotOptions: {
                                            pie: {
                                                startAngle: -90,
                                                endAngle: 270
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        fill: {
                                            type: 'gradient',
                                            colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249'],
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249'],
                                        legend: {
                                            formatter: function (val, opts) {
                                                return val + " - " + opts.w.globals.series[opts.seriesIndex]
                                            },
                                            position: 'bottom'
                                        },
                                        title: {
                                            text: ''
                                        },

                                        responsive: [{
                                            breakpoint: 1366,
                                            options: {
                                                chart: {
                                                    height: 250
                                                },
                                                legend: {
                                                    show: false,
                                                },
                                            }
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xl={4}>
                        <Card>
                            <CardHeader>
                                <h5> Patterned Donut Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[44, 55, 41, 17, 15]}
                                    type={'donut'}
                                    height={380}
                                    options={{
                                        chart: {
                                            height: 380,
                                            type: 'donut',
                                            dropShadow: {
                                                enabled: true,
                                                color: '#111',
                                                top: -1,
                                                left: 3,
                                                blur: 3,
                                                opacity: 0.2
                                            }
                                        },
                                        stroke: {
                                            width: 0,
                                        },
                                        plotOptions: {
                                            pie: {
                                                donut: {
                                                    labels: {
                                                        show: true,
                                                        total: {
                                                            showAlways: true,
                                                            show: true
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                                        dataLabels: {
                                            dropShadow: {
                                                blur: 3,
                                                opacity: 0.8
                                            }
                                        },
                                        fill: {
                                            type: 'pattern',
                                            opacity: 1,
                                            pattern: {
                                                enabled: true,
                                                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
                                            },
                                        },
                                        states: {
                                            hover: {
                                                filter: 'none'
                                            }
                                        },
                                        theme: {
                                            palette: 'palette2'
                                        },
                                        title: {
                                            text: "Favourite Movie Type"
                                        },
                                        legend: {
                                            position: 'bottom',
                                        },
                                        responsive: [{
                                            breakpoint: 1366,
                                            options: {
                                                chart: {
                                                    height: 250
                                                },
                                                legend: {
                                                    show: false,
                                                },
                                            }
                                        }],
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xl={4}>
                        <Card className=" equal-card">
                            <CardHeader>
                                <h5> Pie Chart with Image fill</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[44, 33, 54, 45]}
                                    type={'pie'}
                                    height={380}
                                    options={{
                                        chart: {
                                            height: 340,
                                            type: 'pie',
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249'],
                                        fill: {
                                            type: 'image',
                                            opacity: 0.85,
                                            image: {
                                                src: ['../assets/images/blog-app/03.jpg', '../assets/images/blog-app/03.jpg', '../assets/images/blog-app/03.jpg', '../assets/images/blog-app/03.jpg'],
                                                width: 25,
                                                imagedHeight: 25
                                            },
                                        },
                                        stroke: {
                                            width: 4
                                        },
                                        legend: {
                                            position: 'bottom',
                                        },
                                        dataLabels: {
                                            enabled: true,
                                            style: {
                                                colors: ['#111']
                                            },
                                            background: {
                                                enabled: true,
                                                foreColor: '#fff',
                                                borderWidth: 0
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xl={4}>
                        <Card>
                            <CardHeader>
                                <h5> Updating Donut Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <CardBody>
                                    <div
                                        className="updating-btn-box actions text-center d-flex gap-1 justify-content-center">
                                        <button className="btn btn-sm btn-primary" onClick={appendData}>
                                            + ADD
                                        </button>
                                        <button className="btn btn-sm btn-danger" onClick={removeData}>
                                            - REMOVE
                                        </button>
                                        <button className="btn btn-sm btn-success" onClick={resetData}>
                                            RESET
                                        </button>
                                    </div>
                                    <ApexCharts
                                        series={series}
                                        type={"donut"}
                                        height={340}
                                        options={{
                                            chart: {
                                                height: 340,
                                                type: "donut",
                                            },
                                            dataLabels: {
                                                enabled: false,
                                            },
                                            markers: {
                                                colors: [getLocalStorageItem("color-primary", "#48BECE"), getLocalStorageItem("color-secondary", "#8B8476"), "#AECC34", "#FF5E40", "#F9D249", "#535AE7", "#E5E3E0", "#48443D",],
                                            },
                                            fill: {
                                                colors: [getLocalStorageItem("color-primary", "#48BECE"), getLocalStorageItem("color-secondary", "#8B8476"), "#AECC34", "#FF5E40", "#F9D249", "#535AE7", "#E5E3E0", "#48443D",],
                                            },
                                            labels: ["Device 1", "Device 2", "Device 3", "Device 4"],
                                            colors: [getLocalStorageItem("color-primary", "#48BECE"), getLocalStorageItem("color-secondary", "#8B8476"), "#AECC34", "#FF5E40", "#F9D249", "#535AE7", "#E5E3E0", "#48443D",],
                                            responsive: [
                                                {
                                                    breakpoint: 1366,
                                                    options: {
                                                        chart: {
                                                            height: 240,
                                                        },
                                                        legend: {
                                                            show: false,
                                                        },
                                                    },
                                                },
                                            ],
                                            legend: {
                                                position: "bottom",
                                                offsetY: 0,
                                            },
                                        }}
                                    />
                                </CardBody>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xl={4}>
                        <Card className=" equal-card">
                            <CardHeader>
                                <h5> Monochrome Pie Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[25, 15, 44, 55, 41, 17]}
                                    type={"pie"}
                                    height={340}
                                    options={{
                                        chart: {
                                            height: 340,
                                            type: 'pie',
                                        },
                                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        theme: {
                                            monochrome: {
                                                enabled: true
                                            }
                                        },
                                        plotOptions: {
                                            pie: {
                                                dataLabels: {
                                                    offset: -5
                                                }
                                            }
                                        },
                                        title: {
                                            text: "Monochrome Pie"
                                        },
                                        dataLabels: {
                                            formatter(val, opts) {
                                                const name = opts.w.globals.labels[opts.seriesIndex]
                                                return name + val.toFixed(1) + '%'
                                            }
                                        },
                                        legend: {
                                            show: false
                                        },
                                        fill: {
                                            colors: [getLocalStorageItem('color-primary', '#48BECE')]
                                        },
                                        responsive: [{
                                            breakpoint: 567,
                                            options: {
                                                chart: {
                                                    height: 250
                                                },
                                                legend: {
                                                    show: false,
                                                },
                                            }
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5> Basic Polar-Area Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[14, 23, 21, 17, 15]}
                                    type={"polarArea"}
                                    height={340}
                                    options={{
                                        chart: {
                                            type: 'polarArea',
                                        },
                                        stroke: {
                                            colors: ['#fff']
                                        },
                                        fill: {
                                            opacity: 0.8
                                        },
                                        legend: {
                                            position: 'bottom'
                                        },
                                        colors: [getLocalStorageItem('color-primary','#48BECE'),getLocalStorageItem('color-secondary','#8B8476'), '#AECC34', '#FF5E40', '#F9D249'],
                                        responsive: [{
                                            breakpoint: 1366,
                                            options: {
                                                chart: {
                                                    height:250,
                                                },
                                            }
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className=" equal-card">
                            <CardHeader>
                                <h5> Polar-Area MonoChrome</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[42, 30, 52, 40, 56]}
                                    type={"polarArea"}
                                    height={340}
                                    options={{
                                        chart: {
                                            height: 340,
                                            type: 'polarArea'
                                        },
                                        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D'],
                                        fill: {
                                            opacity: 1,

                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7', '#E5E3E0'],
                                        stroke: {
                                            width: 1,
                                            colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7', '#E5E3E0'],
                                        },
                                        yaxis: {
                                            show: false
                                        },
                                        legend: {
                                            position: 'bottom',
                                        },

                                        plotOptions: {
                                            polarArea: {
                                                rings: {
                                                    strokeWidth: 0
                                                },
                                                colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7', '#E5E3E0', '#48443D',],
                                                spokes: {
                                                    strokeWidth: 0,
                                                },
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

export default PieChart;