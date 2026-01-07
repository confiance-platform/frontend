import React, {useEffect, useState} from 'react';
import {TablerIconsList} from "@/Data/Icons/TablerIconsList.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Tabler = () => {
    const [iconList, setIconList] = useState(TablerIconsList);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue === '') {
            setIconList(TablerIconsList);
        } else {
            setIconList(TablerIconsList.filter(icon =>
                icon.name.toLowerCase().includes(searchValue.toLowerCase())
            ));
        }
    }, [searchValue, TablerIconsList]);

    const tabler_icons = (className) => {
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
                        <h4 className="main-title">Tabler</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                       <span>
                         <i className="ph-duotone  ph-shapes f-s-16"></i>Icons
                       </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Tabler</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
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
                                    <div className="col-md-8 text-center text-md-end pt-2">
                                        <h5>4140 Icons</h5>
                                    </div>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <ul className="icon-list">
                                    {(iconList || []).map((icon, index) => (
                                        <li
                                            className="icon-box"
                                            onClick={() => tabler_icons(icon.code)}
                                            key={index}
                                        >
                                            <i className={icon.code}/>
                                            <strong>{icon.name}</strong>
                                            <div className="icon-box-codes">
                                                <code>{icon.code}</code>
                                                <br/>
                                                <code>{icon.unicode}</code>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tabler;