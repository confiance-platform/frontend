import React , {useEffect} from 'react';
import Prism from "prismjs";
import InitDataListBox from '../../../Data/Duallistbox/initDataListBox';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const DualList = () => {
    useEffect(() => {
        Prism.highlightAll();
        InitDataListBox()
    }, []);

    return (
        <div>
            <Container fluid>
            <Row className="m-1">
                        <Col xs={12}>
                            <h4 className="main-title">Dual Listboxes</h4>
                            <ul className="app-line-breadcrumbs mb-3">
                                <li className="">
                                    <a href="#" className="f-s-14 f-w-500">
                                        <span>
                                            <i className="ph-duotone  ph-cardholder f-s-16"></i>  Forms elements
                                        </span>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="#" className="f-s-14 f-w-500">Dual Listboxes</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <a className="card-header code-header" data-bs-toggle="collapse" href="#collapseExample"
                               aria-expanded="false" aria-controls="collapseExample">
                                <h5>Select by class</h5>
                                <i className="ti ti-code source" data-source="dlb1"></i>
                            </a>
                            <CardBody>
                                <select className="select1" multiple>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <pre className="dlb1 collapse mt-3" id="collapseExample">
                                    <code className="language-html">
{`
<select class="select1" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<script>
    let dlb1 = new DualListbox('.select1');
</script>
`}
                                    </code>
                                </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <a className="card-header code-header" data-bs-toggle="collapse" href="#dlb2Example"
                               aria-expanded="false"
                               aria-controls="dlb2Example">
                                <h5> Add options and add eventListeners </h5>
                                <i className="ti ti-code source" data-source="dlb2"></i>
                            </a>
                            <CardBody>
                                <div className="selected-element d-flex mb-2 f-w-600">
                                    <label>Selected element :&nbsp;</label>
                                    <ul className="changed-element text-primary">
                                        <li> Nothing yet</li>
                                    </ul>
                                </div>
                                <select className="select2 " multiple>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <pre className="dlb2 collapse mt-3" id="dlb2Example">
                                    <code className="language-html">
{`
<select class="select2" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<script>
    let dlb2 = new DualListbox('.select2', {
        availableTitle: 'Available numbers',
        selectedTitle: 'Selected numbers',
        addButtonText: '>',
        removeButtonText: '>',
        addAllButtonText: '>>',
        removeAllButtonText: '>>',
        searchPlaceholder: 'search numbers'
    });

    dlb2.addEventListener('added', function(event) {
        console.log(event);
    });

    dlb2.addEventListener('removed', function(event) {
        console.log(event);
    });
</script>
`}
                                    </code>
                                </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <a className="card-header code-header" data-bs-toggle="collapse" href="#dlb3Example"
                               aria-expanded="false" aria-controls="dlb3Example">
                                <h5>Remove all the buttons from being rendered.</h5>
                                <i className="ti ti-code source" data-source="dlb3"></i>
                            </a>
                            <CardBody>
                                <select className="select3" multiple>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <pre className="dlb3 collapse mt-3" id="dlb3Example">
                                    <code className="language-html">
{`
<select class="select3" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<script>
    let dlb3 = new DualListbox('.select3', {
        showAddButton: false,
        showAddAllButton: false,
        showRemoveButton: false,
        showRemoveAllButton: false
    });
</script>
`}
                                    </code>
                                </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <a className="card-header code-header" data-bs-toggle="collapse" href="#dlb4Example"
                               aria-expanded="false"
                               aria-controls="dlb4Example">
                                <h5> Show the sort buttons</h5>
                                <i className="ti ti-code source" data-source="dlb4"></i>
                            </a>
                            <CardBody>
                                <select className="select4" multiple>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five</option>
                                    <option value="6">Six</option>
                                    <option value="7">Seven</option>
                                    <option value="8">Eight</option>
                                    <option value="9">Nine</option>
                                </select>
                                <pre className="dlb4 collapse mt-3" id="dlb4Example">
                                    <code className="language-html">
{`
<select class="select4" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>

<script>
    let dlb4 = new DualListbox('.select4', {
        showSortButtons: true
    });
</script>
`}
                                    </code>
                                </pre>
                            </CardBody>
                        </Card>
                    </Col>
                    <div className="col-md-12">
                        <Card>
                            <div className="card-header">
                                <h5>All options</h5>
                            </div>
                            <CardBody>
                                <div className="table-responsive">
                                    <table className="table table-bottom-border table-hover mb-0">
                                        <thead>
                                        <tr>
                                            <th>Option</th>
                                            <th>Default</th>
                                            <th>Excepted values</th>
                                            <th>Explanation</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th>draggable</th>
                                            <td>
                                                <code>true</code>
                                            </td>
                                            <td>
                                                <code>boolean</code>
                                            </td>
                                            <td>If the list items should be draggable.</td>
                                        </tr>
                                        <tr>
                                            <th>showSortButtons</th>
                                            <td>
                                                <code>false</code>
                                            </td>
                                            <td>
                                                <code>boolean</code>
                                            </td>
                                            <td> If the sort buttons should be shown. (up and down)</td>
                                        </tr>
                                        <tr>
                                            <th>enableDoubleClick</th>
                                            <td>
                                                <code>true</code>
                                            </td>
                                            <td>
                                                <code>boolean</code>
                                            </td>
                                            <td> If double clicking a list items should change column.</td>
                                        </tr>
                                        <tr>
                                            <th>showAddButton</th>
                                            <td>
                                                <code>true</code>
                                            </td>
                                            <td>
                                                <code>boolean</code>
                                            </td>
                                            <td>If the "add" button should be shown.</td>
                                        </tr>
                                        <tr>
                                            <th>showRemoveButton</th>
                                            <td>
                                                <code>true</code>
                                            </td>
                                            <td>
                                                <code>boolean</code>
                                            </td>
                                            <td>If the "remove" button should be shown.</td>
                                        </tr>
                                        <tr>
                                            <th>showAddAllButton</th>
                                            <td>
                                                <code>true</code>
                                            </td>
                                            <td>
                                                <code>boolean</code>
                                            </td>
                                            <td>If the "add all" button should be shown.</td>
                                        </tr>
                                        <tr>
                                            <th>showRemoveAllButton</th>
                                            <td>
                                                <code>true</code>
                                            </td>
                                            <td>
                                                <code>boolean</code>
                                            </td>
                                            <td>If the "remove all" button should be shown.</td>
                                        </tr>
                                        <tr>
                                            <th>availableTitle</th>
                                            <td>
                                                <code>"Available options"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The title that should be shown above the "Available options"</td>
                                        </tr>
                                        <tr>
                                            <th>selectedTitle</th>
                                            <td>
                                                <code>"Selected options"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The title that should be shown above the "Selected options"</td>
                                        </tr>
                                        <tr>
                                            <th>addButtonText</th>
                                            <td>
                                                <code>"add"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The text that should be displayed in the "add" button.</td>
                                        </tr>
                                        <tr>
                                            <th>removeButtonText</th>
                                            <td>
                                                <code>"remove"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The text that should be displayed in the "remove" button.</td>
                                        </tr>
                                        <tr>
                                            <th>addAllButtonText</th>
                                            <td>
                                                <code>"add all"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The text that should be displayed in the "add all" button.</td>
                                        </tr>
                                        <tr>
                                            <th>removeAllButtonText</th>
                                            <td>
                                                <code>"remove all"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The text that should be displayed in the "remove all" button.</td>
                                        </tr>
                                        <tr>
                                            <th>searchPlaceholder</th>
                                            <td>
                                                <code>"Search"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The text that should be displayed in the "search" fields.</td>
                                        </tr>
                                        <tr>
                                            <th>upButtonText</th>
                                            <td>
                                                <code>"up"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The text that should be displayed in the "up" button. (only when
                                                sorting is enabled)
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>downButtonText</th>
                                            <td>
                                                <code>"down"</code>
                                            </td>
                                            <td>
                                                <code>string</code>
                                            </td>
                                            <td> The text that should be displayed in the "down" button. (only when
                                                sorting is enabled)
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>options</th>
                                            <td>
                                                <code>undefined</code>
                                            </td>
                                            <td>
                                                <code>
{`
 Array<{text:"text to display",
value: "what the select value should be",
selected: false, order: 1
    }>
`}
                                                </code>
                                            </td>
                                            <td> A list of options that should be added. This will overwrite the select
                                                options
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>sortFunction</th>
                                            <td>
                                                <code>Function</code>
                                            </td>
                                            <td>
                                                <code>Function</code>
                                            </td>
                                            <td> A function to overwrite the default sorting that will be applied.</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <div className="card-header">
                                <h5>Public functions</h5>
                            </div>
                            <CardBody>
                                <div className="table-responsive">
                                    <table className="table table-bottom-border table-hover mb-0">
                                        <thead>
                                        <tr>
                                            <th>Function name</th>
                                            <th>Arguments</th>
                                            <th>Explanation</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th>changeOrder</th>
                                            <td>liItem, newPosition</td>
                                            <td> Change the order of the given list Element and the new position</td>
                                        </tr>
                                        <tr>
                                            <th>addOptions</th>
                                            <td>options</td>
                                            <td>Add a single option to the options list.</td>
                                        </tr>
                                        <tr>
                                            <th>addOption</th>
                                            <td>option, index (optional)</td>
                                            <td> Add a single option to the options list. Optionally add the index.</td>
                                        </tr>
                                        <tr>
                                            <th>addEventListener</th>
                                            <td>eventName, callback</td>
                                            <td>Add an eventListener</td>
                                        </tr>
                                        <tr>
                                            <th>changeSelected</th>
                                            <td>listItem</td>
                                            <td> Change the selected state of the list element.</td>
                                        </tr>
                                        <tr>
                                            <th>actionAllSelected</th>
                                            <td>event (optional)</td>
                                            <td>Change all items to be selected.</td>
                                        </tr>
                                        <tr>
                                            <th>actionAllDeselected</th>
                                            <td>event (optional)</td>
                                            <td>Change all items to not be selected.</td>
                                        </tr>
                                        <tr>
                                            <th>redraw</th>
                                            <td></td>
                                            <td>Redraw the lists.</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default DualList;