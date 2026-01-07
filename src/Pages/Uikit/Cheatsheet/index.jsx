import {useEffect} from "react";
import CheatSheetBlocks from "@/Components/Cheetsheet/CheatSheetBlocks.jsx";
import Prism from 'prismjs';
import "prismjs/themes/prism.css";
import {Card, CardBody, Col, Container, Row} from "reactstrap";

const Cheatsheet = () => {
    useEffect(()=>{
        new Masonry(".cheatsheet-blocks", {
            percentPosition: true
        });
        Prism.highlightAll();
    },[])
    return (
        <Container fluid>
            <Row className=" m-1">
                <Col xs={12}>
                    <h4 className="main-title">Cheatsheet</h4>
                    <ul className="app-line-breadcrumbs mb-3">
                        <li className="">
                            <a href="#" className="f-s-14 f-w-500">
                          <span>
                            <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                          </span>
                            </a>
                        </li>
                        <li className="active">
                            <a href="#" className="f-s-14 f-w-500">Cheatsheet</a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className="cheatsheet-header">
                        <img src="/assets/images/logo/03.png" alt=""/>
                        <h2>Your Ultimate Cheatsheet</h2>
                        <div className="search-div">
                            <div className="input-group b-r-search">
                                <span className="input-group-text bg-primary border-0 "><i className="ti ti-search"></i></span>
                                <input className="form-control cheatsheet-filter" type="text" placeholder="Search..." aria-label="Search"/>
                            </div>
                        </div>
                    </div>
                </Col>
                <CheatSheetBlocks/>
            </Row>
            <Row className="code-container code-preview-popup d-none">
                <Col xs={12} className="p-0">
                    <div className="code-preview-header d-flex justify-content-between mb-3">
                        <h4 className="m-0 text-white header-preview-text"></h4>
                        <button type="button" className="box-close"><i
                            className="fa fa-close"></i></button>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="d-flex align-items-end justify-content-between mg-b-16">
                        <h4 className="text-white">Code</h4>
                        <button type="button" className="btn h-30 w-30 bg-dark text-white p-2 d-flex-center"
                                onClick={()=> copyToClipboard('#previewCodeText')}><i className="ti ti-copy"></i></button>
                    </div>
                    <Card className="box-shadow-none code-preview">
                        <div className="card-body">
                            <pre ><code className="language-html" id="previewCodeText"></code></pre>
                        </div>
                    </Card>
                </Col>
                <Col lg={6}>
                    <div className="mg-b-16">
                        <h4 className="text-white">Preview</h4>
                    </div>
                    <Card className=" box-shadow-none code-preview">
                        <CardBody className=" code-preview-div">
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cheatsheet;