import React, {useEffect} from 'react';
import Prism from "prismjs";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Dropdown = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Dropdown</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-briefcase f-s-16"></i> Ui kits
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Dropdown</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5 className="txt-ellipsis">Single Button and Link Dropdown</h5>
                                <a data-bs-toggle="collapse" href="#dropdown1" aria-expanded="false"
                                   aria-controls="dropdown1">
                                    <i className="ti ti-code source" data-source="dropdown"></i></a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-2">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        Dropdown link
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="dropdown collapse mt-3" id="dropdown1">
                            <code className="language-html">
{`<div class="card">
  <div class="card-header code-header">
    <h5>Single Button and Link Dropdown</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-2">
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <div class="dropdown">
      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>`}
                          </code>
                       </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5 className="txt-ellipsis">Dropdown Submenu Menu</h5>
                                <a data-bs-toggle="collapse" href="#dropdown2" aria-expanded="false"
                                   aria-controls="dropdown2">
                                    <i className="ti ti-code source" data-source="drop2"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-2">
                                <div className="app-dropdown">
                                    <button className="btn btn-primary border-0 " type="button"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside" aria-expanded="false">
                                        Clickable Submenu
                                    </button>
                                    <div className="dropdown-menu mb-3">
                                        <a href="#" className="dropdown-item">
                                            <span> Action</span>
                                            <i className="ti ti-user-plus ms-auto"></i>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span>Another action</span>
                                            <i className="ti ti-circles-relation ms-auto"></i>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span>Something else here</span>
                                            <i className="ti ti-message-circle ms-auto"></i>
                                        </a>
                                        <hr className="dropdown-divider"/>
                                        <a className="dropdown-item border-0" role="button" data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            <span>More Option</span>
                                            <i className="ti ti-arrow-badge-right ms-auto"></i>
                                        </a>
                                        <div className="dropdown-menu sub-menu">
                                            <a href="#" className="dropdown-item">
                                                <span> Action</span>
                                                <i className="ti ti-user-plus ms-auto"></i>
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                <span>Another action</span>
                                                <i className="ti ti-circles-relation ms-auto"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="hover-dropdown app-hover-dropdown">
                                    <button className="btn btn-primary dropdown-toggle waves-effect waves-light"
                                            data-bs-toggle="dropdown"
                                            data-trigger="hover" aria-expanded="false">
                                        Hover able Dropdown
                                    </button>
                                    <ul className="dropdown-menu ">
                                        <li className="dropdown-item">
                                            <a href="#">
                                                <span> Action</span>
                                            </a>
                                            <i className="ti ti-user-plus ms-auto"></i>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="#">
                                                <span>Another action</span>
                                            </a>
                                            <i className="ti ti-circles-relation ms-auto"></i>
                                        </li>
                                        <li className="dropdown-item">
                                            <a href="#">
                                                <span>Something else here</span>
                                            </a>
                                            <i className="ti ti-message-circle ms-auto"></i>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li className="hover-dropdown">
                                            <a role="button" className="dropdown-item waves-effect waves-light"
                                               data-bs-toggle="dropdown"
                                               data-trigger="hover" aria-expanded="false">
                                                More Option
                                            </a>
                                            <ul className="dropdown-menu hover-submenu ">
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        <span> Action</span>
                                                    </a>
                                                    <i className="ti ti-user-plus ms-auto"></i>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        <span>Another action</span>
                                                    </a>
                                                    <i className="ti ti-circles-relation ms-auto"></i>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        <span>Something else here</span>
                                                    </a>
                                                    <i className="ti ti-message-circle ms-auto"></i>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>

                            </CardBody>
                        </Card>

                        <pre className="drop2 collapse mt-3" id="dropdown2">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Dropdown submenu Menu</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-2">
    <div class="app-dropdown">
      <button class="btn btn-primary border-0" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
        Clickable Submenu
      </button>
      <div class="dropdown-menu mb-3">
        <a href="#" class="dropdown-item">
          <span>Action</span>
          <i class="ti ti-user-plus ms-auto"></i>
        </a>
        <a href="#" class="dropdown-item">
          <span>Another action</span>
          <i class="ti ti-circles-relation ms-auto"></i>
        </a>
        <a href="#" class="dropdown-item">
          <span>Something else here</span>
          <i class="ti ti-message-circle ms-auto"></i>
        </a>
        <hr class="dropdown-divider">
        <a class="dropdown-item border-0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>More Option</span>
          <i class="ti ti-arrow-badge-right ms-auto"></i>
        </a>
        <div class="dropdown-menu sub-menu">
          <a href="#" class="dropdown-item">
            <span>Action</span>
            <i class="ti ti-user-plus ms-auto"></i>
          </a>
          <a href="#" class="dropdown-item">
            <span>Another action</span>
            <i class="ti ti-circles-relation ms-auto"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="hover-dropdown app-hover-dropdown">
      <button class="btn btn-primary dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" data-trigger="hover" aria-expanded="false">
        Hover able Dropdown
      </button>
      <ul class="dropdown-menu bg-dark">
        <li class="dropdown-item">
          <a href="#">
            <span>Action</span>
          </a>
          <i class="ti ti-user-plus ms-auto"></i>
        </li>
        <li class="dropdown-item">
          <a href="#">
            <span>Another action</span>
          </a>
          <i class="ti ti-circles-relation ms-auto"></i>
        </li>
        <li class="dropdown-item">
          <a href="#">
            <span>Something else here</span>
          </a>
          <i class="ti ti-message-circle ms-auto"></i>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li class="hover-dropdown">
          <a role="button" class="dropdown-item waves-effect waves-light" data-bs-toggle="dropdown" data-trigger="hover" aria-expanded="false">
            More Option
          </a>
          <ul class="dropdown-menu hover-submenu bg-dark">
            <li class="dropdown-item">
              <a href="#">
                <span>Action</span>
              </a>
              <i class="ti ti-user-plus ms-auto"></i>
            </li>
            <li class="dropdown-item">
              <a href="#">
                <span>Another action</span>
              </a>
              <i class="ti ti-circles-relation ms-auto"></i>
            </li>
            <li class="dropdown-item">
              <a href="#">
                <span>Something else here</span>
              </a>
              <i class="ti ti-message-circle ms-auto"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>`}

                          </code>
                      </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5 className="txt-ellipsis">Menu Content Dropdown</h5>
                                <a data-bs-toggle="collapse" href="#dropdown3" aria-expanded="false"
                                   aria-controls="dropdown3">
                                    <i className="ti ti-code source" data-source="drop3"></i>
                                </a>
                            </CardHeader>
                            <CardBody className="">
                                <div className="d-flex flex-wrap gap-2">
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-success dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            Header <i className="mdi mdi-chevron-down"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-header noti-title">
                                                <h5 className="text-muted text-truncate mn-0">Welcome Jessie!</h5>
                                            </div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-danger dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            Text <i className="mdi mdi-chevron-down"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-md p-3">
                                            <p>
                                                Some example text that's free-flowing within the dropdown menu.
                                            </p>
                                            <p className="mb-0">
                                                And this is more example text.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-warning dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            Forms <i className="mdi mdi-chevron-down"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-md form-dropdown p-4">
                                            <form>
                                                <div className="mb-2">
                                                    <label className="form-label" htmlFor="exampleDropdownFormEmail">Email
                                                        address</label>
                                                    <input type="email" className="form-control"
                                                           id="exampleDropdownFormEmail"
                                                           placeholder="email@example.com"/>
                                                </div>
                                                <div className="mb-2">
                                                    <label className="form-label"
                                                           htmlFor="exampleDropdownFormPassword">Password</label>
                                                    <input type="password" className="form-control"
                                                           id="exampleDropdownFormPassword"
                                                           placeholder="Password"/>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="form-check custom-checkbox">
                                                        <input type="checkbox" className="form-check-input"
                                                               id="rememberDropdownCheck"/>
                                                        <label className="form-check-label"
                                                               htmlFor="rememberDropdownCheck">Remember me</label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Sign in</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="drop3 collapse mt-3" id="dropdown3">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Menu Content Dropdown</h5>
  </div>
  <div class="card-body">
    <div class="d-flex flex-wrap gap-2">
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Header <i class="mdi mdi-chevron-down"></i>
        </button>
        <div class="dropdown-menu">
          <div class="dropdown-header noti-title">
            <h5 class="text-muted text-truncate mn-0">Welcome Jessie!</h5>
          </div>
          <!-- item-->
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Text <i class="mdi mdi-chevron-down"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-md p-3">
          <p>
            Some example text that's free-flowing within the dropdown menu.
          </p>
          <p class="mb-0">
            And this is more example text.
          </p>
        </div>
      </div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Forms <i class="mdi mdi-chevron-down"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-md form-dropdown p-4">
          <form>
            <div class="mb-2">
              <label class="form-label" for="exampleDropdownFormEmail">Email address</label>
              <input type="email" class="form-control" id="exampleDropdownFormEmail" placeholder="email@example.com">
            </div>
            <div class="mb-2">
              <label class="form-label" for="exampleDropdownFormPassword">Password</label>
              <input type="password" class="form-control" id="exampleDropdownFormPassword" placeholder="Password">
            </div>
            <div class="mb-2">
              <div class="form-check custom-checkbox">
                <input type="checkbox" class="form-check-input" id="rememberDropdownCheck">
                <label class="form-check-label" for="rememberDropdownCheck">Remember me</label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`}

                          </code>
                        </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5 className="txt-ellipsis">Dropdown Color Variant</h5>
                                <a data-bs-toggle="collapse" href="#dropdown4" aria-expanded="false"
                                   aria-controls="dropdown4">
                                    <i className="ti ti-code source" data-source="drop4"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-2">
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-primary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Primary
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-secondary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Secondary
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-success dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Success
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-danger dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Danger
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-warning dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Warning
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-info dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Info
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-light dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Light
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-dark dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Dark
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>


                        <pre className="drop4 collapse mt-3" id="dropdown4">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Dropdown Color Variant</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-2">
    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Primary
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Secondary
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Success
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Danger
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Warning
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Info
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Light
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dark
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>`}

                            </code>
                        </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Sizing Dropdown</h5>
                                <a data-bs-toggle="collapse" href="#dropdown5" aria-expanded="false"
                                   aria-controls="dropdown5">
                                    <i className="ti ti-code source" data-source="drop5"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-3">
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-primary btn-lg dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Large button
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-secondary btn-lg">Large split button
                                        </button>
                                        <button type="button"
                                                className="btn btn-secondary opacity-75  btn-lg dropdown-toggle dropdown-toggle-split"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-success btn-sm dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            Small button
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-danger btn-sm"> Small split button
                                        </button>
                                        <button type="button"
                                                className="btn btn-danger opacity-75  btn-sm dropdown-toggle dropdown-toggle-split"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="drop5 collapse mt-3" id="dropdown5">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Sizing Dropdown</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-3">
    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Large button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-secondary btn-lg">Large split button</button>
        <button type="button" class="btn btn-secondary opacity-75 btn-lg dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Small button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-danger btn-sm">Small split button</button>
        <button type="button" class="btn btn-danger opacity-75 btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>`}
                          </code>
                      </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5 className="txt-ellipsis">Dropdown Outline Variant</h5>
                                <a data-bs-toggle="collapse" href="#dropdown6" aria-expanded="false"
                                   aria-controls="dropdown6">
                                    <i className="ti ti-code source" data-source="drop6"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-2">
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-outline-primary">Primary</button>
                                        <button type="button"
                                                className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Primary</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-outline-secondary">Secondary</button>
                                        <button type="button"
                                                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Secondary</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-outline-success">Success</button>
                                        <button type="button"
                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Success</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-outline-danger">Danger</button>
                                        <button type="button"
                                                className="btn btn-outline-danger dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Danger</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-outline-warning">Warning</button>
                                        <button type="button"
                                                className="btn btn-outline-warning dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Warning</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-outline-info">Info</button>
                                        <button type="button"
                                                className="btn btn-outline-info dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Info</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-outline-light">Light</button>
                                        <button type="button"
                                                className="btn btn-outline-light dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Light</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group btn-rtl">
                                        <button type="button" className="btn btn-outline-dark">Dark</button>
                                        <button type="button"
                                                className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Dark</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </CardBody>

                        </Card>

                        <pre className="drop6 collapse mt-3" id="dropdown6">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Dropdown Outline Variant</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-2">

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split p-2" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Primary</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split p-2" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Secondary</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-success dropdown-toggle dropdown-toggle-split p-2" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Success</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split p-2" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Danger</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split p-2" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Warning</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split p-2" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Info</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-light dropdown-toggle dropdown-toggle-split p-2" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Light</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

    <div>
      <div class="btn-group btn-rtl">
        <button type="button" class="btn btn-outline-dark">Dark</button>
        <button type="button" class="btn btn-outline-dark dropdown-toggle dropdown-toggle-split p-2" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Dark</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>

  </div>
