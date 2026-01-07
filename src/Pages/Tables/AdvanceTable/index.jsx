
import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, CardFooter, Table} from "reactstrap";
import {projectData} from "@/Data/Datatable/advancedDatatable";
import DataTable from 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';


const Blank = () => {

    const [employees, setEmployees] = useState([
        {
            name: 'Alison Mused',
            position: 'Accountant',
            status: 'Medium',
            email: 'alison@gmail.com',
            id: '#167',
            salary: '$2000',
            date: 'December 1, 2024'
        },
        {
            name: 'Amelia Commishun',
            position: 'Junior Technical Author',
            status: 'High',
            email: 'amelia@gmail.com',
            id: '#289',
            salary: '$1200',
            date: 'December 1, 2024'
        },
        {
            name: 'Molly Story',
            position: 'Software Engineer',
            status: 'Medium',
            email: 'molly@gmail.com',
            id: '#138',
            salary: '$4500',
            date: 'December 1, 2024'
        },
        {
            name: 'Diana Book',
            position: 'Integration Specialist',
            status: 'Lower',
            email: 'diana@gmail.com',
            id: '#280',
            salary: '$5000',
            date: 'December 1, 2024'
        },
        {
            name: 'Evan Scope',
            position: 'Sales Assistant',
            status: 'High',
            email: 'evan@gmail.com',
            id: '#165',
            salary: '$2560',
            date: 'December 1, 2024'
        },
        {
            name: 'Julia Sik',
            position: 'Accountant',
            status: 'Medium',
            email: 'julia@gmail.com',
            id: '#245',
            salary: '$2400',
            date: 'December 1, 2024'
        },
        {
            name: 'Kylie Down',
            position: 'Chief Operating Officer',
            status: 'Lower',
            email: 'kylie@gmail.com',
            id: '#167',
            salary: '$1800',
            date: 'December 1, 2024'
        }
    ]);

    let shadow = null;

    const dragit = (e) => {
        shadow = e.target;
    };

    const dragover = (e) => {
        let children = Array.from(e.target.parentNode.parentNode.children);
        if (children.indexOf(e.target.parentNode) > children.indexOf(shadow)) {
            e.target.parentNode.after(shadow);
        } else {
            e.target.parentNode.before(shadow);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            new DataTable('#projectTable');
        }, 1000)
    }, []);

    return (
        <>
            <Container fluid>

                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Advance Table</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-table f-s-16"></i>  Table
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Advance Table</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Drag And Drop Table</h5>
                            </CardHeader>
                            <CardBody className="p-0">
                                <div className="table-responsive app-scroll">
                                    <Table
                                        className="table table-bottom-border advance-drag-drop-table align-middle mb-0">
                                        <thead>
                                        <tr>
                                            <th>
                                                <i className="ti ti-arrows-move fs-4 text-secondary"></i>
                                            </th>
                                            <th>Employee Name</th>
                                            <th>Position</th>
                                            <th>Status</th>
                                            <th>Email</th>
                                            <th>id</th>
                                            <th>Salary</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {employees.map((employee, index) => (
                                            <tr
                                                key={index}
                                                draggable="true"
                                                onDragStart={dragit}
                                                onDragOver={dragover}
                                            >
                                                <td>
                                                    <i className="ti ti-arrows-move fs-4 text-secondary"></i>
                                                </td>
                                                <td>{employee.name}</td>
                                                <td className="f-w-600">{employee.position}</td>
                                                <td>
                                                   <span
                                                       className={`badge text-outline-${employee.status === 'High' ? 'success' : employee.status === 'Medium' ? 'warning' : 'danger'}`}>
                                                     {employee.status}
                                                   </span>
                                                </td>
                                                <td>{employee.email}</td>
                                                <td className="f-w-500 text-primary">{employee.id}</td>
                                                <td className="f-w-500 text-warning">{employee.salary}</td>
                                                <td>{employee.date}</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger icon-btn b-r-4">
                                                        <i className="ti ti-trash"></i>
                                                    </button>
                                                    {" "}
                                                    <button type="button" className="btn btn-success icon-btn b-r-4">
                                                        <i className="ti ti-edit"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12}>
                        <Card>
                            <CardBody className="p-0">
                                <div className="app-scroll table-responsive app-datatable-default project-table">
                                    <Table id="projectTable" className="w-100 display  align-middle">
                                        <thead>
                                        <tr>
                                            <th>
                                                <label className="check-box">
                                                    <input type="checkbox" id="select-all"/>
                                                    <span className="checkmark outline-secondary ms-2"></span>
                                                </label>
                                            </th>
                                            <th>Name</th>
                                            <th>Leader</th>
                                            <th>Status</th>
                                            <th>Client</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {projectData.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <label className="check-box">
                                                        <input type="checkbox"/>
                                                        <span className="checkmark outline-secondary ms-2"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-left align-items-center">
                                                        <div
                                                            className="h-30 w-30 d-flex-center b-r-50 overflow-hidden me-2">
                                                            <img src={item.logo} alt={item.title}
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <div>
                                                            <h6 className="f-s-15 mb-0">{item.title}</h6>
                                                            <p className="text-secondary f-s-13 mb-0">{item.date}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-dark f-w-500">{item.creator}</td>
                                                <td>
                                                    <span
                                                        className={`badge bg-${item.status === 'New' ? 'primary' : item.status === 'Inprogress' ? 'warning' : item.status === 'Completed' ? 'success' : 'danger'}`}>
                                                               {item.status}
                                                    </span>
                                                </td>
                                                <td>{item.manager}</td>
                                                <td className="text-success f-w-500">{item.startDate}</td>
                                                <td className="text-danger f-w-500">{item.endDate}</td>
                                                <td>
                                                    <button type="button"
                                                            className="btn btn-danger icon-btn b-r-4 delete-btn">
                                                        <i className="ti ti-trash"></i>
                                                    </button>
                                                    {" "}
                                                    <button
                                                        type="button"
                                                        className="btn btn-success icon-btn b-r-4"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#editCardModal"
                                                    >
                                                        <i className="ti ti-edit"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>

                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Blank;
