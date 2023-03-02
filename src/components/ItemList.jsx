import React from 'react'
import { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function ItemList({ trip, setItemsToggle }) {
    const [toggle, setToggle] = useState(false);
    const [addItemToggle, setAddItemToggle] = useState(false);
  
    function handleAddItem(e) {
        e.preventDefault();
    }

    return (
    <>
        <div className="itemListBox" style={{ left: addItemToggle ? "22.5%" : "37.5%" }}>
            <CloseButton className="closeBtn" onClick={() => setItemsToggle(false)} />
            <ListGroup>
                {trip.itemArray.length > 0 ? (
                    trip.itemArray.map((item, i) => (
                        <></>
                    ))
                ) : (
                    <p>Brak listy rzeczy</p>
                )}
            </ListGroup>
            <Button variant="outline-info" size="sm" onClick={() => setAddItemToggle(true)}>Dodaj rzecz</Button>
            <div className="saveItems">
                <Button variant="success" onClick={() => setItemsToggle(false)}>Zapisz</Button>
            </div>
        </div>
        {addItemToggle === true && (
            <div className="itemListForm">
                <CloseButton className="closeBtn" onClick={() => setAddItemToggle(false)} />
                <Form>
                    <Row>
                        <Form.Label>Rzecz</Form.Label>
                        <Col xs={8}>
                            <Form.Group className="mb-3">
                                <Form.Control id="item" type="text" placeholder="Nazwa rzeczy" name="item" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicAddPersonBtn" className="mb-3">
                                <Button variant="success" disabled={toggle} onClick={handleAddItem}>{toggle ? "Dodano!" : "Dodaj"}</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        )}
    </>
  )
}

export default ItemList