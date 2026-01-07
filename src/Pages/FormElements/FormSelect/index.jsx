import React, {useEffect, useRef} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, Label} from "reactstrap";
import "../../../../public/assets/vendor/select/select2.min";
import "../../../../public/assets/vendor/select/select2.min.css";

const FormSelect = () => {
    const selectRefs = useRef([]);

    useEffect(() => {
        setTimeout(() => {
            console.log(window.$.fn)
            $('.select-basic-multiple-four').select2({
                placeholder: 'Select an option',
                allowClear: true,
            });

            return () => {
                $('.select-basic-multiple-four').select2('destroy');
            };
        },1000)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            selectRefs.current.forEach((select) => {
                $(select).select2();
            });

            // Cleanup Select2 on component unmount
            return () => {
                selectRefs.current.forEach((select) => {
                    $(select).select2('');
                });
            };
        },1000)
    }, []);


    return (
        <Container fluid>
            <Row className=" m-1">
                <Col xs={12}>
                    <h4 className="main-title">Select2</h4>
                    <ul className="app-line-breadcrumbs mb-3">
                        <li className="">
                            <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                      </span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="#" className="f-s-14 f-w-500">Select2</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <h5 className="m-0">Select2 With Color Tags</h5>
                        </CardHeader>
                        <CardBody>
                            <Row className="app-form">
                                <Col xl="6">
                                    <div className="select_primary">
                                        <Label className="form-label">Select Primary</Label>
                                        <select className="select-basic-multiple-four w-100" name="states[]"
                                                multiple="multiple" defaultValue={["AL", "WY"]}>
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WD">Coming</option>
                                            <option value="AF">Hanry Die</option>
                                            <option value="TU">John Doe</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xl="6">
                                    <div className="select_secondary mt-xl-0 mt-4">
                                        <Label className="form-label">Select Secondary</Label>
                                        <select className="select-basic-multiple-four w-100" name="states[]"
                                                multiple="multiple" defaultValue={["AL", "WY"]}>
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WD">Coming</option>
                                            <option value="AF">Hanry Die</option>
                                            <option value="TU">John Doe</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xl="6">
                                    <div className="select_success mt-4">
                                        <Label className="form-label">Select Success</Label>
                                        <select className="select-basic-multiple-four w-100" name="states[]"
                                                multiple="multiple" defaultValue={["AL", "WY"]}>
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WD">Coming</option>
                                            <option value="AF">Hanry Die</option>
                                            <option value="TU">John Doe</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xl="6">
                                    <div className="select_danger mt-4">
                                        <Label className="form-label">Select Danger</Label>
                                        <select className="select-basic-multiple-four w-100" name="states[]"
                                                multiple="multiple" defaultValue={["AL", "WY"]}>
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WD">Coming</option>
                                            <option value="AF">Hanry Die</option>
                                            <option value="TU">John Doe</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xl="6">
                                    <div className="select_warning mt-4">
                                        <Label className="form-label">Select Warning</Label>
                                        <select className="select-basic-multiple-four w-100" name="states[]"
                                                multiple="multiple" defaultValue={["AL", "WY"]}>
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WD">Coming</option>
                                            <option value="AF">Hanry Die</option>
                                            <option value="TU">John Doe</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xl="6">
                                    <div className="select_info mt-4">
                                        <Label className="form-label">Select Info</Label>
                                        <select className="select-basic-multiple-four w-100" name="states[]"
                                                multiple="multiple" defaultValue={["AL", "WY"]}>
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WD">Coming</option>
                                            <option value="AF">Hanry Die</option>
                                            <option value="TU">John Doe</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col xl="6">
                                    <div className="select_dark mt-4">
                                        <Label className="form-label">Select Dark</Label>
                                        <select className="select-basic-multiple-four w-100" name="states[]"
                                                multiple="multiple" defaultValue={["AL", "WY"]}>
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WD">Coming</option>
                                            <option value="AF">Hanry Die</option>
                                            <option value="TU">John Doe</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <h5>Select2</h5>
                        </CardHeader>
                        <CardBody>
                            <div className="row app-form">
                                {/* Basic Select */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">Basic</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="form-select select-example"
                                            name="state"
                                        >
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WY">Coming</option>
                                            <option value="WY">Hanry Die</option>
                                            <option value="WY">John Doe</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Multiple Select */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">Multiple</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="form-control select-1"
                                            multiple
                                            defaultValue={["orange", "purple"]}

                                        >
                                            <option>orange</option>
                                            <option>white</option>
                                            <option>purple</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Disabled Select */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">Disabled</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="select-example w-100"
                                            name="state"
                                            disabled
                                        >
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WY">Coming</option>
                                            <option value="WY">Hanry Die</option>
                                            <option value="WY">John Doe</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Select with Icons */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">Icon</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="select2-icon"
                                            name="icon"
                                        >
                                            <option value="ti-brand-html5" data-icon="ti-brand-html5">HTML5</option>
                                            <option value="ti-brand-codepen" data-icon="ti-brand-codepen">Codepen
                                            </option>
                                            <option value="ti-brand-javascript"
                                                    data-icon="ti-brand-javascript">JavaScript
                                            </option>
                                            <option value="ti-brand-css3" data-icon="ti-brand-css3">CSS3</option>
                                            <option value="ti-brand-bootstrap"
                                                    data-icon="ti-brand-bootstrap">Bootstrap 5
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* RTL Support Select */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">RTL support</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="select-example-rtl w-100"
                                            name="states[]"
                                            multiple
                                        >
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WY">Coming</option>
                                            <option value="WY">Hanry Die</option>
                                            <option value="WY">John Doe</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Limit Selections Select */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">Limit The Number Of Selections</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="select-basic-multiple-four w-100"
                                            name="states[]"
                                            multiple
                                        >
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WY">Coming</option>
                                            <option value="WY">Hanry Die</option>
                                            <option value="WY">John Doe</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Disable Results Select */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">Disable Results</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="select-example-two w-100"
                                            name="state"
                                            defaultValue="AL"
                                        >
                                            <option value="AL">Alabama</option>
                                            <option value="AL" disabled>Wyoming (disabled)</option>
                                            <option value="WY">Coming</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Flag Selection Select */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">Flags selection</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="select2-icons"
                                            name="icon"
                                            defaultValue="flag-icon-ind"
                                        >
                                            <option value="flag-icon-ind" data-icon="flag-icon-ind">India</option>
                                            <option value="flag-icon-abw" data-icon="flag-icon-abw">Aruba</option>
                                            <option value="flag-icon-afg" data-icon="flag-icon-afg">Afghanistan
                                            </option>
                                            <option value="flag-icon-aia" data-icon="flag-icon-aia">Anguilla
                                            </option>
                                            <option value="flag-icon-ala" data-icon="flag-icon-ala">Åland Islands
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Enable/Disable Select */}
                                <div className="col-md-6 col-xl-4">
                                    <div className="mt-4">
                                        <Label className="form-label">Enable-Disable</Label>
                                        <select
                                            ref={(el) => selectRefs.current.push(el)}
                                            className="select-basic-multiple-five w-100"
                                            name="state"
                                            defaultValue="AL"
                                        >
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WY">Coming</option>
                                            <option value="WY">Hanry Die</option>
                                            <option value="WY">John Doe</option>
                                        </select>
                                    </div>
                                    <div className="text-end">
                                        <button className="btn btn-primary select-basic-multiple-seven mt-3">
                                            Enable
                                        </button>
                                        {' '}
                                        <button className="btn btn-secondary select-basic-multiple-six mt-3">
                                            Disable
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <h5>Default Select</h5>
                        </CardHeader>
                        <CardBody>
                            <div className="row main-select">
                                <div className="col-md-6 col-xl-4">
                                    <form className="app-form">
                                        <select className="form-select my-3" aria-label="Default select example"
                                                defaultValue="1">
                                            <option>Select your Status</option>
                                            <option value="1">Declined Payment</option>
                                            <option value="2">Delivery Error</option>
                                            <option value="3">Wrong Amount</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <form className="app-form">
                                        <select className="form-select rounded-pill my-3"
                                                aria-label="Default select example" defaultValue="1">
                                            <option>Search for services</option>
                                            <option value="1">Information Architecture</option>
                                            <option value="2">UI/UX Design</option>
                                            <option value="3">Back End Development</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="col-md-6 col-xl-4">
                                    <form className="app-form">
                                        <select className="form-select my-3" aria-label="Disabled select example"
                                                disabled defaultValue="1">
                                            <option>Open this select menu (Disabled)</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <h5>Menu Size</h5>
                        </CardHeader>
                        <CardBody>
                            <div className="row main-select">
                                <div className="col-md-6">
                                    <form className="app-form">

                                        <select
                                            className="form-select"
                                            multiple={true}
                                            aria-label="multiple select example"
                                            defaultValue={["1"]} // Use an array for defaultValue
                                        >
                                            <option disabled>Open this select menu (multiple select option)
                                            </option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </form>
                                </div>
                                <div className="col-md-6">
                                    <form className="app-form">
                                        <select className="form-select" size="3" aria-label="size 3 select example"
                                                defaultValue="1">
                                            <option>Open this select menu (select menu size)</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                            <option value="5">Five</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <h5>Select Size</h5>
                        </CardHeader>
                        <CardBody>
                            <div className="row app-form">
                                <div className="col-md-6 col-xl-4 mb-3">
                                    <select className="form-select form-select-sm"
                                            aria-label=".form-select-sm example" defaultValue="1">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-xl-4 mb-3">
                                    <select className="form-select" aria-label=".form-select-sm example"
                                            defaultValue="1">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-md-6 col-xl-4 mb-3">
                                    <select className="form-select form-select-lg"
                                            aria-label=".form-select-lg example" defaultValue="1">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FormSelect;
