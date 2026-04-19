import React from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem, hexToRGB} from "@/_helper/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const radialBarChart = () => {
    const radialProgress = [0, 21, 65, 87, 100];
    const radialWithLabel = [
        {value: 5, class: "text-primary", color: hexToRGB(getLocalStorageItem('color-primary', '#056464'), 1)},
        {value: 25, class: "text-secondary", color: hexToRGB(getLocalStorageItem('color-secondary', '#74788D'), 1)},
        {value: 57, class: "text-success", color: 'rgba(var(--success),1)'},
        {value: 78, class: "text-danger", color: 'rgba(var(--danger),1)'},
        {value: 88, class: "text-warning", color: 'rgba(var(--warning),1)'},
        {value: 97, class: "text-info", color: 'rgba(var(--info),1)'}
    ];

    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Radialbar</h4>
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
                                <a href="#" className="f-s-14 f-w-500">Radialbar</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} xxl={4}>
                        <Card>
                            <CardHeader>
                                <h5>Basic RadialBar Chart</h5>
                            </CardHeader>
                            <CardBody className="bg-primary-200">
                                <ApexCharts
                                    series={[70]}
                                    type={'radialBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'radialBar',
                                        },
                                        plotOptions: {
                                            radialBar: {
                                                hollow: {
                                                    size: '70%',
                                                }
                                            },
                                        },
                                        labels: ['Cricket'],
                                        colors: [getLocalStorageItem('color-primary', '#056464')],
                                        responsive: [{
                                            breakpoint: 567,
                                            options: {
                                                chart: {
                                                    height: 250,
                                                },
                                            }
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xxl={4}>
                        <Card>
                            <CardHeader>
                                <h5> Multiple RadialBars</h5>
                            </CardHeader>
                            <CardBody className="bg-secondary-200">
                                <ApexCharts
                                    series={[44, 55, 67, 83]}
                                    type={'radialBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 350,
                                            type: 'radialBar',
                                        },
                                        plotOptions: {
                                            radialBar: {
                                                dataLabels: {
                                                    name: {
                                                        fontSize: '22px',
                                                    },
                                                    value: {
                                                        fontSize: '16px',
                                                    },

                                                    total: {
                                                        show: true,
                                                        label: 'Total',
                                                        formatter: function (w) {
                                                            return 249
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
                                        responsive: [{
                                            breakpoint: 567,
                                            options: {
                                                chart: {
                                                    height:250,
                                                },
                                            }
                                        }],
                                        colors: [hexToRGB(getLocalStorageItem('color-primary','#AECC34', '#F9D249', ),1)],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xxl={4}>
                        <Card>
                            <CardHeader>
                                <h5> Circle Chart – Custom Angle</h5>
                            </CardHeader>
                            <CardBody className=" bg-success-200">
                                <ApexCharts
                                    series={[76, 67, 61, 90]}
                                    type={'radialBar'}
                                    height={350}
                                    options={{
                                        chart: {
                                            height: 390,
                                            type: 'radialBar',
                                        },
                                        plotOptions: {
                                            radialBar: {
                                                offsetY: 0,
                                                startAngle: 0,
                                                endAngle: 270,
                                                hollow: {
                                                    margin: 5,
                                                    size: '30%',
                                                    background: 'transparent',
                                                    image: undefined,
                                                },
                                                dataLabels: {
                                                    name: {
                                                        show: false,
                                                    },
                                                    value: {
                                                        show: false,
                                                    }
                                                }
                                            }
                                        },
                                        colors: [getLocalStorageItem('color-primary','#48BECE'), '#535AE7',getLocalStorageItem('color-secondary','#8B8476'), '#48443D'],
                                        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
                                        legend: {
                                            show: true,
                                            floating: true,
                                            fontSize: '16px',
                                            position: 'left',
                                            offsetX: 20,
                                            offsetY: 20,
                                            labels: {
                                                useSeriesColors: true,
                                            },
                                            markers: {
                                                size: 0
                                            },
                                            formatter: function (seriesName, opts) {
                                                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                                            },
                                            itemMargin: {
                                                vertical: 3
                                            }
                                        },
                                        responsive: [
                                            {
                                                breakpoint: 1550,
                                                options: {
                                                    legend: {
                                                        offsetX: -5,
                                                        offsetY: 15,
                                                    }
                                                }
                                            },
                                            {
                                                breakpoint: 567,
                                                options: {
                                                    chart: {
                                                        height: 250,
                                                    },
                                                }
                                            },
                                            {
                                                breakpoint: 480,
                                                options: {
                                                    legend: {
                                                        fontSize: '14px',
                                                        offsetX: -30,
                                                        offsetY: -10,
                                                    }
                                                }
                                            }
                                        ]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xxl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5> Stroked Circular Gauge</h5>
                            </CardHeader>
                            <CardBody className="bg-warning-200">
                                <ApexCharts
                                    series={[67]}
                                    type={'radialBar'}
                                    height={350}

                                    options={{
                                        chart: {
                                            offsetY: -10
                                        },
                                        plotOptions: {
                                            radialBar: {
                                                startAngle: -135,
                                                endAngle: 135,
                                                dataLabels: {
                                                    name: {
                                                        fontSize: '16px',
                                                        color: undefined,
                                                        offsetY: 120
                                                    },
                                                    value: {
                                                        offsetY: 76,
                                                        fontSize: '22px',
                                                        color: undefined,
                                                        formatter: function (val) {
                                                            return val + "%";
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        fill: {
                                            colors: ['#48443D'],
                                        },
                                        stroke: {
                                            dashArray: 4
                                        },
                                        labels: ['Median Ratio'],
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6} xxl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5> Semi Circular Gauge</h5>
                            </CardHeader>
                            <CardBody className="bg-info-200">
                                <ApexCharts
                                    series={[76]}
                                    type={'radialBar'}
                                    height={410}

                                    options={{
                                        chart: {
                                            height: 410,
                                            type: 'radialBar',
                                            offsetY: -20,
                                            sparkline: {
                                                enabled: true
                                            }
                                        },
                                        plotOptions: {
                                            radialBar: {
                                                startAngle: -90,
                                                endAngle: 90,
                                                track: {
                                                    background: "#e7e7e7",
                                                    strokeWidth: '97%',
                                                    margin: 5, // margin is in pixels
                                                },
                                                dataLabels: {
                                                    name: {
                                                        show: false
                                                    },
                                                    value: {
                                                        offsetY: -2,
                                                        fontSize: '22px'
                                                    }
                                                }
                                            }
                                        },
                                        grid: {
                                            padding: {
                                                top: -10
                                            }
                                        },
                                        fill: {

                                            colors: [getLocalStorageItem('color-primary','#FF5E40')],
                                        },
                                        labels: ['Average Results'],
                                        responsive: [{
                                            breakpoint: 1366,
                                            options: {
                                                chart: {
                                                    height:500,
                                                },
                                            }
                                        },{
                                            breakpoint: 567,
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
                    <Col lg={6} xxl={4}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>  Circle Chart with Image</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={[67]}
                                    type={'radialBar'}
                                    height={350}

                                    options={{
                                        // chart: {
                                        //     height: 350,
                                        //     type: 'radialBar',
                                        // },
                                        plotOptions: {
                                            radialBar: {
                                                hollow: {
                                                    margin: 15,
                                                    size: '70%',
                                                    image: '../assets/images/icons/clock.png',
                                                    imageWidth: 64,
                                                    imageHeight: 64,
                                                    imageClipped: false
                                                },
                                                dataLabels: {
                                                    name: {
                                                        show: false,

                                                    },
                                                    value: {
                                                        show: true,
                                                        color: '#333',
                                                        offsetY: 70,
                                                        fontSize: '22px'
                                                    }
                                                }
                                            }
                                        },
                                        fill: {
                                            type: 'image',
                                            image: {
                                                src: ['../assets/images/slick/11.jpg'],
                                            }
                                        },
                                        stroke: {
                                            lineCap: 'round'
                                        },
                                        labels: ['Volatility'],
                                        responsive: [{
                                            breakpoint: 567,
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
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Custom size and custom thickness</h5>
                                <p>You can use customize size by adding</p>
                            </CardHeader>
                            <CardBody>
                                <div className="d-flex flex-wrap custom-radial justify-content-center">
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mt-auto">
                                          <ApexCharts
                                              series={[5]}
                                              type={'radialBar'}
                                              height={350}
                                              width={110}
                                              options={{
                                                  plotOptions: {
                                                      radialBar: {
                                                          hollow: {
                                                              margin: 15,
                                                              size: "70%",
                                                              image: '../assets/images/icons/icon-1.jpg',
                                                              imageWidth: 80,
                                                              imageHeight: 80,
                                                              imageClipped: false
                                                          },

                                                          dataLabels: {
                                                              showOn: "always",
                                                              name: {
                                                                  offsetY: -10,
                                                                  show: false,
                                                                  fontSize: "15px",
                                                              },
                                                              style: {
                                                                  fontSize: '14px',
                                                              },
                                                              value: {
                                                                  fontSize: "30px",
                                                                  show: false
                                                              }
                                                          }
                                                      }
                                                  },

                                                  stroke: {
                                                      lineCap: "round",
                                                  },
                                                  colors: [hexToRGB(getLocalStorageItem('color-primary','#48BECE'),1)],
                                                  labels: ["Primary"]
                                              }}
                                          />
                                        </div>
                                        <div className="mt-auto">
                                            <p className=" text-primary f-s-18 f-w-600">Primary</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mt-auto">
                                           <ApexCharts
                                               series={[67]}
                                               type={'radialBar'}
                                               height={'172'}
                                               width={'200'}
                                               options={{
                                                   plotOptions: {
                                                       radialBar: {
                                                           hollow: {
                                                               margin: 15,
                                                               size: "70%",
                                                               image: '../assets/images/icons/icon-2.png',
                                                               imageWidth: 90,
                                                               imageHeight: 90,
                                                               imageClipped: false
                                                           },

                                                           dataLabels: {
                                                               showOn: "always",
                                                               name: {
                                                                   offsetY: -10,
                                                                   show: false,
                                                                   color: hexToRGB(getLocalStorageItem('color-secondary','#8B8476'),1),
                                                                   fontSize: "13px"
                                                               },
                                                               value: {
                                                                   color: hexToRGB(getLocalStorageItem('color-secondary','#8B8476'),1),
                                                                   fontSize: "30px",
                                                                   show: false
                                                               }
                                                           }
                                                       }
                                                   },

                                                   stroke: {
                                                       lineCap: "round",
                                                   },
                                                   colors: [hexToRGB(getLocalStorageItem('color-secondary','#8B8476'),1)],
                                                   labels: ["Secondary"]
                                               }}
                                           />
                                        </div>
                                        <div className="mt-auto">
                                            <p className=" text-secondary f-s-18 f-w-600 ">secondary</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mt-auto">
                                          <ApexCharts
                                              series={[57]}
                                              height={'190'}
                                              width={'200'}
                                              type={'radialBar'}
                                              options={{
                                                  plotOptions: {
                                                      radialBar: {
                                                          hollow: {
                                                              margin: 15,
                                                              size: "70%",
                                                              image: '../assets/images/icons/icon-3.png',
                                                              imageWidth: 90,
                                                              imageHeight: 90,
                                                              imageClipped: false
                                                          },

                                                          dataLabels: {
                                                              showOn: "always",
                                                              name: {
                                                                  offsetY: -10,
                                                                  show: false,
                                                                  color: "rgba(var(--success),1)",
                                                                  fontSize: "13px"
                                                              },
                                                              value: {
                                                                  color: "rgba(var(--success),1)",
                                                                  fontSize: "30px",
                                                                  show: false
                                                              }
                                                          }
                                                      }
                                                  },

                                                  stroke: {
                                                      lineCap: "round",
                                                  },
                                                  colors: ['rgba(var(--success),1)'],
                                                  labels: ["Success"]

                                              }}
                                          />
                                        </div>
                                        <div className="mt-auto">
                                            <p className=" text-success f-s-18 f-w-600 ">Success</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mt-auto">
                                         <ApexCharts
                                             series={[78]}
                                             height={'210'}
                                             width={'200'}
                                             type={'radialBar'}
                                             options={{
                                                 plotOptions: {
                                                     radialBar: {
                                                         hollow: {
                                                             margin: 15,
                                                             size: "65%",
                                                             image: '../assets/images/icons/icon-4.png',
                                                             imageWidth: 110,
                                                             imageHeight: 110,
                                                             imageClipped: false
                                                         },

                                                         dataLabels: {
                                                             showOn: "always",
                                                             name: {
                                                                 offsetY: -10,
                                                                 show: false,
                                                                 color: "rgba(var(--danger),1)",
                                                                 fontSize: "13px"
                                                             },
                                                             value: {
                                                                 color: "rgba(var(--danger),1)",
                                                                 fontSize: "30px",
                                                                 show: false
                                                             }
                                                         }
                                                     }
                                                 },
                                                 stroke: {
                                                     lineCap: "round",
                                                 },
                                                 colors: ['rgba(var(--danger),1)'],
                                                 labels: ["Danger"]
                                             }}
                                         />
                                        </div>
                                        <div className="mt-auto">
                                            <p className=" text-danger f-s-18 f-w-600 ">Danger</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mt-auto">
                                            <ApexCharts
                                                series={[88]}
                                                type={'radialBar'}
                                                height={'230'}
                                                width={'200'}
                                                options={{
                                                    plotOptions: {
                                                        radialBar: {
                                                            hollow: {
                                                                margin: 15,
                                                                size: "60%",
                                                                image: '../assets/images/icons/icon-5.png',
                                                                imageWidth: 110,
                                                                imageHeight: 110,
                                                                imageClipped: false
                                                            },

                                                            dataLabels: {
                                                                showOn: "always",
                                                                name: {
                                                                    offsetY: -10,
                                                                    show: false,
                                                                    color: "rgba(var(--warning),1)",
                                                                    fontSize: "13px"
                                                                },
                                                                value: {
                                                                    color: "rgba(var(--warning),1)",
                                                                    fontSize: "30px",
                                                                    show: false
                                                                }
                                                            }
                                                        }
                                                    },

                                                    stroke: {
                                                        lineCap: "round",
                                                    },
                                                    colors: ['rgba(var(--warning),1)'],
                                                    labels: ["Warning"]
                                                }}
                                            />
                                        </div>
                                        <div className="mt-auto">
                                            <p className=" text-warning f-s-18 f-w-600 ">Warning</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mt-auto">
                                            <ApexCharts
                                                series={[95]}
                                                type={'radialBar'}
                                                height={'250'}
                                                width={'200'}
                                                options={{
                                                    plotOptions: {
                                                        radialBar: {
                                                            hollow: {
                                                                margin: 15,
                                                                size: "55%",
                                                                image: '../assets/images/icons/icon-6.png',
                                                                imageWidth: 110,
                                                                imageHeight: 110,
                                                                imageClipped: false
                                                            },

                                                            dataLabels: {
                                                                showOn: "always",
                                                                name: {
                                                                    offsetY: -10,
                                                                    show: false,
                                                                    color: "rgba(var(--info),1)",
                                                                    fontSize: "13px"
                                                                },
                                                                value: {
                                                                    color: "rgba(var(--info),1)",
                                                                    fontSize: "30px",
                                                                    show: false
                                                                }
                                                            }
                                                        }
                                                    },

                                                    stroke: {
                                                        lineCap: "round",
                                                    },
                                                    colors: ['rgba(var(--info),1)'],
                                                    labels: ["Info"]
                                                }}
                                            />
                                        </div>
                                        <div className="mt-auto">
                                            <p className=" text-info f-s-18 f-w-600 ">Info</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mt-auto">
                                            <ApexCharts
                                                series={[100]}
                                                type={'radialBar'}
                                                height={'280'}
                                                width={'200'}
                                                options={{
                                                    plotOptions: {
                                                        radialBar: {
                                                            hollow: {
                                                                margin: 15,
                                                                size: "55%",
                                                                image: '../assets/images/icons/icon-8.png',
                                                                imageWidth: 120,
                                                                imageHeight: 120,
                                                                imageClipped: false
                                                            },

                                                            dataLabels: {
                                                                showOn: "always",
                                                                name: {
                                                                    offsetY: -10,
                                                                    show: false,
                                                                    color: "rgba(var(--dark),1)",
                                                                    fontSize: "13px"
                                                                },
                                                                value: {
                                                                    color: "rgba(var(--dark),1)",
                                                                    fontSize: "30px",
                                                                    show: false
                                                                }
                                                            }
                                                        }
                                                    },

                                                    stroke: {
                                                        lineCap: "round",
                                                    },
                                                    colors: ['rgba(var(--dark),1)'],
                                                    labels: ["dark"]
                                                }}
                                            />
                                        </div>
                                        <div className="mt-auto">
                                            <p className=" text-dark f-s-18 f-w-600 ">dark</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default radialBarChart;