import React, {useEffect} from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem, updateQuarterChart} from "@/_helper/index.js";
import {ApexChartsData} from "@/Data/ApexCharts/index.js";
import dayjs from "dayjs";
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

dayjs.extend(quarterOfYear);

const ColumnChart = () => {

    useEffect(() => {
        chart.addEventListener('dataPointSelection', function (e, chart, opts) {
            var quarterChartEl = document.querySelector("#chart-quarter");
            var yearChartEl = document.querySelector("#chart-year");

            if (opts.selectedDataPoints[0].length === 1) {
                if (quarterChartEl.classList.contains("active")) {
                    updateQuarterChart(chart, 'barQuarter')
                } else {
                    yearChartEl.classList.add("chart-quarter-activated")
                    quarterChartEl.classList.add("active");
                    updateQuarterChart(chart, 'barQuarter')
                }
            } else {
                updateQuarterChart(chart, 'barQuarter')
            }

            if (opts.selectedDataPoints[0].length === 0) {
                yearChartEl.classList.remove("chart-quarter-activated")
                quarterChartEl.classList.remove("active");
            }

        })
    }, []);

    const colors = [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#06b38b', '#eb565a', '#fbc05b', '#29b0f2', '#e8eaf2'];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function makeData() {
        var dataSet = shuffleArray(ApexChartsData.ColumnArrayData)

        return [{
            x: "2011",
            y: dataSet[0].y,
            color: colors[0],
            quarters: dataSet[0].quarters
        }, {
            x: "2012",
            y: dataSet[1].y,
            color: colors[1],
            quarters: dataSet[1].quarters
        }, {
            x: "2013",
            y: dataSet[2].y,
            color: colors[2],
            quarters: dataSet[2].quarters
        }, {
            x: "2014",
            y: dataSet[3].y,
            color: colors[3],
            quarters: dataSet[3].quarters
        }, {
            x: "2015",
            y: dataSet[4].y,
            color: colors[4],
            quarters: dataSet[4].quarters
        }, {
            x: "2016",
            y: dataSet[5].y,
            color: colors[5],
            quarters: dataSet[5].quarters
        }]
    }

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Column</h4>
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
                                <a href="#" className="f-s-14 f-w-500">Column</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Basic Column Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Net Profit',
                                            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                                        }, {
                                            name: 'Revenue',
                                            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                                        }, {
                                            name: 'Free Cash Flow',
                                            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                                        }]
                                    }
                                    type={'bar'}
                                    height={350}
                                    options={{
                                        plotOptions: {
                                            bar: {
                                                horizontal: false,
                                                columnWidth: '55%',
                                                endingShape: 'rounded'
                                            },
                                        },
                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34'],
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            show: true,
                                            width: 2,
                                            colors: ['transparent']
                                        },
                                        xaxis: {
                                            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                                        },
                                        yaxis: {
                                            title: {
                                                text: ''
                                            }
                                        },
                                        fill: {
                                            opacity: 1
                                        },
                                        tooltip: {
                                            y: {
                                                formatter: function (val) {
                                                    return "$ " + val + " thousands"
                                                }
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Column Chart with Datalabels</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Inflation',
                                            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
                                        }]
                                    }
                                    height={350}
                                    type='bar'
                                    options={{
                                        plotOptions: {
                                            bar: {
                                                borderRadius: 10,
                                                dataLabels: {
                                                    position: 'top',
                                                },
                                            }
                                        },
                                        dataLabels: {
                                            enabled: true,
                                            formatter: function (val) {
                                                return val + "%";
                                            },
                                            offsetY: -20,
                                            style: {
                                                fontSize: '12px',
                                                colors: ["#eb565b"]
                                            }
                                        },
                                        xaxis: {
                                            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                            position: 'top',
                                            axisBorder: {
                                                show: false
                                            },
                                            axisTicks: {
                                                show: false
                                            },
                                            crosshairs: {
                                                fill: {
                                                    type: 'gradient',
                                                    gradient: {
                                                        colorFrom: '#D8E3F0',
                                                        colorTo: '#BED1E6',
                                                        stops: [0, 100],
                                                        opacityFrom: 0.4,
                                                        opacityTo: 0.5,
                                                    }
                                                }
                                            },
                                            tooltip: {
                                                enabled: true,
                                            }
                                        },
                                        yaxis: {
                                            axisBorder: {
                                                show: false
                                            },
                                            axisTicks: {
                                                show: false,
                                            },
                                            labels: {
                                                show: false,
                                                formatter: function (val) {
                                                    return val + "%";
                                                }
                                            }
                                        },
                                        title: {
                                            text: '',
                                            floating: true,
                                            offsetY: 330,
                                            align: 'center',
                                            style: {
                                                color: '#444'
                                            }
                                        },
                                        colors: ['#eb565b'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Stacked Column Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'PRODUCT A',
                                            data: [44, 55, 41, 67, 22, 43]
                                        }, {
                                            name: 'PRODUCT B',
                                            data: [13, 23, 20, 8, 13, 27]
                                        }, {
                                            name: 'PRODUCT C',
                                            data: [11, 17, 15, 15, 21, 14]
                                        }, {
                                            name: 'PRODUCT D',
                                            data: [21, 7, 25, 13, 22, 8]
                                        }]
                                    }
                                    type={'bar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 350,
                                            stacked: true,
                                            toolbar: {
                                                show: true
                                            },
                                            zoom: {
                                                enabled: false
                                            }
                                        },
                                        responsive: [{
                                            breakpoint: 480,
                                            options: {
                                                legend: {
                                                    position: 'bottom',
                                                    offsetX: -10,
                                                    offsetY: 0
                                                }
                                            }
                                        }],
                                        plotOptions: {
                                            bar: {
                                                horizontal: false,
                                                borderRadius: 10,
                                                dataLabels: {
                                                    total: {
                                                        enabled: false,
                                                        style: {
                                                            fontSize: '13px',
                                                            fontWeight: 900
                                                        }
                                                    }
                                                }
                                            },
                                        },
                                        xaxis: {
                                            type: 'datetime',
                                            categories: [
                                                '01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                                                '01/05/2011 GMT', '01/06/2011 GMT'
                                            ],
                                        },
                                        legend: {
                                            position: 'right',
                                            offsetY: 40
                                        },
                                        fill: {
                                            opacity: 1
                                        },
                                        colors: ['#F9D249', '#535AE7', '#E5E3E0', '#48443D'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> 100% Stacked Column Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'PRODUCT A',
                                            data: [44, 55, 41, 67, 22, 43, 21, 49]
                                        }, {
                                            name: 'PRODUCT B',
                                            data: [13, 23, 20, 8, 13, 27, 33, 12]
                                        }, {
                                            name: 'PRODUCT C',
                                            data: [11, 17, 15, 15, 21, 14, 15, 13]
                                        }]
                                    }
                                    height={350}
                                    type={'bar'}
                                    options={{
                                        chart: {
                                            type: 'bar',
                                            height: 350,
                                            stacked: true,
                                            stackType: '100%'
                                        },
                                        responsive: [{
                                            breakpoint: 480,
                                            options: {
                                                legend: {
                                                    position: 'bottom',
                                                    offsetX: -10,
                                                    offsetY: 0
                                                }
                                            }
                                        }],
                                        xaxis: {
                                            categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2',
                                                '2012 Q3', '2012 Q4'
                                            ],
                                        },
                                        fill: {
                                            opacity: 1
                                        },

                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34'],
                                        legend: {
                                            position: 'right',
                                            offsetX: 0,
                                            offsetY: 50
                                        },
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Column Chart with Markers</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={ApexChartsData.ColumnChartWithMarkers}
                                    height={350}
                                    type={'bar'}
                                    options={{
                                        plotOptions: {
                                            bar: {
                                                columnWidth: '60%'
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        legend: {
                                            show: true,
                                            showForSingleSeries: true,
                                            customLegendItems: ['Actual', 'Expected'],
                                            markers: {
                                                fillColors: ['#F9D249', '#535AE7']
                                            }
                                        },

                                        colors: ['#F9D249', '#535AE7'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Column Chart with Grouped x-axis labels</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: "sales",
                                            data: [
                                                {
                                                    x: '2019/01/01',
                                                    y: 400
                                                }, {
                                                    x: '2019/04/01',
                                                    y: 430
                                                }, {
                                                    x: '2019/07/01',
                                                    y: 448
                                                }, {
                                                    x: '2019/10/01',
                                                    y: 470
                                                }, {
                                                    x: '2020/01/01',
                                                    y: 540
                                                }, {
                                                    x: '2020/04/01',
                                                    y: 580
                                                }, {
                                                    x: '2020/07/01',
                                                    y: 690
                                                }, {
                                                    x: '2020/10/01',
                                                    y: 690
                                                }]
                                        }]
                                    }
                                    height={350}
                                    type={'bar'}
                                    options={{
                                        xaxis: {
                                            type: 'category',
                                            labels: {
                                                formatter: function (val) {
                                                    return "Q" + dayjs(val).quarter()
                                                }
                                            },
                                            group: {
                                                style: {
                                                    fontSize: '10px',
                                                    fontWeight: 700
                                                },
                                                groups: [
                                                    {title: '2019', cols: 4},
                                                    {title: '2020', cols: 4}
                                                ]
                                            }
                                        },
                                        title: {
                                            text: '',
                                        },
                                        tooltip: {
                                            x: {
                                                formatter: function (val) {
                                                    return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
                                                }
                                            }
                                        },
                                        colors: ['#535AE7'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Column Chart with rotated labels & Annotations</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[
                                        {
                                            name: 'Servings',
                                            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
                                        },
                                    ]}
                                    height={350}
                                    type="bar"
                                    options={{
                                        annotations: {
                                            points: [
                                                {
                                                    x: 'Bananas',
                                                    seriesIndex: 0,
                                                    y: 0,
                                                    label: {
                                                        borderColor: '#8B8476',
                                                        offsetY: 0,
                                                        style: {
                                                            color: '#fff',
                                                            background: '#8B8476',
                                                        },
                                                        text: 'Bananas are good',
                                                    },
                                                },
                                            ],
                                        },
                                        plotOptions: {
                                            bar: {
                                                borderRadius: 10,
                                                columnWidth: '50%',
                                            },
                                        },
                                        dataLabels: {
                                            enabled: false,
                                        },
                                        stroke: {
                                            width: 2,
                                        },
                                        xaxis: {
                                            labels: {
                                                rotate: -45,
                                            },
                                            categories: [
                                                'Apples',
                                                'Oranges',
                                                'Strawberries',
                                                'Pineapples',
                                                'Mangoes',
                                                'Bananas',
                                                'Blackberries',
                                                'Pears',
                                                'Watermelons',
                                                'Cherries',
                                                'Pomegranates',
                                                'Tangerines',
                                                'Papayas',
                                            ],
                                            tickPlacement: 'on',
                                        },
                                        yaxis: {
                                            title: {
                                                text: '',
                                            },
                                        },
                                        fill: {
                                            type: 'gradient',
                                            gradient: {
                                                shade: 'light',
                                                type: 'horizontal',
                                                shadeIntensity: 0.25,
                                                gradientToColors: undefined,
                                                inverseColors: true,
                                                opacityFrom: 0.85,
                                                opacityTo: 0.85,
                                                stops: [50, 0, 100],
                                            },
                                        },
                                        colors: ['#8B8476'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Column Chart with negative values</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Cash Flow',
                                            data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                                                5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                                                    48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
                                            ]
                                        }]
                                    }
                                    height={350}
                                    type={'bar'}
                                    options={{
                                        plotOptions: {
                                            bar: {
                                                colors: {
                                                    ranges: [{
                                                        from: -100,
                                                        to: -46,
                                                        color: '#73788c'
                                                    }, {
                                                        from: -45,
                                                        to: 0,
                                                        color: '#AECC34'
                                                    }]
                                                },
                                                columnWidth: '80%',
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false,
                                        },
                                        yaxis: {
                                            title: {
                                                text: '',
                                            },
                                            labels: {
                                                formatter: function (y) {
                                                    return y.toFixed(0) + "%";
                                                }
                                            }
                                        },
                                        xaxis: {
                                            type: 'datetime',
                                            categories: [
                                                '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                                                '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                                                '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                                                '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                                                '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                                                '2013-07-01', '2013-08-01', '2013-09-01'
                                            ],
                                            labels: {
                                                rotate: -90
                                            }
                                        },

                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5> Range Column Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            data: [{
                                                x: 'Team A',
                                                y: [1, 5]
                                            }, {
                                                x: 'Team B',
                                                y: [4, 6]
                                            }, {
                                                x: 'Team C',
                                                y: [5, 8]
                                            }, {
                                                x: 'Team D',
                                                y: [3, 11]
                                            }]
                                        }, {
                                            data: [{
                                                x: 'Team A',
                                                y: [2, 6]
                                            }, {
                                                x: 'Team B',
                                                y: [1, 3]
                                            }, {
                                                x: 'Team C',
                                                y: [7, 8]
                                            }, {
                                                x: 'Team D',
                                                y: [5, 9]
                                            }]
                                        }]
                                    }
                                    type={'rangeBar'}
                                    height={350}
                                    options={{
                                        plotOptions: {
                                            bar: {
                                                horizontal: false
                                            }
                                        },

                                        colors: ['#FF5E40', '#F9D249',],
                                        dataLabels: {
                                            enabled: true
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Distributed Column Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    type={'bar'}
                                    height={350}
                                    series={
                                        [{
                                            data: [21, 22, 10, 28, 16, 21, 13, 30]
                                        }]
                                    }
                                    options={{
                                        plotOptions: {
                                            bar: {
                                                columnWidth: '50%',
                                                distributed: true,
                                            }
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        legend: {
                                            show: false
                                        },

                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7', '#E5E3E0'],
                                        xaxis: {
                                            categories: [
                                                'John Doe',
                                                'Joe Smith',
                                                'Jake Williams',
                                                'Amber',
                                                'Peter Brown',
                                                'Mary Evans',
                                                'David Wilson',
                                                'Lily Roberts',
                                            ],
                                            labels: {
                                                style: {
                                                    colors: colors,
                                                    fontSize: '11px'
                                                }
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5> Dynamic Loaded Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <select id="model" className="flat-select">
                                        <option value="iphone5">iPhone 5</option>
                                        <option value="iphone6">iPhone 6</option>
                                        <option value="iphone7">iPhone 7</option>
                                    </select>
                                    <ApexCharts
                                        series={
                                            [{
                                                data: makeData()
                                            }]
                                        }
                                        className="chart-year"
                                        id="chart-year"
                                        type={'bar'}
                                        height={400}
                                        options={{
                                            chart: {
                                                events: {
                                                    dataPointSelection: function (e, chart, opts) {
                                                        var quarterChartEl = document.querySelector("#chart-quarter");
                                                        var yearChartEl = document.querySelector("#chart-year");

                                                        if (opts.selectedDataPoints[0].length === 1) {
                                                            if (quarterChartEl.classList.contains("active")) {
                                                                updateQuarterChart(chart, 'barQuarter')
                                                            } else {
                                                                yearChartEl.classList.add("chart-quarter-activated")
                                                                quarterChartEl.classList.add("active");
                                                                updateQuarterChart(chart, 'barQuarter')
                                                            }
                                                        } else {
                                                            updateQuarterChart(chart, 'barQuarter')
                                                        }

                                                        if (opts.selectedDataPoints[0].length === 0) {
                                                            yearChartEl.classList.remove("chart-quarter-activated")
                                                            quarterChartEl.classList.remove("active");
                                                        }

                                                    },
                                                    updated: function (chart) {
                                                        updateQuarterChart(chart, 'barQuarter')
                                                    }
                                                }
                                            },
                                            legend: {
                                                show: false
                                            },
                                            plotOptions: {
                                                bar: {
                                                    distributed: true,
                                                    horizontal: true,
                                                    barHeight: '75%',
                                                    dataLabels: {
                                                        position: 'bottom'
                                                    }
                                                }
                                            },
                                            dataLabels: {
                                                enabled: true,
                                                textAnchor: 'start',
                                                style: {
                                                    colors: ['#fff']
                                                },
                                                formatter: function (val, opt) {
                                                    return opt.w.globals.labels[opt.dataPointIndex]
                                                },
                                                offsetX: 0,
                                                dropShadow: {
                                                    enabled: true
                                                }
                                            },
                                            colors: colors,
                                            states: {
                                                normal: {
                                                    filter: {
                                                        type: 'desaturate'
                                                    }
                                                },
                                                active: {
                                                    allowMultipleDataPointsSelection: true,
                                                    filter: {
                                                        type: 'darken',
                                                        value: 1
                                                    }
                                                }
                                            },
                                            tooltip: {
                                                x: {
                                                    show: false
                                                },
                                                y: {
                                                    title: {
                                                        formatter: function (val, opts) {
                                                            return opts.w.globals.labels[opts.dataPointIndex]
                                                        }
                                                    }
                                                }
                                            },
                                            title: {
                                                text: 'Yearly Results',
                                                offsetX: 15
                                            },
                                            subtitle: {
                                                text: '(Click on bar to see details)',
                                                offsetX: 15
                                            },
                                            yaxis: {
                                                labels: {
                                                    show: false
                                                }
                                            }
                                        }}
                                    />
                                    <ApexCharts
                                        series={
                                            [{data: []}]
                                        }
                                        className="chart-quarter"
                                        id="chart-quarter"
                                        type={'bar'}
                                        height={400}
                                        options={{
                                            chart: {
                                                id: 'barQuarter',
                                                height: 400,
                                                width: '100%',
                                                type: 'bar',
                                                stacked: true
                                            },
                                            plotOptions: {
                                                bar: {
                                                    columnWidth: '50%',
                                                    horizontal: false
                                                }
                                            },
                                            legend: {
                                                show: false
                                            },
                                            grid: {
                                                yaxis: {
                                                    lines: {
                                                        show: false,
                                                    }
                                                },
                                                xaxis: {
                                                    lines: {
                                                        show: true,
                                                    }
                                                }
                                            },

                                            yaxis: {
                                                labels: {
                                                    show: false
                                                }
                                            },
                                            title: {
                                                text: 'Quarterly Results',
                                                offsetX: 10
                                            },
                                            tooltip: {
                                                x: {
                                                    formatter: function (val, opts) {
                                                        return opts.w.globals.seriesNames[opts.seriesIndex]
                                                    }
                                                },
                                                y: {
                                                    title: {
                                                        formatter: function (val, opts) {
                                                            return opts.w.globals.labels[opts.dataPointIndex]
                                                        }
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ColumnChart;