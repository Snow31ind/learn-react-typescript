import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

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
      <Status status="loading" />
      <Heading>Hello</Heading>
      <Oscar>
        <p>Oscar</p>
      </Oscar>
      <Greet name="Quang Tien" isLoggedIn={true} />
    </div>
  );
}

export default App;
