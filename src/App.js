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
      <h1>Twoja lista wyjazdów</h1>
      <List tripList={tripList} setTripList={setTripList} />
      <Button variant="primary" onClick={() => setAddNew(true)}>Dodaj nowe</Button>
      {addNew === true && (
        <NewTrip setAddNew={setAddNew} />
      )}
    </div>
  );
}

export default App;
