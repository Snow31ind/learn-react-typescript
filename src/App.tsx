import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const personName = {
    first: 'Quang',
    last: 'Tien',
  };

  const personNames = [
    {
      first: 'Van',
      last: 'Hung',
    },
    {
      first: 'Nguyet',
      last: 'Anh',
    },
    {
      first: 'Kien',
      last: 'An',
    },
  ];

  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <Input value={''} handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
