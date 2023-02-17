import React from 'react'

function List({ tripList, setTripList }) {
  return (
    <div className="container">
        {tripList.length > 0 ? (
            //mapowanie listy
            <div className="tripCard">
                
            </div>
        ) : (
            <p>Nie masz jeszcze żadnych wyjazdów</p>
        )}
    </div>
  )
}

export default List