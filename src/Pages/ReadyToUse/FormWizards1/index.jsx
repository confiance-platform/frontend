

import { Container, Row, Col  } from "reactstrap";
import PaymentWizard from "../../../Components/Formwizard1/PaymentWizard";
import AccountWizard from "../../../Components/Formwizard1/AccountWizard";
import BusinessWizard from "../../../Components/Formwizard1/BusinessWizard";


const Blank = () => {


    return (
        <>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Form wizard 1</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-hand-heart f-s-16"></i> Ready to use
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Form wizard 1</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <PaymentWizard/>
                    </Col>
                    <Col xs={12}>
                        <AccountWizard/>
                    </Col>
                    <Col xs={12}>
                        <BusinessWizard/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