</div>`}

                          </code>
                      </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Alignment Options</h5>
                                <a data-bs-toggle="collapse" href="#dropdown7" aria-expanded="false"
                                   aria-controls="dropdown7">
                                    <i className="ti ti-code source" data-source="drop7"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-2 alignment-dropdown">
                                <div className="btn-group btn-rtl">
                                    <button className="btn btn-outline-primary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Dropdown <i className="ti ti-arrow-big-down-line"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group btn-rtl">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Right-aligned menu <i className="ti ti-arrow-big-down-line"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group btn-rtl">
                                    <button type="button" className="btn btn-outline-success dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            data-bs-display="static" aria-expanded="false"> right-aligned lg <i
                                        className="ti ti-arrow-big-down-line"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-lg-end">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>

                                <div className="btn-group btn-rtl">
                                    <button type="button" className="btn btn-outline-danger dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            data-bs-display="static" aria-expanded="false"> left-aligned lg <i
                                        className="ti ti-arrow-big-down-line"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>

                                <div className="btn-group dropstart">
                                    <button type="button" className="btn btn-outline-warning dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        <i className="ti ti-arrow-big-left-line"></i> Dropstart
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>

                                <div className="btn-group dropend">
                                    <button type="button" className="btn btn-outline-info dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Dropend <i className="ti ti-arrow-big-right-line"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>

                                <div className="btn-group dropup">
                                    <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Dropup <i className="ti ti-arrow-big-up-line"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="drop7 collapse mt-3" id="dropdown7">
                            <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Alignment Options</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-2 alignment-dropdown">
    <div class="btn-group btn-rtl">
      <button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown <i class="ti ti-arrow-big-down-line"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>

    <div class="btn-group btn-rtl">
      <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Right-aligned menu <i class="ti ti-arrow-big-down-line"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>

    <div class="btn-group btn-rtl">
      <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        right-aligned lg <i class="ti ti-arrow-big-down-line"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>

    <div class="btn-group btn-rtl">
      <button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
        left-aligned lg <i class="ti ti-arrow-big-down-line"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>

    <div class="btn-group dropstart">
      <button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="ti ti-arrow-big-left-line"></i> Dropstart
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>

    <div class="btn-group dropend">
      <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropend <i class="ti ti-arrow-big-right-line"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>

    <div class="btn-group dropup">
      <button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropup <i class="ti ti-arrow-big-up-line"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>
  </div>
</div>`}

                          </code>
                      </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Dropdown Light Variant</h5>
                                <a data-bs-toggle="collapse" href="#dropdown8" aria-expanded="false"
                                   aria-controls="dropdown8">
                                    <i className="ti ti-code source" data-source="drop8"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-2">
                                <div>
                                    <div className="btn-group dropdown-light btn-rtl">
                                        <button type="button" className="btn btn-light-primary ">Primary</button>
                                        <button type="button"
                                                className="btn btn-light-primary dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                            <i className="ti ti-arrow-badge-down f-s-16"></i>

                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group dropdown-light btn-rtl">
                                        <button type="button" className="btn btn-light-secondary">Secondary</button>
                                        <button type="button"
                                                className="btn btn-light-secondary dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                            <i className="ti ti-arrow-badge-down f-s-16"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group dropdown-light btn-rtl">
                                        <button type="button" className="btn btn-light-success">Success</button>
                                        <button type="button"
                                                className="btn btn-light-success dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                            <i className="ti ti-arrow-badge-down f-s-16"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group dropdown-light btn-rtl">
                                        <button type="button" className="btn btn-light-danger">Danger</button>
                                        <button type="button"
                                                className="btn btn-light-danger dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                            <i className="ti ti-arrow-badge-down f-s-16"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group dropdown-light btn-rtl">
                                        <button type="button" className="btn btn-light-warning">Warning</button>
                                        <button type="button"
                                                className="btn btn-light-warning dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                            <i className="ti ti-arrow-badge-down f-s-16"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group dropdown-light btn-rtl">
                                        <button type="button" className="btn btn-light-info">Info</button>
                                        <button type="button"
                                                className="btn btn-light-info dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                            <i className="ti ti-arrow-badge-down f-s-16"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group dropdown-light btn-rtl">
                                        <button type="button" className="btn btn-light-light">Light</button>
                                        <button type="button"
                                                className="btn btn-light-light dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                            <i className="ti ti-arrow-badge-down f-s-16"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="btn-group dropdown-light btn-rtl">
                                        <button type="button" className="btn btn-light-dark">Dark</button>
                                        <button type="button"
                                                className="btn btn-light-dark dropdown-toggle dropdown-toggle-split p-2"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                            <i className="ti ti-arrow-badge-down f-s-16"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </CardBody>

                        </Card>


                        <pre className="drop8 collapse mt-3" id="dropdown8">
                          <code className="language-html">
{`<div class="card">
  <div class="card-header">
    <h5>Dropdown Light Variant</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-2">
    <div>
      <div class="btn-group dropdown-light btn-rtl">
        <button type="button" class="btn btn-light-primary">Primary</button>
        <button type="button" class="btn btn-light-primary dropdown-toggle dropdown-toggle-split p-2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
          <i class="ti ti-arrow-badge-down f-s-16"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group dropdown-light btn-rtl">
        <button type="button" class="btn btn-light-secondary">Secondary</button>
        <button type="button" class="btn btn-light-secondary dropdown-toggle dropdown-toggle-split p-2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
          <i class="ti ti-arrow-badge-down f-s-16"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group dropdown-light btn-rtl">
        <button type="button" class="btn btn-light-success">Success</button>
        <button type="button" class="btn btn-light-success dropdown-toggle dropdown-toggle-split p-2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
          <i class="ti ti-arrow-badge-down f-s-16"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group dropdown-light btn-rtl">
        <button type="button" class="btn btn-light-danger">Danger</button>
        <button type="button" class="btn btn-light-danger dropdown-toggle dropdown-toggle-split p-2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
          <i class="ti ti-arrow-badge-down f-s-16"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group dropdown-light btn-rtl">
        <button type="button" class="btn btn-light-warning">Warning</button>
        <button type="button" class="btn btn-light-warning dropdown-toggle dropdown-toggle-split p-2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
          <i class="ti ti-arrow-badge-down f-s-16"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group dropdown-light btn-rtl">
        <button type="button" class="btn btn-light-info">Info</button>
        <button type="button" class="btn btn-light-info dropdown-toggle dropdown-toggle-split p-2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
          <i class="ti ti-arrow-badge-down f-s-16"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group dropdown-light btn-rtl">
        <button type="button" class="btn btn-light-light">Light</button>
        <button type="button" class="btn btn-light-light dropdown-toggle dropdown-toggle-split p-2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
          <i class="ti ti-arrow-badge-down f-s-16"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="btn-group dropdown-light btn-rtl">
        <button type="button" class="btn btn-light-dark">Dark</button>
        <button type="button" class="btn btn-light-dark dropdown-toggle dropdown-toggle-split p-2"
          data-bs-toggle="dropdown" aria-expanded="false">
          <span class="visually-hidden">Toggle Dropdown</span>
          <i class="ti ti-arrow-badge-down f-s-16"></i>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
`}
                          </code>
                      </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Dropup Variation</h5>
                                <a data-bs-toggle="collapse" href="#dropdown9" aria-expanded="false"
                                   aria-controls="dropdown9">
                                    <i className="ti ti-code source" data-source="drop9"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-2">
                                <div className="btn-group dropup dropdown-light btn-rtl">
                                    <button type="button" className="btn  btn-light-primary dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Dropup <i className="ti ti-arrow-narrow-up"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropup dropdown-light btn-rtl">
                                    <button type="button" className="btn btn-light-secondary">
                                        Split dropup
                                    </button>
                                    <button type="button"
                                            className="btn btn-light-secondary dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown </span>
                                        <i className="ti ti-arrow-narrow-up"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropend dropdown-light">
                                    <button type="button" className="btn btn-light-success dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Dropend <i className="ti ti-arrow-narrow-right"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropend dropdown-light btn-rtl">
                                    <button type="button" className="btn btn-light-danger">
                                        Split dropend
                                    </button>
                                    <button type="button"
                                            className="btn btn-light-danger dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropend </span>
                                        <i className="ti ti-arrow-narrow-right"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropstart dropdown-light">
                                    <button type="button" className="btn btn-light-warning dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        <i className="ti ti-arrow-narrow-left"></i> Dropstart
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropstart dropdown-light btn-rtl">
                                    <button type="button"
                                            className="btn btn-light-info dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropstart</span>
                                        <i className="ti ti-arrow-narrow-left"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                    <button type="button" className="btn btn-light-info">
                                        Split dropstart
                                    </button>
                                </div>
                                <div className="dropdown dropdown-light">
                                    <button className="btn btn-light-light dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Dropup <i className="ti ti-arrow-narrow-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button className="dropdown-item" type="button">Action</button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button">Another action</button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" type="button">Something else here</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="btn-group dropdown-light btn-rtl">
                                    <button type="button" className="btn btn-light-dark">Dropup</button>
                                    <button type="button"
                                            className="btn btn-light-dark dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                        <i className="ti ti-arrow-narrow-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="drop9 collapse mt-3" id="dropdown9">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Dropup Variation</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-2">
    <!-- Dropup -->
    <div class="btn-group dropup dropdown-light btn-rtl">
      <button type="button" class="btn btn-light-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropup <i class="ti ti-arrow-narrow-up"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>

    <!-- Split Dropup -->
    <div class="btn-group dropup dropdown-light btn-rtl">
      <button type="button" class="btn btn-light-secondary">
        Split dropup
      </button>
      <button type="button" class="btn btn-light-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
        <i class="ti ti-arrow-narrow-up"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>

    <!-- Dropend -->
    <div class="btn-group dropend dropdown-light">
      <button type="button" class="btn btn-light-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropend <i class="ti ti-arrow-narrow-right"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>

    <!-- Split Dropend -->
    <div class="btn-group dropend dropdown-light btn-rtl">
      <button type="button" class="btn btn-light-danger">
        Split dropend
      </button>
      <button type="button" class="btn btn-light-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropend</span>
        <i class="ti ti-arrow-narrow-right"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>

    <!-- Dropstart -->
    <div class="btn-group dropstart dropdown-light">
      <button type="button" class="btn btn-light-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="ti ti-arrow-narrow-left"></i> Dropstart
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>

    <!-- Split Dropstart -->
    <div class="btn-group dropstart dropdown-light btn-rtl">
      <button type="button" class="btn btn-light-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropstart</span>
        <i class="ti ti-arrow-narrow-left"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
      <button type="button" class="btn btn-light-info">
        Split dropstart
      </button>
    </div>

    <!-- Dropup with Default Dropdown -->
    <div class="dropdown dropdown-light">
      <button class="btn btn-light-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropup <i class="ti ti-arrow-narrow-down"></i>
      </button>
      <ul class="dropdown-menu">
        <li><button class="dropdown-item" type="button">Action</button></li>
        <li><button class="dropdown-item" type="button">Another action</button></li>
        <li><button class="dropdown-item" type="button">Something else here</button></li>
      </ul>
    </div>

    <!-- Split Dropup with Dark Button -->
    <div class="btn-group dropdown-light btn-rtl">
      <button type="button" class="btn btn-light-dark">Dropup</button>
      <button type="button" class="btn btn-light-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
        <i class="ti ti-arrow-narrow-down"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
