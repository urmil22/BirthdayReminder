import './App.css';
import React, {useState} from 'react';
import data from './data';
import List from './List';

function App() {

   const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='list-container'>
        <h3 className="header text-danger">{people.length} Birthdays today</h3>
        <List people={people}/>
        <button className="clearBtn" onClick={()=> setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
