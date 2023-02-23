import { useState } from 'react';
import List from './components/List';
import NewTrip from './components/NewTrip';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  const [tripList, setTripList] = useState([]);
  const [addNew, setAddNew] = useState(false);

  return (
    <div className="App">
      <div className="overlay" style={{ display: addNew ? "block" : "none" }}></div>
      <div className="container">
        <h1>Twoja lista wyjazdów</h1>
        <List tripList={tripList} setTripList={setTripList} />
        <Button variant="success" className="addBtn" onClick={() => setAddNew(true)}>Dodaj nowe</Button>
        {addNew === true && (
          <NewTrip setAddNew={setAddNew} tripList={tripList} setTripList={setTripList} />
        )}
      </div>
    </div>
  );
}

export default App;