</div>
`}

                          </code>
                      </pre>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader className=" code-header">
                                <h5>Auto Close Behaviour</h5>
                                <a data-bs-toggle="collapse" href="#dropdown10" aria-expanded="false"
                                   aria-controls="dropdown10">
                                    <i className="ti ti-code source" data-source="drop10"></i>
                                </a>
                            </CardHeader>
                            <CardBody className=" d-flex flex-wrap gap-2">
                                <div className="btn-group dropdown-light btn-rtl">
                                    <button className="btn btn-primary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="true" aria-expanded="false">
                                        Default dropdown <i className="ti ti-circle-arrow-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropdown-light btn-rtl">
                                    <button className="btn btn-secondary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="inside" aria-expanded="false">
                                        Clickable outside <i className="ti ti-circle-arrow-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropdown-light btn-rtl">
                                    <button className="btn btn-success dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside" aria-expanded="false">
                                        Clickable inside <i className="ti ti-circle-arrow-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group dropdown-light btn-rtl">
                                    <button className="btn btn-danger dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="false" aria-expanded="false">
                                        Manual close <i className="ti ti-circle-arrow-down"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                            </CardBody>
                        </Card>

                        <pre className="drop10 collapse mt-3" id="dropdown10">
                            <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Auto close behavior</h5>
  </div>
  <div class="card-body d-flex flex-wrap gap-2">
    <div class="btn-group dropdown-light btn-rtl">
      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
        data-bs-auto-close="true" aria-expanded="false">
        Default dropdown <i class="ti ti-circle-arrow-down"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>
    <div class="btn-group dropdown-light btn-rtl">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
        data-bs-auto-close="inside" aria-expanded="false">
        Clickable outside <i class="ti ti-circle-arrow-down"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>
    <div class="btn-group dropdown-light btn-rtl">
      <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
        data-bs-auto-close="outside" aria-expanded="false">
        Clickable inside <i class="ti ti-circle-arrow-down"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>
    <div class="btn-group dropdown-light btn-rtl">
      <button class="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown"
        data-bs-auto-close="false" aria-expanded="false">
        Manual close <i class="ti ti-circle-arrow-down"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
        <li><a class="dropdown-item" href="#">Menu item</a></li>
      </ul>
    </div>
  </div>
</div>`}

                          </code>
                      </pre>
                    </Col>
                    <Col xs={12}>
                        <Row>

                            <div className="col-md-6">
                                <Card>
                                    <CardHeader className=" code-header">
                                        <h5>With Icon Dropdown</h5>
                                        <a data-bs-toggle="collapse" href="#dropdown12" aria-expanded="false"
                                           aria-controls="dropdown12">
                                            <i className="ti ti-code source" data-source="drop12"></i>
                                        </a>
                                    </CardHeader>
                                    <CardBody className="">
                                        <div className="btn-group btn-rtl">
                                            <button className="btn btn-light-secondary dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                    aria-expanded="false">
                                                <i className="ti ti-arrow-bar-down"></i> Default dropdown
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-arrow-badge-right"></i> Menu item</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-arrow-badge-right"></i> Menu item</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-arrow-badge-right"></i> Menu item</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>

                                <pre className="drop12 collapse mt-3" id="dropdown12">
                                    <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>With Icon Dropdown</h5>
  </div>
  <div class="card-body">
    <div class="btn-group btn-rtl">
      <button class="btn btn-light-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        <i class="ti ti-arrow-bar-down"></i> Default dropdown
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#"><i class="ti ti-arrow-badge-right"></i> Menu item</a></li>
        <li><a class="dropdown-item" href="#"><i class="ti ti-arrow-badge-right"></i> Menu item</a></li>
        <li><a class="dropdown-item" href="#"><i class="ti ti-arrow-badge-right"></i> Menu item</a></li>
      </ul>
    </div>
  </div>
