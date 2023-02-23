import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function List({ tripList, setTripList }) {

  return (
    <div>
        {tripList.length > 0 ? (
            <div className="tripList">
                {tripList.map((trip, i) => (
                  <div key={i}>
                    <Accordion className="tripAcordation">
                      <Accordion.Item eventKey={i}>
                        <Accordion.Header>{trip.place}</Accordion.Header>
                        <Accordion.Body>
                          <p>Data rozpoczęcia: {trip.startDate}</p>
                          <p>Data zakończenia: {trip.endDate}</p>
                          <p>Lista osób:</p>
                          <ListGroup as="ol" numbered>
                            {trip.peopleArray.map((person, i) => (
                              <ListGroup.Item as="li" key={i}>{person}</ListGroup.Item>
                            ))}
                          </ListGroup>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                ))}
            </div>
        ) : (
            <p>Nie masz jeszcze żadnych wyjazdów</p>
        )}
    </div>
  )
}

export default List