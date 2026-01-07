import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const FooterPage = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid className="footer-page">
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Footer</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
									<span>
									  <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
									</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Footer</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card className="footer-section">
                            <CardHeader className="code-header">
                                <h5>Basic Footer</h5>
                                <a data-bs-toggle="collapse" href="#basicfooterExample" aria-expanded="false"
                                   aria-controls="basicfooterExample">
                                    <i className="ti ti-code source" data-source="basicfooter"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <footer>
                                    <Container fluid>
                                        <div className="row align-items-center">

                                            <div className="col-sm-6">
                                                <ul>
                                                    <li>
                                                        <a href="" className="footer-brand">Copyright © 2024
                                                            ra-admin. All rights reserved.</a>
                                                    </li>
                                                </ul>

                                            </div>
                                            <div className="col-sm-6 footer-list">
                                                <ul
                                                    className="text-end d-flex  justify-content-end">
                                                    <li><a href="mailto:teqlathemes@gmail.com."> Need Help <i
                                                        className="ti ti-help"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Container>
                                </footer>

                                <pre className="basicfooter collapse mt-3" id="basicfooterExample">
                                            <code className="language-html">
                                                {`
 <footer>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <ul>
          <li>
            <a href="" class="footer-brand">Copyright &copy; 2024 ra-admin. All rights reserved.</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-6">
        <ul class="text-end d-flex justify-content-sm-end justify-content-center">
          <li><a href="mailto:teqlathemes@gmail.com.">Need Help <i class="ti ti-help"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

                                                `}

                                            </code>
                                        </pre>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card className="footer-section">
                            <CardHeader className="code-header">
                                <h5> Footer Custom</h5>

                                <a data-bs-toggle="collapse" href="#customefooterExample" aria-expanded="false"
                                   aria-controls="customefooterExample">
                                    <i className="ti ti-code source" data-source="customefooter"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <footer>
                                    <Container fluid>
                                        <Row className="align-items-center">

                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <a href="" className="footer-brand">Get connected with us on
                                                            social networks:
                                                        </a>
                                                    </li>
                                                </ul>

                                            </Col>
                                            <Col sm={6} className="footer-list">
                                                <ul
                                                    className="text-end d-flex  justify-content-end">
                                                    <li>
                                                        <a href=""><i
                                                            className="ti ti-brand-facebook text-footer"></i></a>
                                                    </li>
                                                    <li><a href="#"> <i
                                                        className="ti ti-brand-twitter text-twitter"></i>
                                                    </a>
                                                    </li>
                                                    <li><a href="#"> <i
                                                        className="ti ti-brand-google text-whatsapp"></i>
                                                    </a>
                                                    </li>
                                                    <li><a href="#"> <i
                                                        className="ti ti-brand-instagram text-reddit"></i></a>
                                                    </li>
                                                    <li><a href="#"> <i
                                                        className="ti ti-brand-linkedin text-linkedin"></i></a>
                                                    </li>
                                                    <li><a href="#"> <i
                                                        className="ti ti-brand-github text-github"></i></a>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Container>
                                </footer>
                                <pre className="customefooter collapse mt-3" id="customefooterExample">
                                            <code className="language-html">
                                                {`
        <footer>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <ul>
          <li>
            <a href="" class="footer-brand">Get connected with us on social networks:</a>
          </li>
        </ul>
      </div>
      <div class="col-sm-6">
        <ul class="text-end d-flex justify-content-sm-end justify-content-center">
          <li><a href="#"><i class="ti ti-brand-facebook text-footer"></i></a></li>
          <li><a href="#"><i class="ti ti-brand-twitter text-twitter"></i></a></li>
          <li><a href="#"><i class="ti ti-brand-google text-whatsapp"></i></a></li>
          <li><a href="#"><i class="ti ti-brand-instagram text-reddit"></i></a></li>
          <li><a href="#"><i class="ti ti-brand-linkedin text-linkedin"></i></a></li>
          <li><a href="#"><i class="ti ti-brand-github text-github"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

                                                `}

                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card className="footer-section">
                            <CardHeader className="code-header">
                                <h5>Footer variat</h5>
                                <a data-bs-toggle="collapse" href="#variatfooterExample" aria-expanded="false"
                                   aria-controls="variatfooterExample">
                                    <i className="ti ti-code source" data-source="variatfooter"></i>
                                </a>

                            </CardHeader>
                            <CardBody>
                                <div className="mb-3">
                                    <footer className="footer-primary">
                                        <Container fluid>
                                            <div className="row align-items-center">

                                                <div className="col-sm-6">
                                                    <ul>
                                                        <li>
                                                            <a href="index.html" className="footer-brand">RA-ADMIN
                                                                "©"</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-6 footer-list">
                                                    <ul
                                                        className="text-end d-flex  justify-content-end">
                                                        <li>
                                                            <a className="f-s-14" href="#">supports</a>
                                                        </li>
                                                        <li><a className="f-s-14" href="#"> Terms & Conditions </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Container>
                                    </footer>
                                </div>
                                <div className="mb-3">
                                    <footer className="footer-secondary">
                                        <Container fluid>
                                            <div className="row align-items-center">

                                                <div className="col-sm-6">
                                                    <ul>
                                                        <li>
                                                            <a href="index.html" className="footer-brand">RA-ADMIN
                                                                "©"</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-6 footer-list">
                                                    <ul
                                                        className="d-flex  justify-content-end">
                                                        <li>
                                                            <a className="f-s-14" href="#">supports</a>
                                                        </li>
                                                        <li><a className="f-s-14" href="#"> Terms & Conditions </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Container>
                                    </footer>
                                </div>
                                <div className="mb-3">
                                    <footer className="footer-success">
                                        <Container fluid>
                                            <div className="row align-items-center">

                                                <div className="col-sm-6">
                                                    <ul>
                                                        <li>
                                                            <a href="index.html" className="footer-brand">RA-ADMIN
                                                                "©"</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-6 footer-list">
                                                    <ul
                                                        className="text-end d-flex justify-content-end">
                                                        <li>
                                                            <a className="f-s-14" href="#">supports</a>
                                                        </li>
                                                        <li><a className="f-s-14" href="#"> Terms & Conditions </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Container>
                                    </footer>
                                </div>
                                <div className="mb-3">
                                    <footer className="footer-danger">
                                        <Container fluid>
                                            <div className="row align-items-center">

                                                <div className="col-sm-6">
                                                    <ul>
                                                        <li>
                                                            <a href="index.html" className="footer-brand">RA-ADMIN
                                                                "©"</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-6 footer-list">
                                                    <ul
                                                        className="text-end d-flex justify-content-end">
                                                        <li>
                                                            <a className="f-s-14" href="#">supports</a>
                                                        </li>
                                                        <li><a className="f-s-14" href="#"> Terms & Conditions </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Container>
                                    </footer>
                                </div>
                                <div className="mb-3">
                                    <footer className="footer-warning">
                                        <Container fluid>
                                            <div className="row align-items-center">

                                                <div className="col-sm-6">
                                                    <ul>
                                                        <li>
                                                            <a href="index.html" className="footer-brand">RA-ADMIN
                                                                "©"</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-6 footer-list">
                                                    <ul
                                                        className=" text-end d-flex justify-content-end">
                                                        <li>
                                                            <a className="f-s-14" href="#">supports</a>
                                                        </li>
                                                        <li><a className="f-s-14" href="#"> Terms & Conditions </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Container>
                                    </footer>
                                </div>
                                <div className="mb-3">
                                    <footer className="footer-info">
                                        <Container fluid>
                                            <div className="row align-items-center">

                                                <div className="col-sm-6">
                                                    <ul>
                                                        <li>
                                                            <a href="index.html" className="footer-brand">RA-ADMIN
                                                                "©"</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-6 footer-list">
                                                    <ul
                                                        className=" text-end d-flex justify-content-end">
                                                        <li>
                                                            <a className="f-s-14" href="#">supports</a>
                                                        </li>
                                                        <li><a className="f-s-14" href="#"> Terms & Conditions </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Container>
                                    </footer>
                                </div>
                                <div className="mb-3">
                                    <footer className="footer-light">
                                        <Container fluid>
                                            <div className="row align-items-center">

                                                <div className="col-sm-6">
                                                    <ul>
                                                        <li>
                                                            <a href="index.html" className="footer-brand">RA-ADMIN
                                                                "©"</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-6 footer-list">
                                                    <ul
                                                        className="text-end d-flex justify-content-end">
                                                        <li>
                                                            <a className="f-s-14" href="#">supports</a>
                                                        </li>
                                                        <li><a className="f-s-14" href="#"> Terms & Conditions </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Container>
                                    </footer>
                                </div>
                                <div className="mb-3">
                                    <footer className="footer-dark">
                                        <Container fluid>
                                            <div className="row align-items-center">

                                                <div className="col-sm-6">
                                                    <ul>
                                                        <li>
                                                            <a href="" className="footer-brand">RA-ADMIN "©"</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div className="col-sm-6 footer-list">
                                                    <ul
                                                        className="text-end d-flex justify-content-end">
                                                        <li>
                                                            <a className="f-s-14" href="#">supports</a>
                                                        </li>
                                                        <li><a className="f-s-14" href="#"> Terms & Conditions </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Container>
                                    </footer>
                                </div>
                                <pre className="variatfooter collapse mt-3" id="variatfooterExample">
                                            <code className="language-html">
                                                {`
    <div class="mb-3">
  <footer class="footer-primary">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <ul>
            <li>
              <a href="" class="footer-brand">RA-ADMIN "&copy;"</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-6">
          <ul class="text-end d-flex justify-content-sm-end justify-content-center">
            <li><a href="">supports</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

<footer class="footer-secondary">
  <!-- Footer content for secondary style -->
</footer>
<footer class="footer-success">
  <!-- Footer content for success style -->
</footer>
<footer class="footer-danger">
  <!-- Footer content for danger style -->
</footer>
<footer class="footer-warning">
  <!-- Footer content for warning style -->
</footer>
<footer class="footer-info">
  <!-- Footer content for info style -->
</footer>
<footer class="footer-light">
  <!-- Footer content for light style -->
</footer>
<footer class="footer-dark">
  <!-- Footer content for dark style -->
</footer>

                                                `}
                                                       </code>
                                        </pre>


                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={12}>
              <Card>
                            <CardHeader className="code-header">
                                <h5> Footer Custom</h5>

                                <a data-bs-toggle="collapse" href="#mainfooterExample" aria-expanded="false"
                                   aria-controls="mainfooterExample">
                                    <i className="ti ti-code source" data-source="mainfooterfooter"></i>
                                </a>
                            </CardHeader>
                            <CardBody>
                                <footer>
                                    <Container fluid>
                                        <div className="row">
                                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
                                                <div className="footer-first">
                                                    <div className="footer-title">
                                                        <img src="../assets/images/logo/1.png" className="w-140"
                                                             alt=""/>
                                                    </div>
                                                    <div className="mt-3">
                                                        <p>Here you can use rows and columns to organize your
                                                            footer
                                                            content. Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit.</p>
                                                    </div>
                                                    <div className="social-btn d-flex mt-3">
                                                        <button type="button"
                                                                className="btn btn-facebook icon-btn b-r-22"><i
                                                            className="ti ti-brand-facebook text-white"></i>
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-twitter icon-btn b-r-22 mx-3"><i
                                                            className="ti ti-brand-twitter text-white"></i></button>
                                                        <button type="button"
                                                                className="btn btn-linkedin icon-btn b-r-22 "><i
                                                            className="ti ti-brand-linkedin text-white"></i>
                                                        </button>
                                                        <button type="button"
                                                                className="btn btn-github icon-btn b-r-22 mx-3"><i
                                                            className="ti ti-brand-github text-white"></i></button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto">
                                                <div className="footer-first">
                                                    <div className="footer-title">
                                                        <h5 className="text-uppercase f-w-600 mb-3 text-primary f-s-16">
                                                            products
                                                        </h5>
                                                    </div>
                                                    <div className="footer-sub">
                                                        <ul>
                                                            <li className="mb-3">
                                                                <a href="#"
                                                                   className="f-w-500 f-s-15 text-dark">Angular</a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a href="#"
                                                                   className="f-w-500 f-s-15 text-dark">React</a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a href="#" className="f-w-500 f-s-15 text-dark">Vue</a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a href="#"
                                                                   className="f-w-500 f-s-15 text-dark">Laravel</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
                                                <div className="footer-first">
                                                    <div className="footer-title">
                                                        <h5 className="text-uppercase f-w-600 mb-3 text-primary f-s-16">
                                                            USEFUL
                                                            LINKS</h5>
                                                    </div>
                                                    <div className="footer-sub">
                                                        <ul>
                                                            <li className="mb-3">
                                                                <a href="#"
                                                                   className="f-w-500 f-s-15 text-dark">Pricing</a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a href="#"
                                                                   className="f-w-500 f-s-15 text-dark">Settings</a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a href="#"
                                                                   className="f-w-500 f-s-15 text-dark">Orders</a>
                                                            </li>
                                                            <li className="mb-3">
                                                                <a href="#"
                                                                   className="f-w-500 f-s-15 text-dark">Help</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto">
                                                <div className="footer-first">
                                                    <div className="footer-title ">
                                                        <h5 className="text-uppercase f-w-600  mb-3 text-primary f-s-16">
                                                            CONTACT
                                                        </h5>
                                                    </div>
                                                    <div className="footer-sub">
                                                        <ul>
                                                            <li className="mb-3 f-s-15 f-w-500 text-dark">
                                                                <i className="ti ti-brand-google-home me-2 text-primary"></i> New
                                                                York, NY 10012, US
                                                            </li>
                                                            <li className="mb-3 f-s-15 f-w-500 text-dark ">
                                                                <i className="ti ti-mail me-2 text-primary"></i> info@example.com


                                                            </li>
                                                            <li className="mb-3 f-s-15 f-w-500 text-dark">
                                                                <i className="ti ti-phone me-2 text-primary"></i> + 01
                                                                234 567 88
                                                            </li>
                                                            <li className="mb-3 f-s-15 f-w-500 text-dark">
                                                                <i className="ti ti-device-landline-phone me-2 text-primary"></i>
                                                                + 01 234 567 89
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </footer>
                                <pre className="mainfooterfooter collapse mt-3" id="mainfooterExample">
                                            <code className="language-html">
                                                {`
    <footer>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <div class="footer-first">
          <div class="footer-title">
            <img src="../assets/images/logo/1.png" class="w-140" alt="">
          </div>
          <div class="mt-3">
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class="social-btn d-flex mt-3">
            <button type="button" class="btn btn-facebook icon-btn b-r-22"><i class="ti ti-brand-facebook text-white"></i></button>
            <button type="button" class="btn btn-twitter icon-btn b-r-22 mx-3"><i class="ti ti-brand-twitter text-white"></i></button>
            <button type="button" class="btn btn-linkedin icon-btn b-r-22"><i class="ti ti-brand-linkedin text-white"></i></button>
            <button type="button" class="btn btn-github icon-btn b-r-22 mx-3"><i class="ti ti-brand-github text-white"></i></button>
          </div>
        </div>
      </div>
      
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
        <div class="footer-first">
          <div class="footer-title">
            <h5 class="text-uppercase f-w-600 mb-3 text-primary">Products</h5>
          </div>
          <div class="footer-sub">
            <ul>
              <li class="mb-3"><a href="">Angular</a></li>
              <li class="mb-3"><a href="">React</a></li>
              <li class="mb-3"><a href="">Vue</a></li>
              <li class="mb-3"><a href="">Laravel</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
        <div class="footer-first">
          <div class="footer-title">
            <h5 class="text-uppercase f-w-600 mb-3 text-primary">Useful Links</h5>
          </div>
          <div class="footer-sub">
            <ul>
              <li class="mb-3"><a href="">Pricing</a></li>
              <li class="mb-3"><a href="">Settings</a></li>
              <li class="mb-3"><a href="">Orders</a></li>
              <li class="mb-3"><a href="">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-3">
        <div class="footer-first">
          <div class="footer-title">
            <h5 class="text-uppercase f-w-600 mb-3 text-primary">Contact</h5>
          </div>
          <div class="footer-sub">
            <ul>
              <li class="mb-3"><i class="ti ti-brand-google-home me-2"></i> New York, NY 10012, US</li>
              <li class="mb-3"><i class="ti ti-mail me-2"></i> info@example.com</li>
              <li class="mb-3"><i class="ti ti-phone me-2"></i> + 01 234 567 88</li>
              <li class="mb-3"><i class="ti ti-device-landline-phone me-2"></i> + 01 234 567 89</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</footer>

                                                `}
                                            </code>
                                        </pre>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default FooterPage;