</div>`}

                                    </code>
                                </pre>
                            </div>
                            <div className="col-md-4">
                                <Card>
                                    <CardHeader className=" code-header">
                                        <h5>Hover Dropdown </h5>
                                        <a data-bs-toggle="collapse" href="#dropdown11" aria-expanded="false"
                                           aria-controls="dropdown11">
                                            <i className="ti ti-code source" data-source="drop11"></i>
                                        </a>
                                    </CardHeader>
                                    <CardBody className="">
                                        <div className="btn-group hover-dropdown">
                                            <button type="button"
                                                    className="btn btn-light-primary dropdown-toggle waves-effect waves-light"
                                                    data-bs-toggle="dropdown" data-trigger="hover"
                                                    aria-expanded="false">Hover
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item">Action</a></li>
                                                <li><a className="dropdown-item">Something else here</a></li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li><a className="dropdown-item">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>

                                <pre className="drop11 collapse mt-3" id="dropdown11">
                                    <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Hover Dropdown</h5>
  </div>
  <div class="card-body">
    <div class="btn-group hover-dropdown">
      <button type="button" class="btn btn-light-primary dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" data-trigger="hover" aria-expanded="false">Hover</button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item">Action</a></li>
        <li><a class="dropdown-item">Another action</a></li>
        <li><a class="dropdown-item">Something else here</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item">Separated link</a></li>
      </ul>
    </div>
  </div>
</div>`}

                                  </code>
                                </pre>
                            </div>
                            <div className="col-md-2">
                                <Card>
                                    <CardHeader className=" code-header">
                                        <h5>Icon</h5>
                                        <a data-bs-toggle="collapse" href="#dropdown13" aria-expanded="false"
                                           aria-controls="dropdown13">
                                            <i className="ti ti-code source" data-source="drop13"></i>
                                        </a>
                                    </CardHeader>
                                    <CardBody className="">
                                        <div className="btn-group dropdown-icon-none">
                                            <button className="btn btn-light-success icon-btn b-r-4 dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                    aria-expanded="false">
                                                <i className="ti ti-capture"></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-arrow-badge-right"></i> Menu item</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-arrow-badge-right"></i> Menu item</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#"><i
                                                    className="ti ti-arrow-badge-right"></i> Menu item</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>

                                <pre className="drop13 collapse mt-3" id="dropdown13">
                                    <code className="language-html">

