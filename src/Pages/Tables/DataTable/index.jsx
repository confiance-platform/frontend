import React , {useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Container, Row, Table} from "reactstrap";
import DefaultDatatable from "../../../Components/Datatable/DefaultDatatable";
import BorderedDatatable from "../../../Components/Datatable/BorderedDatatable";
import ButtonsDatatable from "../../../Components/Datatable/ButtonsDatatable";
import CallbackDatatable from "../../../Components/Datatable/CallbackDatatable";

const DataTable = () => {
    useEffect(() => {
        $(function() {
            // Add event listener for opening and closing details
            $('#example4').on('click', 'tbody td.dt-control', function () {
                var tr = $(this).closest('tr');
                var row = table.row( tr );

                if ( row.child.isShown() ) {
                    // This row is already open - close it
                    row.child.hide();
                }
                else {
                    // Open this row
                    row.child( format(row.data()) ).show();
                }
            } );

            $('#example4').on('requestChild.dt', function(e, row) {
                row.child(format(row.data())).show();
            })

            var table = $('#example4').DataTable( {
                "ajax": "../assets/vendor/datatable/ajax/objects.txt",
                "rowId": 'id',
                "columns": [
                    {
                        "className":      'dt-control',
                        "orderable":      false,
                        "data":           null,
                        "defaultContent": ''
                    },
                    { "data": "name" },
                    { "data": "position" },
                    { "data": "office" },
                    { "data": "salary" }
                ],
                "order": [[1, 'asc']],
                dom: 'Blfrtip',
                buttons:['createState', 'savedStates']
            } );

            table.on('stateLoaded', (e, settings, data) => {
                for(var i = 0; i < data.childRows.length; i++) {
                    var row = table.row(data.childRows[i]);
                    row.child(format(row.data())).show();
                }
            })
        } );
    }, []);

    return (
        <div>

            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Data Table</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-table f-s-16"></i> Table
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Data Table</a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Default Datatable</h5>
                                <p>DataTables has most features enabled by default, so all you need to do to use it with
                                    your own
                                    tables is to call the construction function: <code>$().DataTable();</code>. </p>
                            </CardHeader>
                            <CardBody className="p-0">
                                <DefaultDatatable/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Row Border Bottom Example</h5>
                                <p>DataTables has most features enabled by default, so all you need to do to use it with
                                    your own
                                    ables is to call the construction function: <code>$().DataTable();</code> and border
                                    bottom
                                </p>
                            </CardHeader>
                            <CardBody className="p-0">
                                <BorderedDatatable/>
                            </CardBody>

                        </Card>
                    </Col>
                    <Col xs={12} >
                        <Card>
                            <CardHeader>
                                <h5>Buttons Example</h5>
                                <p>The Buttons extension for DataTables provides a common set of options, API methods
                                    and styling to
                                    display buttons on a page that will interact with a DataTable. The core library
                                    provides the based
                                    framework upon which plug-ins can be built.</p>
                            </CardHeader>
                            <CardBody className="p-0">
                                <ButtonsDatatable/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5>Row Created Callback Example</h5>
                                <p>The Buttons extension for DataTables provides a common set of options, API methods
                                    and styling to
                                    display buttons on a page that will interact with a DataTable. The core library
                                    provides the based
                                    framework upon which plug-ins can be built.</p>
                            </CardHeader>
                            <CardBody className="p-0">
                                <CallbackDatatable/>
                            </CardBody>
                        </Card>
                    </Col>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Child Rows Example</h5>
                                <p>The DataTables API has a number of methods for attaching child rows to a parent row
                                    in the
                                    DataTable. This can be used to show additional information about a row, useful for
                                    cases where you
                                    wish to convey more information about a row than there is space for in the host
                                    table.</p>
                            </div>
                            <div className="card-body px-0">
                                <div className="app-datatable-default overflow-auto">
                                    <Table id="example4" className="w-100 display">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Salary</th>
                                        </tr>
                                        </thead>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>

                </Row>
            </Container>
        </div>
    );
};

export default DataTable;