import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class BillsTable extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bills</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Bill#</th>
                                        <th>Reference Number</th>
                                        <th>Vendor Name</th>
                                        <th>Amount</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>October 10 2020</td>
                                        <td>1</td>
                                        <td>42342</td>
                                        <td>Shein</td>
                                        <td>$30.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>October 10 2020</td>
                                        <td>2</td>
                                        <td>42342</td>
                                        <td>Nike</td>
                                        <td>$100.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>October 10 2020</td>
                                        <td>3</td>
                                        <td>42342</td>
                                        <td>Adidas</td>
                                        <td>$10,000.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>October 10 2020</td>
                                        <td>4</td>
                                        <td>42342</td>
                                        <td>Rebook</td>
                                        <td>$34.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>October 10 2020</td>
                                        <td>5</td>
                                        <td>42342</td>
                                        <td>Shein</td>
                                        <td>$60.00</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BillsTable;