import React, {useEffect, useState} from 'react';
import {IconoirIcons} from "@/Data/Icons/iconoir.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Iconoir = () => {
    const [iconList, setIconList] = useState(IconoirIcons);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue === '') {
            setIconList(IconoirIcons);
        } else {
            setIconList(IconoirIcons.filter(icon =>
                icon.className.toLowerCase().includes(searchValue.toLowerCase())
            ));
        }
    }, [searchValue, IconoirIcons]);

    const searchIconoirIcons = (className) => {
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
                        <h4 className="main-title">Iconoir</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                    <span>
                      <i className="ph-duotone  ph-shapes f-s-16"></i>Icons
                    </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Iconoir</a>
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
                                    <Col md={8} className="text-end pt-2"/>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <ul className="icon-list icons-iconoir space-top-icon">
                                    {(iconList || []).map((icon, index) => (
                                        <li
                                            className="icon-box"
                                            onClick={() => searchIconoirIcons(icon.className)}
                                            key={index}
                                        >
                                            <i className={icon.className}/>
                                            <strong className="mb-3">{icon.iconCode}</strong>

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

export default Iconoir;