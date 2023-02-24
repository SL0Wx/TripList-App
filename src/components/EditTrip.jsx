import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import "./style.css";

function EditTrip({ tripList, setTripList, trip, setEdit }) {
    const [place, setPlace] = useState(trip.place);
    const [startDate, setStartDate] = useState(trip.startDate);
    const [endDate, setEndDate] = useState(trip.endDate);
    const [person, setPerson] = useState("");
    const [peopleArray, setPeopleArray] = useState(trip.peopleArray);
    const [toggle, setToggle] = useState(false);
    const [peopleListToggle, setPeopleListToggle] = useState(false);
  
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    function handleEditTrip(e) {
        e.preventDefault();
        let trips = tripList;
        trip.place = place;
        trip.startDate = startDate;
        trip.endDate = endDate;
        trip.peopleArray = peopleArray;
        trips[trips.findIndex((t) => t === trip.id)] = trip;
        setTripList(trips);
        setEdit(false);
    }

    async function handleAddPerson(e) {
        e.preventDefault();
        setToggle(true);
        setPeopleArray([...peopleArray, person]);
        await delay(500);
        document.getElementById("person").value = "";
        setToggle(false);
    }

    return (
        <>
            <div className="editTripForm" style={{ left: peopleListToggle ? "22.5%" : "37.5%" }}>
                <CloseButton className="closeBtn" onClick={() => setEdit(false)} />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPlace">
                        <Form.Label>Miejsce</Form.Label>
                        <Form.Control type="text" placeholder="Nazwa miejsca" name="place" value={place} onChange={e => setPlace(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicStartDate">
                        <Form.Label>Data rozpoczęcia</Form.Label>
                        <Form.Control type="date" name="startDate" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEndDate">
                        <Form.Label>Data zakończenia</Form.Label>
                        <Form.Control type="date" name="endDate" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    </Form.Group>
                    <Row>
                        <Form.Label>Uczestnicy</Form.Label>
                        <Col xs={8}>
                            <Form.Group className="mb-3">
                                <Form.Control id="person" type="text" placeholder="Imię i nazwisko uczestnika" name="person" onChange={e => setPerson(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicAddPersonBtn" className="mb-3">
                                <Button variant="success" disabled={toggle} onClick={handleAddPerson}>{toggle ? "Dodano!" : "Dodaj"}</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group controlId="formBasicShowPeopleBtn" className="peopleListBtn">
                            <Button variant="outline-info" size="sm" onClick={() => setPeopleListToggle(true)}>Lista uczestników</Button>
                        </Form.Group>
                    </Row>
                    <Button variant="success" type="submit" onClick={handleEditTrip}>
                        Edytuj
                    </Button>
                </Form>
            </div>
            {peopleListToggle && (
                    <div className="peopleListBox">
                        <CloseButton className="closeBtn" onClick={() => setPeopleListToggle(false)} />
                        <ListGroup className="peopleList">
                          {peopleArray.map((person, i) => (
                            <>
                                <ListGroup.Item as="li" key={i}>{person}</ListGroup.Item>
                                <Button variant="outline-danger">Usuń</Button>
                            </>
                          ))}
                        </ListGroup>
                    </div>
            )}
        </>
  )
}

export default EditTrip