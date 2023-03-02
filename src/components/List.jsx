import React from 'react'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import EditTrip from './EditTrip';
import ItemList from './ItemList';

function List({ tripList, setTripList, edit, setEdit, id, setId, itemsToggle, setItemsToggle }) {
  return (
    <div>
        {tripList.length > 0 ? (
            <div className="tripList">
              <Accordion className="tripAcordation">
                {tripList.map((trip, i) => (
                  <>
                    <Accordion.Item eventKey={i}>
                      <Accordion.Header>{trip.place}</Accordion.Header>
                      <Accordion.Body>
                        <p>Data rozpoczęcia: {trip.startDate}</p>
                        <p>Data zakończenia: {trip.endDate}</p>
                        <p>Lista osób:</p>
                        <ListGroup as="ol" numbered className="peopleList">
                          {trip.peopleArray.map((person, i) => (
                            <ListGroup.Item as="li" key={i}>{person.name}</ListGroup.Item>
                          ))}
                        </ListGroup>
                        <div className="itemsBtn">
                          <Button variant="secondary" onClick={() => setItemsToggle(true)}>Lista rzeczy</Button>
                        </div>
                        <div className="manageButtons">
                          <Button variant="success" className="editBtn" onClick={() => setEdit(true)}>Edytuj</Button>
                          <Button variant="danger" className="deleteBtn" onClick={() => {setTripList((tripList) => tripList.filter((t) => t.id !== trip.id))}}>Usuń</Button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    {edit === true && (
                      <EditTrip tripList={tripList} setTripList={setTripList} trip={trip} setEdit={setEdit} id={id} setId={setId} />
                    )}
                    {itemsToggle === true && (
                      <ItemList trip={trip} setItemsToggle={setItemsToggle} />
                    )}
                  </>
                ))}
              </Accordion>
            </div>
        ) : (
            <p>Nie masz jeszcze żadnych wyjazdów</p>
        )}
    </div>
  )
}

export default List