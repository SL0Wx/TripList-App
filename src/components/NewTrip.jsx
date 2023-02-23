import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';
import "./style.css";

function NewTrip({ setAddNew, tripList, setTripList }) {
    const [place, setPlace] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [person, setPerson] = useState("");
    const [peopleArray, setPeopleArray] = useState([]);
    const [toggle, setToggle] = useState(false);
    
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    function handleAddTrip(e) {
        e.preventDefault();
        let newTrip = {
            place,
            startDate,
            endDate,
            peopleArray,
        }
        setTripList([...tripList, newTrip])
        setAddNew(false);
    }

    async function handleAddPerson(e) {
        e.preventDefault();
        setToggle(true);
        setPeopleArray([...peopleArray, person]);
        await delay(1000);
        document.getElementById("person").value = ""
        setToggle(false);
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
            <Row>
                <Col xs={8}>
                    <Form.Group controlId="formBasicPerson" className="mb-3">
                        <Form.Control id="person" type="text" placeholder="Imię i nazwisko uczestnika" name="person" onChange={e => setPerson(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicAddPersonBtn" className="mb-3">
                        <Button variant="success" disabled={toggle} onClick={handleAddPerson}>{toggle ? "Dodano!" : "Dodaj osobę"}</Button>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="success" type="submit" onClick={handleAddTrip}>
                Dodaj
            </Button>
        </Form>
    </div>
  )
}

export default NewTrip