import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function List({ tripList, setTripList }) {

  return (
    <div>
        {tripList.length > 0 ? (
            <div className="tripList">
                {tripList.map((trip, i) => (
                  <div key={i}>
                    {/*<div className="tripBoxContent">
                      <h3>{trip.place}</h3>
                      <p>Data rozpoczęcia: {trip.startDate}</p>
                      <p>Data zakończenia: {trip.endDate}</p>
                    </div>*/}
                    <Accordion className="tripAcordation">
                      <Accordion.Item eventKey={i}>
                        <Accordion.Header>{trip.place}</Accordion.Header>
                        <Accordion.Body>
                          <p>Data rozpoczęcia: {trip.startDate}</p>
                          <p>Data zakończenia: {trip.endDate}</p>
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