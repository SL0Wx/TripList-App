import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';
import "./style.css";

function NewTrip({ setAddNew, tripList, setTripList }) {
    const [place, setPlace] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    function handleAddTrip(e) {
        e.preventDefault();
        let newTrip = {
            place,
            startDate,
            endDate,
        }
        setTripList([...tripList, newTrip])
        setAddNew(false);
    }
  
    return (
    <div className="newTripForm">
        <CloseButton className="closeBtn" onClick={() => setAddNew(false)} />
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPlace">
                <Form.Label>Miejsce</Form.Label>
                <Form.Control type="text" placeholder="Nazwa miejsca" name="place" onChange={e => setPlace(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStartDate">
                <Form.Label>Data rozpoczęcia</Form.Label>
                <Form.Control type="date" name="startDate" onChange={e => setStartDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEndDate">
                <Form.Label>Data zakończenia</Form.Label>
                <Form.Control type="date" name="endDate" onChange={e => setEndDate(e.target.value)} />
            </Form.Group>

            <Button variant="success" type="submit" onClick={handleAddTrip}>
                Dodaj
            </Button>
        </Form>
    </div>
  )
}

export default NewTrip