{`<div class="card">
  <div class="card-header">
    <h5>Icon</h5>
  </div>
  <div class="card-body">
    <div class="btn-group dropdown-icon-none">
      <button class="btn btn-light-success icon-btn b-r-4 dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
        <i class="ti ti-capture"></i>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#"><i class="ti ti-arrow-badge-right"></i> Menu item</a></li>
        <li><a class="dropdown-item" href="#"><i class="ti ti-arrow-badge-right"></i> Menu item</a></li>
        <li><a class="dropdown-item" href="#"><i class="ti ti-arrow-badge-right"></i> Menu item</a></li>
      </ul>
    </div>
  </div>
</div>`}

                                    </code>
                                </pre>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Custom Dropdown Menu</h5>
                            </CardHeader>
                            <CardBody className="">
                                <Row>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <div className="app-dropdown">
                                            <button className="btn btn-lg border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu show">
                                                <li className="dropdown-item">
                                                    <a href="#" >
                                                        <i className="ti ti-user-plus pe-2"></i>
                                                        <span> Action</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" >
                                                        <i className="ti ti-circles-relation  pe-2"></i>
                                                        <span>Another action</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" >
                                                        <i className="ti ti-message-circle  pe-2"></i>
                                                        <span>Something else here</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item">
                                                    <a href="#" >
                                                        <i className="ti ti-settings pe-2"></i>
                                                        Settings
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <div className="app-dropdown show">
                                            <button className="btn btn-lg border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu show">
                                                <li className="d-flex align-items-center justify-content-between my-1">
                                                    <div className="p-2">
                                                        <div
                                                            className="bg-secondary h-35 w-35 d-flex-center b-r-50 position-relative">
                                                            <img src="../assets/images/avtar/1.png" alt=""
                                                                 className="img-fluid b-r-50"/>
                                                            <span
                                                                className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0">Brian Baker</h6>
                                                        <p className="text-muted">Manager</p>
                                                    </div>

                                                    <div>
                                                        <i className="ti ti-settings text-muted fs-4 p-2"></i>
                                                    </div>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        <i className="ti ti-user-plus pe-2"></i>
                                                        <span> Action</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        <i className="ti ti-circles-relation pe-2"></i>
                                                        <span>Another action</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        <i className="ti ti-message-circle pe-2"></i>
                                                        <span>Something else here</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <div className="app-dropdown">
                                            <button className="btn btn-lg border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu show">
                                                <li className="dropdown-item">
                                                    <a href="#" className="ms-2">
                                                        Action
                                                    </a>
                                                    <i className="ti ti-user-plus ms-auto"></i>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="ms-2">
                                                        Another action
                                                    </a>
                                                    <i className="ti ti-circles-relation ms-auto"></i>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="ms-2">
                                                        Something else here
                                                    </a>
                                                    <i className="ti ti-message-circle ms-auto"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="ms-2">
                                                        Settings
                                                    </a>
                                                    <i className="ti ti-settings ms-auto"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <div className="app-dropdown">
                                            <button className="btn btn-lg border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu show">
                                                <li className="d-flex align-items-center justify-content-between my-1">

                                                    <div className="p-2">
                                                        <div
                                                            className="bg-secondary h-35 w-35 d-flex-center b-r-50 position-relative">
                                                            <img src="../assets/images/avtar/1.png" alt=""
                                                                 className="img-fluid b-r-50"/>
                                                            <span
                                                                className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                                                        </div>
                                                    </div>

                                                    <div className="flex-grow-1">
                                                        <h6 className="mb-0">Brian Baker</h6>
                                                        <p className="text-muted">Manager</p>
                                                    </div>

                                                    <div>
                                                        <i className="ti ti-settings text-muted fs-4 p-2"></i>
                                                    </div>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="ms-2">
                                                        Action
                                                    </a>
                                                    <i className="ti ti-user-plus ms-auto"></i>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="ms-2">
                                                        Another action
                                                    </a>
                                                    <i className="ti ti-circles-relation ms-auto"></i>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#" className="ms-2">
                                                        Something else here
                                                    </a>
                                                    <i className="ti ti-message-circle ms-auto"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="app-dropdown">
                                            <button className="btn btn-lg border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu show mb-3">
                                                <li className="dropdown-item">
                                                    <input className="form-check-input me-2" type="checkbox"/>
                                                    <a href="#" className="me-2">
                                                        <span> Action</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <input className="form-check-input me-2" type="checkbox"/>
                                                    <a href="#" className="me-2">
                                                        <span>Another action</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <input className="form-check-input me-2" type="checkbox"/>
                                                    <a href="#" className="me-2">
                                                        <span>Something else here</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item form-check">
                                                    <input className="form-check-input me-2 ms-1" type="radio"
                                                           name="flexRadioDefault"
                                                           id="flexRadioDefault1"/>
                                                    <a href="#" className="me-2">
                                                        Default radio
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="app-dropdown">
                                            <button className="btn btn-lg border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu show mb-3">
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <a href="#">
                                                        Action
                                                    </a>
                                                    <span className="badge text-light-primary">message</span>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <a href="#">
                                                        Another action
                                                    </a>
                                                    <span className="badge text-light-secondary">message</span>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <a href="#">
                                                        Something else
                                                    </a>
                                                    <span className="badge text-light-success">message</span>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <a href="#">
                                                        Something else here
                                                    </a>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4">
                                        <div className="app-dropdown">
                                            <button className="btn btn-lg border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu show">
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        Action
                                                    </a>
                                                </li>
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        Another action
                                                    </a>
                                                </li>
                                                <li className="dropdown-item active">
                                                    <a href="#">
                                                        Something else here
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item">
                                                    <a href="#">
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Color Dropdown Menu</h5>
                            </CardHeader>
                            <CardBody className="">
                                <Row>
                                    <div className="col-md-6 col-xl-4">
                                        <div className="app-dropdown">
                                            <button className="btn border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu menu-primary show">
                                                <li className="dropdown-item d-flex justify-content-between">

                                                    <span> Action</span>
                                                    <i className="ti ti-user-plus"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Another action</span>
                                                    <i className="ti ti-circles-relation"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Something else here</span>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Settings</span>
                                                    <i className="ti ti-settings"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xl-4">
                                        <div className="app-dropdown">
                                            <button className="btn border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu menu-secondary show">
                                                <li className="dropdown-item d-flex justify-content-between">

                                                    <span> Action</span>
                                                    <i className="ti ti-user-plus"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Another action</span>
                                                    <i className="ti ti-circles-relation"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Something else here</span>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Settings</span>
                                                    <i className="ti ti-settings"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xl-4">
                                        <div className="app-dropdown">
                                            <button className="btn border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu menu-success show">
                                                <li className="dropdown-item d-flex justify-content-between">

                                                    <span> Action</span>
                                                    <i className="ti ti-user-plus"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Another action</span>
                                                    <i className="ti ti-circles-relation"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Something else here</span>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Settings</span>
                                                    <i className="ti ti-settings"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xl-4">
                                        <div className="app-dropdown">
                                            <button className="btn border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu menu-danger show">
                                                <li className="dropdown-item d-flex justify-content-between">

                                                    <span> Action</span>
                                                    <i className="ti ti-user-plus"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Another action</span>
                                                    <i className="ti ti-circles-relation"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Something else here</span>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Settings</span>
                                                    <i className="ti ti-settings"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xl-4">
                                        <div className="app-dropdown">
                                            <button className="btn border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu menu-warning show">
                                                <li className="dropdown-item d-flex justify-content-between">

                                                    <span> Action</span>
                                                    <i className="ti ti-user-plus"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Another action</span>
                                                    <i className="ti ti-circles-relation"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Something else here</span>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Settings</span>
                                                    <i className="ti ti-settings"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xl-4">
                                        <div className="app-dropdown">
                                            <button className="btn border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu menu-info show">
                                                <li className="dropdown-item d-flex justify-content-between">

                                                    <span> Action</span>
                                                    <i className="ti ti-user-plus"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Another action</span>
                                                    <i className="ti ti-circles-relation"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Something else here</span>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Settings</span>
                                                    <i className="ti ti-settings"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xl-4">
                                        <div className="app-dropdown">
                                            <button className="btn border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu menu-light show">
                                                <li className="dropdown-item d-flex justify-content-between">

                                                    <span> Action</span>
                                                    <i className="ti ti-user-plus"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Another action</span>
                                                    <i className="ti ti-circles-relation"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Something else here</span>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Settings</span>
                                                    <i className="ti ti-settings"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xl-4">
                                        <div className="app-dropdown">
                                            <button className="btn border-0 icon-btn" type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="true" aria-expanded="false">
                                                <i className="ti ti-dots"></i>
                                            </button>
                                            <ul className="dropdown-menu menu-dark show">
                                                <li className="dropdown-item d-flex justify-content-between">

                                                    <span> Action</span>
                                                    <i className="ti ti-user-plus"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Another action</span>
                                                    <i className="ti ti-circles-relation"></i>
                                                </li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Something else here</span>
                                                    <i className="ti ti-message-circle"></i>
                                                </li>
                                                <li className="dropdown-divider"></li>
                                                <li className="dropdown-item d-flex justify-content-between">
                                                    <span>Settings</span>
                                                    <i className="ti ti-settings"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dropdown;