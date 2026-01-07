import React, {useEffect, useState} from 'react';
import {WeatherIcon} from "@/Data/Icons/WeatherIcon.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Weather = () => {
    const [iconList, setIconList] = useState(WeatherIcon);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue === '') {
            setIconList(WeatherIcon);
        } else {
            setIconList(WeatherIcon.filter(icon =>
                icon.className.toLowerCase().includes(searchValue.toLowerCase())
            ));
        }
    }, [searchValue, WeatherIcon]);

    const searchWeatherIcons = (className) => {
        navigator.clipboard.writeText(`<i class="${className}"></i>`);
        Toastify({
            text: "Copied to the clipboard successfully",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "rgba(var(--success),1)",
            },
            onClick: function () {
            }
        }).showToast();
    }
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Wheather</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                    <span>
                      <i className="ph-duotone  ph-shapes f-s-16"></i>Icons
                    </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Wheather</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="row">
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col md={4}>
                                        <div className="search-bar app-form app-icon-form position-relative">
                                            <input
                                                type="search"
                                                className="form-control"
                                                name="search"
                                                placeholder="type to search"
                                                onChange={(e) => setSearchValue(e.target.value)}
                                            />
                                            <i className="ti ti-search"></i>
                                        </div>
                                    </Col>
                                    <Col md={8} className="text-end pt-2"/>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <ul className="icon-list">
                                    {(iconList || []).map((icon, index) => (
                                        <li
                                            className="icon-box"
                                            onClick={() => searchWeatherIcons(icon.className)}
                                            key={index}
                                        >
                                            <i className={icon.className}/>
                                            <strong>{icon.iconCode}</strong>
                                            <div className="icon-box-codes">
                                                <code>{icon.className}</code>
                                                <br/>
                                                <code>{icon.unicode}</code>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default Weather;