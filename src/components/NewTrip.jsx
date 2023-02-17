import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import React from 'react'
import "./style.css";

function NewTrip({ setAddNew }) {
  return (
    <div className="newTripForm">
        <CloseButton className="closeBtn" onClick={() => setAddNew(false)} />
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPlace">
                <Form.Label>Miejsce</Form.Label>
                <Form.Control type="text" placeholder="Nazwa miejsca" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStartDate">
                <Form.Label>Data rozpoczęcia</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEndDate">
                <Form.Label>Data zakończenia</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Dodaj
            </Button>
        </Form>
    </div>
  )
}

export default NewTrip