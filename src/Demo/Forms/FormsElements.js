import React from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h5>Add Item</h5>
                                <hr />
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group>
                                                <p>Type</p>
                                                <Form.Check
                                                    inline
                                                    custom
                                                    type="radio"
                                                    label="Good"
                                                    name="supportedRadio"
                                                    id="supportedRadio21"
                                                />
                                                <Form.Check
                                                    inline
                                                    custom
                                                    type="radio"
                                                    label="Service"
                                                    name="supportedRadio"
                                                    id="supportedRadio22"
                                                />
                                            </Form.Group>
                                            <p>Item's Name</p>
                                            <Form.Control size="sm" type="text" className="mb-3" />
                                            <p>SKU</p>
                                            <Form.Control size="sm" type="text" className="mb-3" />
                                            <Form.Group>
                                                <p>Units</p>
                                                <Form.Control size="sm" type="text" className="mb-3" placeholder="Quantity" />
                                                <Form.Control
                                                    inline
                                                    as="select"
                                                    className="mr-sm-2"
                                                    id="inlineFormCustomSelect"
                                                    custom
                                                >
                                                    <option value="0">Choose...</option>
                                                    <option value="1">Dozen</option>
                                                    <option value="2">Box</option>
                                                    <option value="3">Grams</option>
                                                    <option value="4">Kilograms</option>
                                                    <option value="5">Units</option>
                                                    <option value="6">Pieces</option>
                                                    <option value="7">Pairs</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <p>Purchase Price</p>
                                            <Form.Group>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>$</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>.00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                                <p>Retail Price</p>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>$</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>.00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Product's Description</Form.Label>
                                                <Form.Control as="textarea" rows="3" />
                                            </Form.Group>
                                            <br></br>
                                            <Button variant="primary">
                                                Add Item
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsElements;
